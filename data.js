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
                id: 'overview',
                title: 'Overview',
                content: `<p>Recruitment teams often switch between different tools to review candidates, track interview progress, and record feedback. This slows decision-making and makes it harder to keep evaluations organized.</p>
                <p>Internal Interview Feedback brings these tasks into one connected workflow, helping recruitment teams review candidates, compare feedback, and make hiring decisions from one place.</p>`
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                content: `<ul class="cs-list">
                    <li>Show important information first.</li>
                    <li>Keep information easy to scan.</li>
                    <li>Reduce unnecessary navigation.</li>
                    <li>Maintain consistent workflows.</li>
                    <li>Support clear decision-making.</li>
                </ul>`
            },
            {
                id: 'user-journey',
                title: 'User Journey',
                content: `<div class="user-flow-diagram" style="text-align: center; margin-top: 2rem;">
                    <p style="font-size: 1.1rem; font-weight: 500;">Review Candidates &rarr; Track Interviews &rarr; Record Feedback &rarr; Make Hiring Decisions</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p>Each step follows the recruitment process, helping hiring teams move from candidate review to final decision without switching between multiple tools.</p>
                </div>`
            },
            {
                id: 'candidate-overview',
                group: 'Platform Design',
                title: 'Candidate Overview',
                layout: 'stacked',
                image: '/candidate_overview.png',
                content: `<h4>Goal</h4>
                <p>Help recruiters quickly understand each candidate.</p>
                <h4>Design Decision</h4>
                <p>Present candidate information as structured cards.</p>
                <h4>Why</h4>
                <p>Recruiters can review and compare candidates more efficiently.</p>`
            },
            {
                id: 'interview-progress',
                group: 'Platform Design',
                title: 'Interview Progress',
                layout: 'stacked',
                image: '/interview_progress.png',
                content: `<h4>Goal</h4>
                <p>Provide a clear view of every interview stage.</p>
                <h4>Design Decision</h4>
                <p>Display interview rounds in chronological order.</p>
                <h4>Why</h4>
                <p>Reviewers can understand the candidate's progress before moving to the next step.</p>`
            },
            {
                id: 'interview-feedback',
                group: 'Platform Design',
                title: 'Interview Feedback',
                content: `<h4>Goal</h4>
                <p>Keep interview evaluations organized and consistent.</p>
                <h4>Design Decision</h4>
                <p>Keep ratings and written feedback together.</p>
                <h4>Why</h4>
                <p>Reviewers can understand performance without searching across different sections.</p>`
            },
            {
                id: 'final-decision',
                group: 'Platform Design',
                title: 'Final Hiring Decision',
                layout: 'stacked',
                image: '/final_decision.png',
                content: `<h4>Goal</h4>
                <p>Support informed hiring decisions.</p>
                <h4>Design Decision</h4>
                <p>Keep candidate details and interview feedback together during the final review.</p>
                <h4>Why</h4>
                <p>Recruiters can make decisions with all relevant information in one place.</p>`
            },
            {
                id: 'responsive-design',
                title: 'Responsive Design',
                content: `<p>The platform adapts across screen sizes while keeping the same workflow and information structure. Larger layouts improve readability without changing familiar interactions.</p>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `<p>Explore the complete recruitment workflow:</p>
                <ul class="cs-list">
                    <li>Candidate Overview</li>
                    <li>Interview Progress</li>
                    <li>Interview Feedback</li>
                    <li>Final Hiring Decision</li>
                    <li>Responsive Web Experience</li>
                </ul>
                <div style="margin-top: 2rem;">
                    <a href="https://www.figma.com/proto/nr6vPXiIJc5cbAeuz4ZH6h/Internal-Interview-Feedback-System?node-id=51-17" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Opens Figma in a new tab">View Interactive Prototype ↗</a>
                </div>`
            },
            {
                id: 'takeaways',
                title: 'Key Takeaways',
                content: `<ul class="cs-list">
                    <li>Connected recruitment tasks into one workflow.</li>
                    <li>Kept interview information organized.</li>
                    <li>Reduced unnecessary navigation.</li>
                    <li>Maintained consistency across devices.</li>
                    <li>Improved product thinking through iteration.</li>
                </ul>`
            },
            {
                id: 'reflection',
                title: 'Reflection',
                content: `<p>This project helped me understand how organizing recruitment tasks into one workflow can simplify hiring. I focused on making candidate information easier to review while keeping the experience clear, consistent, and easy to follow.</p>`
            }
        ]
    },
    {
        id: 'arrear',
        title: 'Arrear',
        subtitle: '— Helping small businesses manage customer credit, track payments, and recover dues through one simple workflow.',
        shortDescription: 'Helping small businesses manage customer credit, track payments, and recover dues through one simple workflow.',
        platform: 'Mobile Application',
        timeline: '8 Weeks',
        role: 'Sole Product Designer',
        users: 'Small Business Owners',
        status: 'Completed',
        readingTime: '3 min read',
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: `<p>Many small business owners still manage customer credit using notebooks, spreadsheets, or messaging apps. As records grow, tracking pending payments and follow-ups becomes more difficult.</p>
                <p>Arrear brings customer records, payments, reminders, and reports into one mobile application, helping business owners manage collections through a clear and connected workflow.</p>`
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                content: `<ul class="cs-list">
                    <li>Prioritize important information.</li>
                    <li>Keep everyday tasks simple.</li>
                    <li>Reduce unnecessary navigation.</li>
                    <li>Maintain consistent interactions.</li>
                    <li>Make information easy to scan.</li>
                </ul>`
            },
            {
                id: 'user-journey',
                title: 'User Journey',
                content: `<div class="user-flow-diagram" style="text-align: center; margin-top: 2rem;">
                    <p style="font-size: 1.1rem; font-weight: 500;">Check Pending Payments &rarr; Review Customer &rarr; Record Payment &rarr; Schedule Follow-up &rarr; Track Progress</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p>The workflow follows how business owners manage collections, helping them complete each step without switching between different tools.</p>
                </div>`
            },
            {
                id: 'dashboard',
                group: 'Platform Design',
                title: 'Dashboard',
                layout: 'stacked',
                image: '/arrear_dashboard.png',
                content: `<h4>Goal</h4>
                <p>Help users quickly understand what needs attention.</p>
                <h4>Design Decision</h4>
                <p>Show overdue payments separately from the total outstanding amount.</p>
                <h4>Why</h4>
                <p>Users can identify urgent collections before reviewing individual customers.</p>`
            },
            {
                id: 'customer-list',
                group: 'Platform Design',
                title: 'Customer List',
                layout: 'stacked',
                content: `<h4>Goal</h4>
                <p>Help users quickly find and review customers.</p>
                <h4>Design Decision</h4>
                <p>Show payment status and outstanding balance together.</p>
                <h4>Why</h4>
                <p>Users can compare customers before opening their records.</p>`
            },
            {
                id: 'customer-details',
                group: 'Platform Design',
                title: 'Customer Details',
                layout: 'stacked',
                content: `<h4>Goal</h4>
                <p>Bring all customer information into one place.</p>
                <h4>Design Decision</h4>
                <p>Keep balance, payment history, and actions together.</p>
                <h4>Why</h4>
                <p>Users can review information and take the next step without changing screens.</p>`
            },
            {
                id: 'add-customer',
                group: 'Platform Design',
                title: 'Add Customer',
                layout: 'stacked',
                content: `<h4>Goal</h4>
                <p>Make adding new customers quick and simple.</p>
                <h4>Design Decision</h4>
                <p>Collect only the information needed to begin tracking credit.</p>
                <h4>Why</h4>
                <p>A shorter process makes it easier to record customers immediately.</p>`
            },
            {
                id: 'payment',
                group: 'Platform Design',
                title: 'Payment',
                layout: 'stacked',
                image: '/arrear_payment.png',
                content: `<h4>Goal</h4>
                <p>Help users keep payment records up to date.</p>
                <h4>Design Decision</h4>
                <p>Support both full and partial payments.</p>
                <h4>Why</h4>
                <p>This reflects how customers commonly repay outstanding balances.</p>`
            },
            {
                id: 'follow-up',
                group: 'Platform Design',
                title: 'Follow-up',
                layout: 'stacked',
                image: '/arrear_followup.png',
                content: `<h4>Goal</h4>
                <p>Help users stay organized after recording a payment.</p>
                <h4>Design Decision</h4>
                <p>Allow reminders to be scheduled from the customer record.</p>
                <h4>Why</h4>
                <p>Users can plan the next follow-up without interrupting their workflow.</p>`
            },
            {
                id: 'reports',
                group: 'Platform Design',
                title: 'Reports',
                layout: 'stacked',
                content: `<h4>Goal</h4>
                <p>Give users a clear view of collection progress.</p>
                <h4>Design Decision</h4>
                <p>Separate pending and recovered amounts.</p>
                <h4>Why</h4>
                <p>Users can quickly understand what has been collected and what still needs attention.</p>`
            },
            {
                id: 'prototype',
                title: 'Interactive Prototype',
                content: `<p>Explore the complete credit management workflow:</p>
                <ul class="cs-list">
                    <li>Dashboard</li>
                    <li>Customer List</li>
                    <li>Customer Details</li>
                    <li>Add Customer</li>
                    <li>Payment</li>
                    <li>Follow-up</li>
                    <li>Reports</li>
                </ul>
                <div style="margin-top: 2rem;">
                    <a href="https://www.figma.com/proto/rXmRi6ewsbM5IDr9Tq30jd/Credit-Recovery---2?node-id=1-4" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Opens Figma in a new tab">View Interactive Prototype ↗</a>
                </div>`
            },
            {
                id: 'takeaways',
                title: 'Key Takeaways',
                content: `<ul class="cs-list">
                    <li>Connected credit management into one workflow.</li>
                    <li>Simplified everyday collection tasks.</li>
                    <li>Kept important information easy to find.</li>
                    <li>Maintained a consistent experience across the application.</li>
                    <li>Strengthened product thinking through iteration.</li>
                </ul>`
            },
            {
                id: 'reflection',
                title: 'Reflection',
                content: `<p>This project helped me explore how simplifying everyday credit management can make collections easier for small businesses. I focused on creating a workflow that keeps customer information, payments, and follow-ups connected while making each step easy to understand and complete.</p>`
            }
        ]
    }
];
