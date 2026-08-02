document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        htmlElement.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Intersection Observer (Scroll Reveal) ---
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const initReveals = () => {
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    };

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    
    const initLightbox = () => {
        const caseStudyImages = document.querySelectorAll('.cs-image');
        if(lightbox && lightboxImg && lightboxClose) {
            caseStudyImages.forEach(img => {
                img.addEventListener('click', () => {
                    lightbox.style.display = "flex"; // Changed from block to flex for centering
                    void lightbox.offsetWidth; // Force reflow
                    lightbox.classList.add('active');
                    lightboxImg.src = img.src;
                });
            });
        }
    };

    if(lightboxClose) {
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => { lightbox.style.display = "none"; }, 300);
        };
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    // --- Keyboard Navigation (Next/Prev Project) ---
    document.addEventListener('keydown', (e) => {
        // Only trigger if not typing in an input (though there are none, it's good practice)
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (window.location.pathname.startsWith('/work/')) {
            const currentId = window.location.pathname.replace('/work/', '').replace(/\/$/, '');
            const currentIndex = projects.findIndex(p => p.id === currentId);
            
            if (e.key === ']' && currentIndex < projects.length - 1) {
                history.pushState(null, '', '/work/' + projects[currentIndex + 1].id);
                route(false);
            } else if (e.key === '[' && currentIndex > 0) {
                history.pushState(null, '', '/work/' + projects[currentIndex - 1].id);
                route(false);
            }
        }
    });

    // --- SPA Routing & Rendering ---
    const homeView = document.getElementById('home-view');
    const caseStudyView = document.getElementById('case-study-view');
    const projectList = document.getElementById('project-list');
    const mainElement = document.querySelector('main');
    
    const transitionView = (viewToShow, viewToHide, callback) => {
        if(mainElement) mainElement.classList.add('page-transitioning');
        
        setTimeout(() => {
            if(viewToHide) viewToHide.style.display = 'none';
            if(viewToShow) viewToShow.style.display = 'block';
            window.scrollTo(0, 0);
            if(callback) callback();
            
            // Allow DOM to update before fading back in
            requestAnimationFrame(() => {
                if(mainElement) mainElement.classList.remove('page-transitioning');
            });
        }, 150); // Matches CSS transition duration
    };

    const renderHome = (skipTransition = false) => {
        if (projectList && typeof projects !== 'undefined') {
            projectList.innerHTML = projects.map(p => `
                <a href="/work/${p.id}" class="project-card reveal" style="--delay: 0.2s" data-link>
                    <p class="project-platform">${p.platform}</p>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.shortDescription}</p>
                    <span class="project-link-text">View Case Study &rarr;</span>
                </a>
            `).join('');
        }
        
        if (skipTransition) {
            if(caseStudyView) caseStudyView.style.display = 'none';
            if(homeView) homeView.style.display = 'block';
            initReveals();
        } else {
            transitionView(homeView, caseStudyView, () => {
                initReveals();
            });
        }
    };

    const renderCaseStudy = (id, skipTransition = false) => {
        const project = typeof projects !== 'undefined' ? projects.find(p => p.id === id) : null;
        if (!project) {
            renderHome(skipTransition);
            return;
        }

        // Find Next Project
        const currentIndex = projects.findIndex(p => p.id === id);
        const nextProject = projects[currentIndex + 1];
        
        let groupedNav = {};
        let sectionsNavHtml = '';
        project.sections.forEach((s, index) => {
            if (s.group) {
                if (!groupedNav[s.group]) {
                    groupedNav[s.group] = [];
                    sectionsNavHtml += `<li class="cs-nav-group-title">${s.group}</li>`;
                }
                groupedNav[s.group].push(s);
                const hasNextInGroup = project.sections[index + 1] && project.sections[index + 1].group === s.group;
                sectionsNavHtml += `<li class="cs-nav-nested" style="position: relative;">
                    <a href="#section-${s.id}" class="cs-nav-link">${s.title}</a>
                    ${hasNextInGroup ? '<div class="cs-nav-line nested-line"></div>' : ''}
                </li>`;
            } else {
                const hasNextLevel = project.sections[index + 1] && !project.sections[index + 1].group;
                sectionsNavHtml += `<li style="position: relative;">
                    <a href="#section-${s.id}" class="cs-nav-link">${s.title}</a>
                    ${hasNextLevel ? '<div class="cs-nav-line"></div>' : ''}
                </li>`;
            }
        });

        let sectionsContentHtml = project.sections.map((s, index) => {
            if (s.layout === 'split-left' || s.layout === 'split-right') {
                return `
                <div id="section-${s.id}" class="cs-section reveal" style="--delay: 0.${(index % 5) + 1}s">
                    <div class="cs-split ${s.layout === 'split-left' ? 'image-left' : 'image-right'}">
                        <div class="cs-split-image">
                            ${s.image ? `<img src="${s.image}" alt="${s.title}" class="cs-image" loading="lazy" style="margin-bottom:0;">` : ''}
                        </div>
                        <div class="cs-split-text">
                            <h3>${s.title}</h3>
                            ${s.content}
                        </div>
                    </div>
                </div>
                `;
            } else {
                let imagesHtml = '';
                if (s.images && s.images.length > 0) {
                    if (s.images.length === 2) {
                        imagesHtml = `<div class="cs-images-side-by-side">
                            <img src="${s.images[0]}" alt="${s.title} 1" class="cs-image" loading="lazy">
                            <img src="${s.images[1]}" alt="${s.title} 2" class="cs-image" loading="lazy">
                        </div>`;
                    } else {
                        imagesHtml = s.images.map(img => `<div class="cs-image-breakout"><img src="${img}" alt="${s.title}" class="cs-image" loading="lazy"></div>`).join('');
                    }
                } else if (s.image) {
                    imagesHtml = `<div class="cs-image-breakout"><img src="${s.image}" alt="${s.title}" class="cs-image" loading="lazy"></div>`;
                }

                return `
                <div id="section-${s.id}" class="cs-section reveal" style="--delay: 0.${(index % 5) + 1}s">
                    ${imagesHtml}
                    <h3>${s.title}</h3>
                    ${s.content}
                </div>
                `;
            }
        }).join('');

        caseStudyView.innerHTML = `
            <div class="cs-layout container">
                <nav class="cs-sidebar reveal" style="--delay: 0.1s">
                    <a href="/" class="back-link" data-link>&larr; Back to projects</a>
                    <div class="cs-sidebar-content">
                        
                        <div class="cs-meta" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-color);">
                            <div style="margin-bottom: 1rem;">
                                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">Role</span>
                                <div style="font-size: 0.9rem; font-weight: 500;">${project.role}</div>
                            </div>
                            ${project.users ? `
                            <div style="margin-bottom: 1rem;">
                                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">Target Users</span>
                                <div style="font-size: 0.9rem; font-weight: 500;">${project.users}</div>
                            </div>` : ''}
                            ${project.readingTime ? `
                            <div>
                                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">Reading Time</span>
                                <div style="font-size: 0.9rem; font-weight: 500;">${project.readingTime}</div>
                            </div>` : ''}
                        </div>

                        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); display: block; margin-bottom: 1rem;">Navigation</span>
                        <ul class="cs-nav-list">
                            ${sectionsNavHtml}
                        </ul>
                    </div>
                </nav>
                <div class="cs-content">
                    <header class="cs-header reveal" style="--delay: 0.2s">
                        ${project.heroImage ? `<div class="cs-image-breakout"><img src="${project.heroImage}" alt="${project.title} Hero" class="cs-hero-img"></div>` : ''}
                        
                        <h1 class="cs-title">${project.title}</h1>
                        <p class="cs-subtitle">${project.subtitle}</p>
                        
                        <div style="margin-top: 2rem;">
                            <a href="#section-prototype" class="pill-btn">
                                <span class="pill-dot" style="display:inline-block; width:8px; height:8px; background:var(--text-primary); border-radius:50%; transition: background-color 0.3s ease;"></span>
                                View Interactive Prototype &rarr;
                            </a>
                        </div>
                    </header>
                    <div class="cs-sections">
                        ${sectionsContentHtml}
                    </div>
                    <div class="cs-footer reveal" style="--delay: 0.2s">
                        <hr class="cs-divider" style="margin: 4rem 0 2rem 0;">
                        <div style="background: var(--btn-hover); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color); text-align: center;">
                            <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">Thanks for reviewing this case study.</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 2rem;">If you have any questions about the decisions made or would like to see the Figma files, please reach out.</p>
                            <a href="/" class="btn btn-primary" data-link>Return to all projects</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        if (skipTransition) {
            if(homeView) homeView.style.display = 'none';
            if(caseStudyView) caseStudyView.style.display = 'block';
            initReveals();
            initLightbox();
            initStickyNav();
        } else {
            transitionView(caseStudyView, homeView, () => {
                initReveals();
                initLightbox();
                initStickyNav();
            });
        }
    };

    // --- Active Sticky Nav ---
    const initStickyNav = () => {
        const sections = document.querySelectorAll('.cs-section, .cs-header');
        const navLinks = document.querySelectorAll('.cs-nav-link');
        
        const observer = new IntersectionObserver((entries) => {
            let activeId = null;
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    activeId = entry.target.getAttribute('id');
                }
            });
            if (activeId) {
                // Update URL hash without jumping
                if (window.location.hash !== '#' + activeId) {
                    history.replaceState(null, null, '#' + activeId);
                }

                let foundActive = false;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    if(link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                        link.classList.add('completed');
                        foundActive = true;
                        
                        // Auto-scroll sidebar to keep active link visible
                        const sidebarContent = document.querySelector('.cs-sidebar');
                        if (sidebarContent && window.innerWidth > 900) {
                            const linkRect = link.getBoundingClientRect();
                            const sidebarRect = sidebarContent.getBoundingClientRect();
                            
                            if (linkRect.bottom > sidebarRect.bottom || linkRect.top < sidebarRect.top) {
                                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        }
                    } else if (!foundActive) {
                        // All links before the active one are considered completed
                        link.classList.add('completed');
                    } else {
                        // Links after the active one are not completed yet
                        link.classList.remove('completed');
                    }
                });
            }
        }, { rootMargin: '-10% 0px -70% 0px' });

        sections.forEach(sec => observer.observe(sec));

        // Smooth scroll for nav links and auto-close on mobile
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: 'smooth'
                    });
                    
                    if (window.innerWidth <= 900) {
                        const sidebarContent = document.querySelector('.cs-sidebar-content');
                        if (sidebarContent) {
                            sidebarContent.style.display = 'none';
                        }
                    }
                }
            });
        });
    };

    // --- Global Scroll Listeners (Header, Back to Top) ---
    const backToTopBtn = document.getElementById('back-to-top');
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        // Smart Header
        if (header) {
            if (winScroll > 100 && winScroll > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }
        lastScrollTop = winScroll <= 0 ? 0 : winScroll;

        // Back to top
        if (backToTopBtn) {
            if (winScroll > 500) {
                backToTopBtn.classList.remove('hidden');
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
                backToTopBtn.classList.add('hidden');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Global Navigation Fix (Main Header Links) ---
    document.body.addEventListener('click', (e) => {
        // Handle "Skip to final prototype" button
        const skipBtn = e.target.closest('a[href="#section-prototype"]');
        if (skipBtn) {
            e.preventDefault();
            const targetElement = document.querySelector('#section-prototype');
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            }
            return;
        }
    });

    const globalNavLinks = document.querySelectorAll('.header .nav-link');
    globalNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // If we are NOT on the home page, route to home first
            if (window.location.pathname.startsWith('/work/')) {
                e.preventDefault();
                history.pushState(null, '', '/');
                route(false);
                
                // Wait for render transition, then scroll
                const checkAndScroll = () => {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement && targetElement.offsetParent !== null) {
                        window.scrollTo({
                            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                            behavior: 'smooth'
                        });
                    } else {
                        requestAnimationFrame(checkAndScroll);
                    }
                };
                setTimeout(checkAndScroll, 50);
            } else {
                // We are on home page, handle normal smooth scrolling
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Router Logic ---
    let isInitialLoad = true;
    const route = (skipTransition = null) => {
        const path = window.location.pathname;
        const skip = skipTransition !== null ? skipTransition : isInitialLoad;
        
        if (path.startsWith('/work/')) {
            const id = path.replace('/work/', '').replace(/\/$/, '');
            renderCaseStudy(id, skip);
        } else {
            renderHome(skip);
        }
        isInitialLoad = false;
    };

    // Intercept internal links for SPA behavior
    document.body.addEventListener('click', e => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            history.pushState(null, '', link.href);
            route(false); // false means trigger transition
        }
    });

    window.addEventListener('popstate', () => route(false));
    route(); // Initial load
});
