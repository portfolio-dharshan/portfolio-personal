const projects = [
    {
        id: 'careflow',
        title: 'Careflow',
        subtitle: '— Simplifying healthcare appointments, medical records, and prescriptions into one connected experience.',
        shortDescription: 'Patients often switch between different systems to manage their healthcare.<br>CareFlow brings everything into one simple, connected experience.',
        platform: 'Mobile & Tablet',
        role: 'Product Designer',
        users: 'Patients',
        status: 'Completed',
        readingTime: '5 min read',
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: `<p>Healthcare services often require patients to switch between different interfaces for booking appointments, reviewing previous visits, and managing prescriptions. This fragmented experience increases navigation effort and makes important information harder to access when users need it most.</p>
                <p>Careflow was designed as a unified healthcare experience that connects these essential tasks within a single workflow. Rather than introducing additional functionality, the design focuses on reducing cognitive load through clear hierarchy, consistent interactions, and predictable navigation patterns.</p>
                <p>The project explores how simplifying information architecture can help patients complete common healthcare tasks more confidently while maintaining consistency across both mobile and tablet experiences.</p>`
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                content: `<h4>Prioritize Essential Information</h4>
                <p>Only information required for the current task receives visual priority. Secondary details remain accessible without competing for attention.</p>
                <br>
                <h4>Reduce Cognitive Load</h4>
                <p>Interactions follow familiar patterns and avoid unnecessary decisions, helping users complete tasks with minimal mental effort.</p>
                <br>
                <h4>Maintain Predictable Navigation</h4>
                <p>Users should always understand where they are, what they can do next, and how to return without confusion.</p>
                <br>
                <h4>Design for Consistency</h4>
                <p>Reusable layouts, spacing, hierarchy, and interaction patterns create a coherent experience across every screen and device.</p>`
            },
            {
                id: 'user-flow',
                title: 'User Journey',
                content: `<div class="user-flow-diagram" style="text-align: center; margin-top: 2rem;">
                    <p style="font-size: 1.1rem; font-weight: 500;">Dashboard &rarr; Find Doctor &rarr; Appointment Confirmed &rarr; History &rarr; Prescriptions</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p>The journey was intentionally designed around the most common patient workflow. Each step builds on the previous one, reducing unnecessary navigation while keeping important healthcare information accessible throughout the experience.</p>
                    <p>Rather than exposing every available feature upfront, the interface progressively reveals information as users move through the booking journey, helping maintain clarity without sacrificing functionality.</p>
                </div>`
            },
            {
                id: 'mobile-dashboard',
                group: 'Final Designs',
                title: 'Dashboard',
                layout: 'split-left',
                image: '/careflow_dashboard.png',
                content: `<h4>Objective</h4>
                <p>Provide patients with a clear starting point where upcoming care, medication reminders, and common healthcare actions are immediately accessible without requiring additional navigation.</p>
                <h4>Design Decisions</h4>
                <ul class="cs-list">
                    <li><strong>Prioritize time-sensitive information:</strong> Missed medication reminders and upcoming appointments appear before supporting content so users can quickly identify actions requiring immediate attention.</li>
                    <li><strong>Surface the next appointment:</strong> The upcoming appointment is positioned prominently to reduce the effort required to verify booking details or prepare for scheduled visits.</li>
                    <li><strong>Minimize navigation:</strong> Frequently used actions remain directly accessible from the dashboard, reducing unnecessary movement between screens.</li>
                    <li><strong>Establish a clear information hierarchy:</strong> Healthcare information is grouped according to importance, allowing users to scan the interface efficiently rather than reading every section.</li>
                    <li><strong>Reduce visual noise:</strong> Only information supporting the user's immediate healthcare tasks is displayed, preventing unnecessary content from competing for attention.</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>The dashboard establishes the experience for the rest of the product. Rather than functioning as a feature hub, it acts as a decision hub, helping users understand what requires attention first before exploring additional healthcare information.</p>`
            },
            {
                id: 'mobile-find-doctor',
                group: 'Final Designs',
                title: 'Find Doctor',
                layout: 'split-right',
                image: '/careflow_find_doctor.png',
                content: `<h4>Objective</h4>
                <p>Enable patients to quickly discover, evaluate, and book the most suitable doctor while minimizing unnecessary decision-making throughout the selection process.</p>
                <h4>Design Decisions</h4>
                <ul class="cs-list">
                    <li><strong>Support direct search:</strong> The search interface is positioned as the primary entry point, allowing users who already know what they need to begin immediately instead of browsing multiple categories.</li>
                    <li><strong>Prioritize appointment availability:</strong> Doctor availability is surfaced alongside profile information so users can make booking decisions without opening additional screens.</li>
                    <li><strong>Build confidence before booking:</strong> Professional experience, specialty, ratings, and consultation details are presented together to help patients compare options efficiently.</li>
                    <li><strong>Reduce interaction steps:</strong> A booking action is available directly within each doctor card, allowing users to move naturally from evaluation to scheduling.</li>
                    <li><strong>Maintain consistent information hierarchy:</strong> Every doctor card follows the same structure, enabling users to compare options through visual scanning rather than relearning layouts.</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>Finding a doctor should focus on reducing uncertainty rather than increasing choice. The screen emphasizes comparison and decision support while keeping the booking process straightforward.</p>`
            },
            {
                id: 'mobile-appointment-confirmed',
                group: 'Final Designs',
                title: 'Appointment Confirmed',
                layout: 'split-left',
                image: '/careflow_appointment_confirmed.png',
                content: `<h4>Objective</h4>
                <p>Reassure patients that their appointment has been successfully scheduled while providing immediate access to the information and actions they are most likely to need next.</p>
                <h4>Design Decisions</h4>
                <ul class="cs-list">
                    <li><strong>Communicate success immediately:</strong> A clear confirmation state removes uncertainty and helps users recognize that the booking process has been completed successfully.</li>
                    <li><strong>Surface essential appointment details:</strong> The doctor, date, time, and consultation information remain immediately visible so users can verify their booking without navigating elsewhere.</li>
                    <li><strong>Support future access:</strong> A downloadable appointment summary allows users to retain their booking information beyond the application.</li>
                    <li><strong>Enable easy sharing:</strong> Sharing functionality supports patients who coordinate appointments with family members or caregivers.</li>
                    <li><strong>Preserve user control:</strong> Cancellation remains available after confirmation but is visually secondary, reducing accidental interaction while maintaining flexibility.</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>Confirmation screens should conclude a task with confidence rather than introducing additional decisions. The interface focuses on reassurance first and secondary actions second.</p>`
            },
            {
                id: 'mobile-history',
                group: 'Final Designs',
                title: 'History',
                layout: 'split-right',
                image: '/careflow_history.png',
                content: `<h4>Objective</h4>
                <p>Provide patients with a structured view of previous healthcare visits so they can locate and review medical information without unnecessary searching.</p>
                <h4>Design Decisions</h4>
                <ul class="cs-list">
                    <li><strong>Organize information chronologically:</strong> Appointments are arranged in a consistent timeline, making previous consultations easier to scan and understand.</li>
                    <li><strong>Improve record discovery:</strong> Filtering options reduce the effort required to locate specific appointments or consultation history.</li>
                    <li><strong>Clarify appointment status:</strong> Status indicators communicate the outcome of previous visits at a glance without requiring users to open each record.</li>
                    <li><strong>Simplify document retrieval:</strong> Download actions remain directly associated with each appointment, supporting quick access to medical documentation.</li>
                    <li><strong>Group related information:</strong> Doctor details, specialty, consultation date, and status are presented together to improve readability and reduce visual searching.</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>Healthcare history is most valuable when information can be found quickly. The design prioritizes organization and readability over feature density.</p>`
            },
            {
                id: 'mobile-prescriptions',
                group: 'Final Designs',
                title: 'Prescriptions',
                layout: 'split-left',
                image: '/careflow_prescriptions.png',
                content: `<h4>Objective</h4>
                <p>Help patients understand, organize, and monitor their prescribed medications while keeping important treatment information accessible.</p>
                <h4>Design Decisions</h4>
                <ul class="cs-list">
                    <li><strong>Preserve medical context:</strong> Medications remain grouped under the prescribing doctor, helping users understand the relationship between treatment and consultation.</li>
                    <li><strong>Highlight urgent actions:</strong> Refill reminders and medication warnings receive greater visual emphasis than routine information to support timely action.</li>
                    <li><strong>Improve dosage clarity:</strong> Dosage instructions and schedules are displayed together, reducing the effort required to interpret treatment plans.</li>
                    <li><strong>Communicate prescription status:</strong> Prescription availability is surfaced through clear status indicators, helping users understand the next step without ambiguity.</li>
                    <li><strong>Support medication planning:</strong> Remaining medication duration is presented alongside each prescription to encourage proactive refill management.</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>Medication management depends more on clarity than complexity. The interface focuses on helping patients understand what to take, when to take it, and what action may be required next.</p>`
            },
            {
                id: 'responsive-design-intro',
                group: 'Responsive Design',
                title: 'Designing Beyond Mobile',
                content: `<p>Careflow was designed using a mobile-first approach before being adapted for tablet devices. Rather than scaling existing layouts, the responsive design reorganizes available space to improve readability, touch comfort, and information visibility while preserving familiar interaction patterns.</p>
                <p>Across every tablet screen, the objective was not to redesign the experience but to maintain continuity. Users transitioning between devices should immediately recognize the interface without needing to relearn navigation or workflows.</p>`
            },
            {
                id: 'tablet-dashboard',
                group: 'Responsive Design',
                title: 'Dashboard (Tablet)',
                layout: 'split-right',
                image: '/careflow_dashboard_tablet.png',
                content: `<h4>Responsive Objective</h4>
                <p>Leverage the additional screen width to improve information visibility while preserving the familiar mobile experience.</p>
                <h4>Key Adaptations</h4>
                <ul class="cs-list">
                    <li><strong>Increase information visibility:</strong> Health summaries expand horizontally, allowing users to understand their daily healthcare status with less scrolling.</li>
                    <li><strong>Improve readability:</strong> Cards provide additional spacing between related information, making important details easier to scan during quick visits.</li>
                    <li><strong>Preserve navigation familiarity:</strong> The overall interaction model remains unchanged, allowing users to move between devices without relearning the interface.</li>
                    <li><strong>Improve touch comfort:</strong> Interactive components receive additional spacing to improve touch accuracy on larger screens.</li>
                    <li><strong>Balance visual density:</strong> Additional whitespace is used to improve readability rather than introducing unnecessary content.</li>
                </ul>
                <h4>Responsive Reflection</h4>
                <p>The tablet dashboard focuses on improving visibility instead of increasing functionality. Existing workflows remain consistent while benefiting from improved readability.</p>`
            },
            {
                id: 'tablet-find-doctor',
                group: 'Responsive Design',
                title: 'Find Doctor (Tablet)',
                layout: 'split-left',
                image: '/careflow_find_doctor_tablet.png',
                content: `<h4>Responsive Objective</h4>
                <p>Improve doctor comparison by making better use of horizontal space without changing the overall booking workflow.</p>
                <h4>Key Adaptations</h4>
                <ul class="cs-list">
                    <li><strong>Improve comparison:</strong> Doctor information becomes easier to compare by expanding card layouts and reducing text compression.</li>
                    <li><strong>Enhance appointment discovery:</strong> Availability information remains visible alongside doctor details, reducing additional interactions.</li>
                    <li><strong>Increase readability:</strong> Additional spacing improves separation between doctor information, ratings, and booking actions.</li>
                    <li><strong>Maintain booking consistency:</strong> Booking interactions remain identical to the mobile experience, preserving user familiarity.</li>
                    <li><strong>Reduce visual crowding:</strong> The wider layout creates clearer separation between multiple doctor cards while maintaining consistent hierarchy.</li>
                </ul>
                <h4>Responsive Reflection</h4>
                <p>Rather than redesigning the booking experience, the tablet layout improves comparison and readability while preserving established interaction patterns.</p>`
            },
            {
                id: 'tablet-appointment-confirmed',
                group: 'Responsive Design',
                title: 'Appointment Confirmed (Tablet)',
                layout: 'split-right',
                image: '/careflow_appointment_confirmed_tablet.png',
                content: `<h4>Responsive Objective</h4>
                <p>Maintain focus on successful appointment confirmation while improving content presentation across a larger display.</p>
                <h4>Key Adaptations</h4>
                <ul class="cs-list">
                    <li><strong>Preserve confirmation hierarchy:</strong> The success state remains the dominant visual element regardless of screen size.</li>
                    <li><strong>Improve content spacing:</strong> Appointment information receives additional breathing room without disrupting the reading sequence.</li>
                    <li><strong>Group follow-up actions:</strong> Download, share, and cancellation actions remain visually connected to reduce scanning effort.</li>
                    <li><strong>Limit content width:</strong> Confirmation details avoid stretching across the full display, improving reading comfort.</li>
                    <li><strong>Maintain workflow consistency:</strong> The overall confirmation experience remains identical across devices.</li>
                </ul>
                <h4>Responsive Reflection</h4>
                <p>The larger display enhances readability without changing the user's mental model of completing a successful booking.</p>`
            },
            {
                id: 'tablet-history',
                group: 'Responsive Design',
                title: 'History (Tablet)',
                layout: 'split-left',
                image: '/careflow_history_tablet.png',
                content: `<h4>Responsive Objective</h4>
                <p>Make reviewing previous appointments easier by improving information density and scanability.</p>
                <h4>Key Adaptations</h4>
                <ul class="cs-list">
                    <li><strong>Expand appointment summaries:</strong> Additional width allows more medical information to remain visible without increasing vertical scrolling.</li>
                    <li><strong>Improve chronological scanning:</strong> Timeline content benefits from clearer spacing between appointments, making previous visits easier to distinguish.</li>
                    <li><strong>Maintain predictable filtering:</strong> Filtering controls remain in the same position, supporting consistency across devices.</li>
                    <li><strong>Improve document access:</strong> Download actions remain closely associated with each appointment record, reducing interaction effort.</li>
                    <li><strong>Preserve visual rhythm:</strong> The tablet layout expands content without changing the established organizational structure.</li>
                </ul>
                <h4>Responsive Reflection</h4>
                <p>Historical information benefits from improved readability rather than additional functionality. The tablet experience supports longer browsing sessions while maintaining familiarity.</p>`
            },
            {
                id: 'tablet-prescriptions',
                group: 'Responsive Design',
                title: 'Prescriptions (Tablet)',
                layout: 'split-right',
                image: '/careflow_prescriptions_tablet.png',
                content: `<h4>Responsive Objective</h4>
                <p>Improve medication readability while preserving the clear treatment hierarchy established in the mobile experience.</p>
                <h4>Key Adaptations</h4>
                <ul class="cs-list">
                    <li><strong>Improve medication visibility:</strong> Additional horizontal space reduces text wrapping, allowing dosage information to remain easier to read.</li>
                    <li><strong>Preserve treatment context:</strong> Medications continue to be grouped beneath the prescribing doctor to maintain clear medical relationships.</li>
                    <li><strong>Improve warning visibility:</strong> Refill reminders and medication alerts remain visually distinct without overwhelming surrounding information.</li>
                    <li><strong>Increase reading comfort:</strong> Spacing improvements reduce visual density while preserving the overall information hierarchy.</li>
                    <li><strong>Maintain interaction consistency:</strong> Navigation patterns and information placement remain aligned with the mobile experience.</li>
                </ul>
                <h4>Responsive Reflection</h4>
                <p>The tablet adaptation prioritizes readability over additional functionality, ensuring patients receive the same experience regardless of device size.</p>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `<p>This project was designed from the ground up for both Mobile and Tablet experiences, ensuring a seamless and consistent workflow across devices.</p>
                <p>The prototypes demonstrate the complete patient journey from discovering a doctor to managing healthcare records after booking. Rather than showcasing isolated screens, they focus on how interactions connect across the experience to help users complete common healthcare tasks through a predictable workflow.</p>
                
                <div style="display: flex; gap: 2rem; margin-top: 3rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px;">
                        <a href="https://www.figma.com/proto/xoAOkNTbabr6UvHBKw2I1J/RESPONSIVE-PROJECT?node-id=37-530&viewport=408%2C1108%2C0.17&t=spq1xf74DU2HP9p9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37%3A2&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" class="prototype-btn btn btn-primary" style="width: 100%;">View Mobile Prototype ↗</a>
                    </div>
                    <div style="flex: 1; min-width: 250px;">
                        <a href="https://www.figma.com/proto/0qWhPwOKfrYyiSghtnalSF/Careflow-Tab?node-id=2001-634&p=f&viewport=380%2C40%2C0.04&t=N8CABMMwuYqhN90S-1&scaling=scale-down&content-scaling=fixed&page-id=8%3A108" target="_blank" rel="noopener noreferrer" class="prototype-btn btn btn-primary" style="width: 100%;">View Tablet Prototype ↗</a>
                    </div>
                </div>
                
                <h4 style="margin-top: 4rem;">What the prototypes demonstrate</h4>
                <ul class="cs-list">
                    <li>Discovering a doctor</li>
                    <li>Booking an appointment</li>
                    <li>Reviewing confirmation details</li>
                    <li>Accessing appointment history</li>
                    <li>Managing prescriptions</li>
                </ul>
                <h4>Design Reflection</h4>
                <p>The prototypes were designed to validate navigation clarity and interaction consistency across the complete healthcare journey rather than individual screens.</p>`
            },
            {
                id: 'takeaways',
                title: 'Key Takeaways',
                content: `<p>Instead of focusing only on interface design, this project explored how simplifying healthcare workflows can improve the overall user experience.</p>
                <p>Throughout the project, several principles consistently influenced design decisions.</p>
                <br>
                <h4>Prioritize information over features</h4>
                <p>Users benefit more from understanding what requires attention than seeing every available feature simultaneously.</p>
                <br>
                <h4>Consistency reduces learning effort</h4>
                <p>Maintaining familiar layouts and interaction patterns allows users to move between screens with greater confidence.</p>
                <br>
                <h4>Simplicity requires deliberate prioritization</h4>
                <p>Reducing complexity is often the result of deciding what not to include rather than adding more functionality.</p>
                <br>
                <h4>Responsive design extends usability</h4>
                <p>Adapting layouts across devices should improve readability and interaction comfort without changing the underlying experience.</p>
                <br>
                <h4>Design is continuous refinement</h4>
                <p>Every screen represents one possible solution. Future iterations would continue improving workflows based on user feedback and product requirements.</p>`
            },
            {
                id: 'project-reflection',
                title: 'Project Reflection',
                content: `<h4>Looking Back</h4>
                <p>This project strengthened my understanding of designing connected healthcare experiences across multiple devices.</p>
                <p>Rather than approaching each screen independently, I focused on maintaining consistency throughout the complete patient journey while balancing clarity, hierarchy, and navigation.</p>
                <br>
                <h4>If the project continued, I would explore:</h4>
                <ul class="cs-list">
                    <li>Appointment reminders</li>
                    <li>Empty states</li>
                    <li>Error scenarios</li>
                    <li>Accessibility improvements</li>
                    <li>Patient profile management</li>
                    <li>Multi-user family accounts</li>
                    <li>Notification preferences</li>
                </ul>
                <p style="margin-top: 1rem;">These areas would help evolve the product into a more comprehensive healthcare platform.</p>`
            }
        ]
    },
    {
        id: 'interview-feedback-system',
        title: 'Internal Interview Feedback',
        subtitle: '— Bringing interview feedback, candidate progress, and hiring decisions into one structured workflow.',
        shortDescription: 'Bringing interview feedback, candidate progress, and hiring decisions into one structured workflow.',
        platform: 'Web Application',
        role: 'Product Designer',
        users: 'HR & Interviewers',
        status: 'Completed',
        readingTime: '2 min read',
        sections: [
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
                    <li>One place for interview feedback.</li>
                    <li>Easier candidate tracking.</li>
                    <li>Fewer screen changes.</li>
                    <li>More consistent evaluations.</li>
                    <li>Faster hiring decisions.</li>
                </ul>`
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
        shortDescription: 'Helping small businesses track customer credit, monitor pending payments, and recover outstanding dues through one simple mobile application.',
        platform: 'Mobile Application',
        role: 'Product Designer',
        users: 'Small Business Owners',
        status: 'Completed',
        readingTime: '3 min read',
        sections: [
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
