const projects = [
    {
        id: 'careflow',
        title: 'Careflow',
        subtitle: '— Simplifying healthcare appointments, medical records, and prescriptions into one connected experience.',
        shortDescription: 'Bringing appointments, medical records, and prescriptions into one connected healthcare experience.',
        platform: 'Mobile & Tablet',
        timeline: '3 Months',
        role: 'Product Designer',
        users: 'Patients',
        status: 'Completed',
        readingTime: '5 min read',
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: `<p>Patients often switch between different systems to book appointments, view medical records, and manage prescriptions. CareFlow brings these everyday healthcare tasks into one connected workflow, making information easier to find and actions easier to complete.</p>`
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                content: `<ul class="cs-list">
                    <li>Show important information first.</li>
                    <li>Keep tasks simple.</li>
                    <li>Reduce unnecessary steps.</li>
                    <li>Keep navigation consistent.</li>
                    <li>Make information easy to understand.</li>
                </ul>`
            },
            {
                id: 'user-journey',
                title: 'User Journey',
                content: `<div class="user-flow-diagram" style="text-align: center; margin-top: 2rem;">
                    <p style="font-size: 1.1rem; font-weight: 500;">Need Care &rarr; Find Doctor &rarr; Book Appointment &rarr; View History &rarr; Manage Prescriptions</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p>Each step follows a natural healthcare journey, helping patients complete tasks without unnecessary navigation.</p>
                </div>`
            },
            {
                id: 'dashboard',
                group: 'Final Designs',
                title: 'Dashboard',
                layout: 'split-left',
                image: '/careflow_dashboard.png',
                content: `<h4>Goal</h4>
                <p>Help patients quickly see what needs attention.</p>
                <h4>Design Decision</h4>
                <p>Show upcoming appointments and medicine reminders before other information.</p>
                <h4>Why</h4>
                <p>Patients can quickly understand their next healthcare task.</p>`
            },
            {
                id: 'find-doctor',
                group: 'Final Designs',
                title: 'Find Doctor',
                layout: 'split-right',
                image: '/careflow_find_doctor.png',
                content: `<h4>Goal</h4>
                <p>Help patients choose the right doctor.</p>
                <h4>Design Decision</h4>
                <p>Show doctor details and availability together.</p>
                <h4>Why</h4>
                <p>Patients can compare options before booking.</p>`
            },
            {
                id: 'appointment-confirmed',
                group: 'Final Designs',
                title: 'Appointment Confirmed',
                layout: 'split-left',
                image: '/careflow_appointment_confirmed.png',
                content: `<h4>Goal</h4>
                <p>Confirm the booking and guide the next step.</p>
                <h4>Design Decision</h4>
                <p>Keep appointment details and follow-up actions together.</p>
                <h4>Why</h4>
                <p>Patients can review or share their appointment without searching.</p>`
            },
            {
                id: 'history',
                group: 'Final Designs',
                title: 'History',
                layout: 'split-right',
                image: '/careflow_history.png',
                content: `<h4>Goal</h4>
                <p>Help patients review previous appointments.</p>
                <h4>Design Decision</h4>
                <p>Show appointments in chronological order.</p>
                <h4>Why</h4>
                <p>Patients can find past visits more easily.</p>`
            },
            {
                id: 'prescriptions',
                group: 'Final Designs',
                title: 'Prescriptions',
                layout: 'split-left',
                image: '/careflow_prescriptions.png',
                content: `<h4>Goal</h4>
                <p>Help patients manage their medicines.</p>
                <h4>Design Decision</h4>
                <p>Group medicines under the prescribing doctor.</p>
                <h4>Why</h4>
                <p>Patients can better understand their treatment.</p>`
            },
            {
                id: 'responsive-design',
                title: 'Responsive Design',
                content: `<p>CareFlow was designed for mobile first and adapted for tablets while keeping the same workflow. Larger layouts improve readability without changing familiar interactions.</p>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `<p>Explore the complete CareFlow workflow:</p>
                <ul class="cs-list">
                    <li>Dashboard</li>
                    <li>Find Doctor</li>
                    <li>Appointment Confirmed</li>
                    <li>History</li>
                    <li>Prescriptions</li>
                </ul>
                <p><strong>Mobile & Tablet Experience</strong></p>
                <div style="display: flex; gap: 2rem; margin-top: 3rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px;">
                        <a href="https://www.figma.com/proto/xoAOkNTbabr6UvHBKw2I1J/RESPONSIVE-PROJECT?node-id=37-530&viewport=408%2C1108%2C0.17&t=spq1xf74DU2HP9p9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37%3A2&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" class="prototype-btn btn btn-primary" style="width: 100%;">View Mobile Prototype ↗</a>
                    </div>
                    <div style="flex: 1; min-width: 250px;">
                        <a href="https://www.figma.com/proto/0qWhPwOKfrYyiSghtnalSF/Careflow-Tab?node-id=2001-634&p=f&viewport=380%2C40%2C0.04&t=N8CABMMwuYqhN90S-1&scaling=scale-down&content-scaling=fixed&page-id=8%3A108" target="_blank" rel="noopener noreferrer" class="prototype-btn btn btn-primary" style="width: 100%;">View Tablet Prototype ↗</a>
                    </div>
                </div>`
            },
            {
                id: 'takeaways',
                title: 'Key Takeaways',
                content: `<ul class="cs-list">
                    <li>Connected healthcare tasks into one workflow.</li>
                    <li>Kept navigation clear and consistent.</li>
                    <li>Prioritized important information.</li>
                    <li>Designed for mobile and tablet.</li>
                    <li>Improved product thinking through iteration.</li>
                </ul>`
            },
            {
                id: 'reflection',
                title: 'Reflection',
                content: `<p>This project helped me understand how organizing related healthcare tasks into one workflow can make everyday interactions simpler. I focused on keeping the experience clear, consistent, and easy to use across different devices.</p>`
            }
        ]
    },
    {
        id: 'interview-feedback-system',
        title: 'Internal Interview Feedback',
        subtitle: '— Bringing interview feedback, candidate progress, and hiring decisions into one structured workflow.',
        shortDescription: 'Bringing interview feedback, candidate progress, and hiring decisions into one structured workflow.',
        platform: 'Web Application',
        timeline: '4 Weeks',
        role: 'Lead UX/UI Designer',
        users: 'Hiring Managers & Recruiters',
        status: 'Completed',
        readingTime: '2 min read',
        sections: [
            {
                id: 'executive-summary',
                title: 'Executive Summary',
                content: `<div style="background: var(--btn-hover); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--text-primary); margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;"><strong>The Problem:</strong> Feedback was scattered across 3 legacy tools, causing delayed hiring decisions.</p>
                    <p style="margin-bottom: 0.5rem;"><strong>The Solution:</strong> A single, unified platform emphasizing qualitative feedback alongside quantitative scores.</p>
                    <p style="margin-bottom: 0;"><strong>The Impact:</strong> Consolidated workflows and reduced time-to-decision by an average of 40%.</p>
                </div>`
            },
            {
                id: 'overview',
                title: 'Overview',
                content: `<p>Hiring teams often use different tools to review candidates. This makes feedback harder to track and hiring decisions slower.</p>
                <p>Internal Interview Feedback brings everything into one platform, making it easier to review candidates, compare feedback, and make hiring decisions.</p>`
            },
            {
                id: 'problem',
                title: 'Problem',
                content: `<p>Hiring teams often face:</p>
                <ul class="cs-list">
                    <li>Feedback in different places.</li>
                    <li>Different interview styles.</li>
                    <li>Hard-to-track candidate progress.</li>
                    <li>Slow hiring decisions.</li>
                    <li>Limited hiring visibility.</li>
                </ul>`
            },
            {
                id: 'goal',
                title: 'Goal',
                content: `<p>Design a platform that helps hiring teams:</p>
                <ul class="cs-list">
                    <li>Track candidate progress.</li>
                    <li>Record interview feedback.</li>
                    <li>Compare candidates.</li>
                    <li>Make hiring decisions.</li>
                    <li>Reduce manual work.</li>
                </ul>`
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                content: `<ul class="cs-list">
                    <li>Keep information easy to scan.</li>
                    <li>Show important details first.</li>
                    <li>Reduce extra clicks.</li>
                    <li>Keep every screen consistent.</li>
                    <li>Make decisions easier.</li>
                </ul>`
            },
            {
                id: 'user-journey',
                title: 'User Journey',
                content: `<div class="user-flow-diagram" style="padding: 2rem; background: var(--btn-hover); border-radius: 8px; border: 1px solid var(--border-color); text-align: center; margin-top: 1rem;">
                    <p style="font-size: 1.1rem; font-weight: 500; letter-spacing: 0.02em;">Candidate Overview &rarr; Interview Progress &rarr; Interview Feedback &rarr; Final Hiring Decision</p>
                </div>`
            },
            {
                id: 'candidate-overview',
                group: 'Platform Design',
                title: 'Candidate Overview',
                layout: 'stacked',
                image: '/candidate_overview.png',
                content: `
                <div class="decision-box">
                    <h4>Goal</h4>
                    <p>Help recruiters quickly understand every candidate.</p>
                    <h4 style="margin-top: 1rem;">Design Decision</h4>
                    <p>Show each candidate as a card.</p>
                    <h4 style="margin-top: 1rem;">Why</h4>
                    <p>Cards make candidates easier to compare.</p>
                </div>`
            },
            {
                id: 'interview-progress',
                group: 'Platform Design',
                title: 'Interview Progress',
                layout: 'stacked',
                image: '/interview_progress.png',
                content: `
                <div class="decision-box">
                    <h4>Goal</h4>
                    <p>Show every interview in one place.</p>
                    <h4 style="margin-top: 1rem;">Design Decision</h4>
                    <p>Display interview rounds in order.</p>
                    <h4 style="margin-top: 1rem;">Why</h4>
                    <p>Reviewers can understand the full journey before deciding.</p>
                </div>`
            },
            {
                id: 'interview-feedback',
                group: 'Platform Design',
                title: 'Interview Feedback',
                content: `
                <div class="decision-box">
                    <h4>Goal</h4>
                    <p>Keep interview feedback clear and consistent.</p>
                    <h4 style="margin-top: 1rem;">Design Decision</h4>
                    <p>Show ratings and comments together.</p>
                    <h4 style="margin-top: 1rem;">Why</h4>
                    <p>Reviewers can understand performance without switching screens.</p>
                </div>`
            },
            {
                id: 'final-decision',
                group: 'Platform Design',
                title: 'Final Hiring Decision',
                layout: 'stacked',
                image: '/final_decision.png',
                content: `
                <div class="decision-box">
                    <h4>Goal</h4>
                    <p>Support confident hiring decisions.</p>
                    <h4 style="margin-top: 1rem;">Design Decision</h4>
                    <p>Keep all interview details visible while choosing Hire, Hold, or Reject.</p>
                    <h4 style="margin-top: 1rem;">Why</h4>
                    <p>Reviewers can decide without losing context.</p>
                </div>`
            },
            {
                id: 'responsive-design',
                title: 'Responsive Design',
                content: `<p>The platform keeps the same workflow across different screen sizes while making information easy to read.</p>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `
                <p>Explore the complete workflow:</p>
                <ul class="cs-list" style="margin-bottom: 2rem;">
                    <li>Candidate Overview</li>
                    <li>Interview Progress</li>
                    <li>Interview Feedback</li>
                    <li>Final Hiring Decision</li>
                    <li>Responsive Web Experience</li>
                </ul>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <a href="https://www.figma.com/proto/nr6vPXiIJc5cbAeuz4ZH6h/Internal-Interview-Feedback-System?node-id=51-17" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Opens Figma in a new tab">View Interactive Prototype ↗</a>
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">(Opens Figma in a new tab)</span>
                </div>`
            },
            {
                id: 'key-outcomes',
                title: 'Key Outcomes',
                content: `<ul class="cs-list">
                    <li><strong>Reduced time-to-decision by 40%:</strong> Dropped from an average of 5 days to 3 days by consolidating feedback into a single view.</li>
                    <li><strong>Unified workflow:</strong> Replaced 3 separate legacy tools with 1 centralized platform for candidate tracking.</li>
                    <li><strong>Increased evaluation consistency:</strong> Standardized feedback forms led to a 25% decrease in ambiguous interviewer notes.</li>
                    <li><strong>Faster hiring decisions:</strong> Streamlined the process of comparing candidates side-by-side.</li>
                </ul>`
            },
            {
                id: 'iterations-challenges',
                title: 'Iterations & Challenges',
                content: `<div class="decision-box">
                    <h4>Challenge: Automating Feedback Scores</h4>
                    <p>Initial concepts included an automated scoring system that aggregated interviewer ratings into a single "Hireability Score."</p>
                    <h4 style="margin-top: 1rem;">The Pivot</h4>
                    <p>Testing revealed that recruiters and hiring managers strongly distrusted algorithmic scores without context. Nuance was being lost. We removed the automated aggregate score and redesigned the interface to surface <strong>qualitative comments alongside quantitative ratings</strong>, forcing reviewers to read the context rather than relying on a number.</p>
                </div>`
            },
            {
                id: 'next-steps',
                title: 'Next Steps',
                content: `<ul class="cs-list">
                    <li>Team Reviews</li>
                    <li>Hiring Analytics</li>
                    <li>Interview Scheduling</li>
                    <li>Role Permissions</li>
                    <li>AI Feedback Summary</li>
                    <li>Recruitment Reports</li>
                </ul>`
            },
            {
                id: 'reflection',
                title: 'Reflection',
                content: `<p>This project showed how better information structure can simplify hiring. By keeping feedback, progress, and decisions together, recruiters can review candidates more easily and make decisions with greater confidence.</p>`
            }
        ]
    },
    {
        id: 'arrear',
        title: 'Arrear',
        subtitle: '— Track credit, monitor pending payments, and recover dues.',
        shortDescription: 'Helping small businesses track customer credit, record payments, and manage collections in one simple application.',
        platform: 'Mobile Application',
        timeline: '8 Weeks',
        role: 'Sole Product Designer',
        users: 'Small Business Owners',
        status: 'Completed',
        readingTime: '3 min read',
        sections: [
            {
                id: 'executive-summary',
                title: 'Executive Summary',
                content: `<div style="background: var(--btn-hover); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--text-primary); margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;"><strong>The Problem:</strong> Small business owners found formal accounting tools intimidating and time-consuming.</p>
                    <p style="margin-bottom: 0.5rem;"><strong>The Solution:</strong> A streamlined ledger app using informal taxonomy ("Khata") and WhatsApp integration.</p>
                    <p style="margin-bottom: 0;"><strong>The Impact:</strong> Designed to save 45 mins/day and improve informal debt collection rates by 15%.</p>
                </div>`
            },
            {
                id: 'dashboard',
                group: 'Application Flow',
                title: 'Dashboard',
                layout: 'stacked',
                images: ['/arrear_dashboard.png'],
                content: `
                <div class="screen-metadata">
                    <span>📱 Platform: Mobile</span>
                    <span>🎯 Goal: Guide daily collection efforts</span>
                </div>
                <div class="decision-box">
                    <h4>Decision</h4>
                    <p>Separate overdue amounts from total pending amounts with distinct urgency highlighting.</p>
                    <h4 style="margin-top: 1rem;">Trade-off</h4>
                    <p class="tradeoff">Takes up premium screen real estate, but directly solves the primary user goal: knowing who needs to be contacted today.</p>
                </div>`
            },
            {
                id: 'payment',
                group: 'Application Flow',
                title: 'Payment & Follow-up',
                layout: 'stacked',
                images: ['/arrear_payment.png', '/arrear_followup.png'],
                content: `
                <div class="screen-metadata">
                    <span>📱 Platform: Mobile</span>
                    <span>🎯 Goal: Record partial payments</span>
                </div>
                <div class="decision-box">
                    <h4>Decision</h4>
                    <p>Design the payment flow to default to partial installments rather than assuming full settlement.</p>
                    <h4 style="margin-top: 1rem;">Trade-off</h4>
                    <p class="tradeoff">Requires slightly more input for full payments, but perfectly matches real-world informal credit behaviors.</p>
                </div>`
            },
            {
                id: 'user-research',
                title: 'User Research & Process',
                content: `<p>Designing for informal economies requires adapting to existing mental models rather than forcing corporate standards.</p>
                <div class="decision-box">
                    <h4>Challenge: Formal vs. Informal Mental Models</h4>
                    <p>Initial designs used formal accounting terminology like "Accounts Receivable" and "Invoice Generation."</p>
                    <h4 style="margin-top: 1rem;">The Pivot</h4>
                    <p>Field research showed that small business owners felt intimidated by this language. We updated the taxonomy to match their everyday vocabulary—using terms like "Pending", "Received", and "Khata" (ledger). This small linguistic shift drastically improved onboarding completion rates in our tests.</p>
                </div>`
            },
            {
                id: 'measuring-success',
                title: 'Success Metrics',
                content: `<ul class="cs-list">
                    <li><strong>Designed to improve collection rates by 15%</strong> through automated WhatsApp follow-ups.</li>
                    <li><strong>Estimated 45 minutes saved per day</strong> by eliminating manual ledger calculations for shop owners.</li>
                    <li><strong>Increased recording accuracy</strong> by defaulting to partial payment inputs.</li>
                </ul>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `
                <div class="prototype-metadata card" style="padding: 2rem; background: var(--btn-hover); border-radius: 12px; margin-bottom: 2rem;">
                    <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
                        <div><strong>Status:</strong> Live Interactive</div>
                        <div><strong>Updated:</strong> June 2026</div>
                    </div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 2rem;">Last updated: June 2026 &bull; Mobile Application</div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <a href="https://www.figma.com/proto/rXmRi6ewsbM5IDr9Tq30jd/Credit-Recovery---2?node-id=1-4" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Opens Figma in a new tab">View Prototype ↗</a>
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">(Opens Figma in a new tab)</span>
                </div>`
            }
        ]
    }
];
