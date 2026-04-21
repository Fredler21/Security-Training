# EdLight Security Training Platform

## Product Description
EdLight Security Training Platform is a premium internal web application designed to provide structured cybersecurity training for employees, track learning progress, and give administrators full visibility into employee participation and completion. The platform will function as a modern website with dashboards, secure Google login, employee management, and backend integration with Google Workspace and Firebase. The entire application, including frontend and backend, must be built in TypeScript.

---

## Product Overview

The EdLight Security Training Platform is an internal cybersecurity training website for EdLight employees. It is designed to improve security awareness across the organization through structured learning modules, quizzes, tracking, and administration tools.

The platform must feel like a real premium SaaS website, not a school project or simple content page. It must include a polished user-facing website, employee dashboard, admin dashboard, company Google login, and backend systems that support employee management and training progress.

The platform will be developed in four phases:

- **V1:** Public-facing training website with premium design and core learning experience
- **V2:** Employee authentication, dashboard, and progress tracking
- **V3:** Admin dashboard, Google Workspace sync, and Firebase backend expansion
- **V4:** Advanced automation, analytics, reminders, and enterprise-grade training management

---

## Problem Statement

Employees are one of the most common entry points for cybersecurity risks. Many incidents happen because of human error rather than technical failure.

Common risks include:

- Weak or reused passwords
- Clicking phishing links
- Unsafe browsing behavior
- Poor account and device security
- Lack of understanding of company access policies
- No centralized way to measure training completion

EdLight needs a centralized and scalable platform that teaches employees cybersecurity fundamentals, tracks participation, and gives administrators visibility into progress and compliance.

---

## Vision

Build a premium internal training website that helps EdLight create a stronger cybersecurity culture. The product should be simple enough for non-technical employees to use, while also being powerful enough for administrators to manage employee participation and track completion.

---

## Goals

### Primary Goals

- Improve employee cybersecurity awareness
- Reduce human-related security risks
- Deliver a structured and engaging training experience
- Track employee progress and completion
- Provide administrators with visibility into employee participation

### Secondary Goals

- Create a reusable onboarding and training system
- Integrate with company identity through Google Workspace
- Build a secure and scalable internal platform
- Establish a premium, trustworthy internal product experience

---

## Target Users

### Primary Users

- Non-technical employees
- New hires
- Existing staff completing required training

### Secondary Users

- Security lead
- IT administrators
- Operations leadership
- Management team

---

## Product Type

This product must be a full website with the following characteristics:

- Premium modern UI
- Public homepage or landing page
- Employee login area
- Employee training dashboard
- Admin dashboard
- Responsive design for desktop, tablet, and mobile
- Secure Google login
- Firebase-connected backend
- Google Workspace employee sync
- Entire system built in TypeScript

---

## Core Product Principles

- Simple for non-technical employees
- Premium and modern in design
- Secure by default
- Easy to scale
- Clear separation between employee and admin experiences
- Strong visibility into training status
- All logic and services written in TypeScript

---

## Technical Requirements

### Mandatory Rule
The entire application must be built in TypeScript.

This includes:

- Frontend application
- Backend services
- API routes
- Firebase integration
- Admin logic
- Authentication handling
- Data models and services

### Recommended Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js with TypeScript |
| Styling | Tailwind CSS |
| Backend | Node.js with TypeScript |
| Authentication | Firebase Authentication with Google provider |
| Database | Firestore |
| Integrations | Google Workspace Directory integration |
| Hosting | Vercel or equivalent modern deployment platform |

---

## User Roles

### Employee

- Sign in with company Google account
- View assigned modules
- Complete lessons
- Answer questions
- Track personal completion progress

### Admin

- Sign in with elevated privileges
- View all employees
- Monitor progress and completion
- Search and filter users
- View module-level completion data
- Manage training status and reporting

### Super Admin

- Configure platform settings
- Manage admin roles
- Configure Workspace sync settings
- Control training requirements and future automations

---

## Authentication and Identity

The platform must support Google login for company users.

Requirements:

- Employees log in using company Google accounts
- Access must be restricted to the company domain such as `@edlight.org`
- Firebase Authentication must be used for login handling
- Role-based access must determine whether a user sees employee or admin dashboards
- User identity should sync with Google Workspace employee records
- Sessions must be handled securely

---

## Google Workspace Integration

The platform will connect with Google Workspace to support employee identity and directory visibility.

### Purpose

- Pull employee list
- Sync name and company email
- Identify active and inactive users
- Support admin visibility into all employees
- Reduce manual employee entry

### Requirements

- Employee directory sync
- Support for viewing all employees inside admin dashboard
- Sync fields: name, email, status, department (if available), and role (if defined internally)
- Directory sync must be handled through secure backend services only
- Frontend must never expose sensitive admin credentials or service logic

---

## Firebase Integration

Firebase will support the backend layer of the platform.

### Responsibilities

- Authentication
- User session handling
- Employee profile creation
- Progress tracking
- Module completion data
- Quiz result storage
- Admin dashboard data access

---

## Information Architecture

The website should include these major sections:

### Public Website

- Homepage
- About / Why Security Matters
- Training overview
- Feature highlights
- Login page

### Employee Area

- Employee dashboard
- Modules list
- Individual module pages
- Progress page
- Profile/settings page

### Admin Area

- Admin dashboard
- Employee management table
- Progress and completion analytics
- Individual employee detail view
- Module performance overview
- Platform settings

---

## Page Requirements

### 14.1 Homepage

**Purpose**
Serve as the premium main entry point of the platform.

**Content**

- Strong hero section
- Product title and description
- Security-focused branding
- Overview of the training system
- Benefits for employees and company
- Call to action for sign-in
- Feature cards
- Module preview section
- Dashboard preview visuals
- Footer with internal system information

**Design Expectations**

- Premium SaaS look
- Modern spacing
- Strong visual hierarchy
- Clean typography
- Light theme by default
- Dark mode option
- Subtle security motifs such as shield or lock-inspired iconography

---

### 14.2 Login Page

**Purpose**
Allow employees and admins to sign in securely.

**Features**

- Google login button
- Messaging about company-only access
- Secure and minimal layout
- Error state for unauthorized domains
- Loading state during sign-in

---

### 14.3 Employee Dashboard

**Purpose**
Give employees a central place to access training.

**Features**

- Welcome message
- Progress overview
- Percentage completed
- Cards for all assigned modules
- Module status: not started, in progress, completed
- Continue learning action
- Recent activity summary
- Completion reminders if modules are unfinished

---

### 14.4 Module Listing Page

**Purpose**
Display all available cybersecurity modules.

**Features**

- List or card view of modules
- Search or filter if needed
- Completion status
- Recommended order
- Estimated time per module

---

### 14.5 Training Module Page

**Purpose**
Deliver training content in a clean, readable format.

**Structure**

- Module title
- Lecture content
- Key takeaways section
- Real-life scenario section
- Questions or quiz section
- Completion button
- Save progress behavior

**Content Format**

- Short lecture first
- Questions immediately after
- Designed for readability
- Easy language for non-technical employees

---

### 14.6 Progress Page

**Purpose**
Allow employees to view overall completion.

**Features**

- Total progress percentage
- Completed modules
- Remaining modules
- Completion timeline
- Quiz results if applicable
- Training streak or recent activity in later versions

---

### 14.7 Admin Dashboard

**Purpose**
Give administrators a full view of employee training activity.

**Features**

- Total employees
- Number completed
- Number in progress
- Number not started
- Completion rate
- Quick metrics cards
- Charts for module completion
- Recent activity
- Alerts for overdue training

---

### 14.8 Employee Management Page

**Purpose**
Allow admins to view all employees synced into the system.

**Features**

- Employee table
- Search by name or email
- Filters by status
- Filters by completion
- Sort options
- View employee details
- Active/inactive indicator

---

### 14.9 Employee Detail Page

**Purpose**
Let admins inspect one employee's full training record.

**Features**

- Name
- Email
- Role
- Overall completion percentage
- Individual module statuses
- Quiz results
- Last login
- Last completed activity

---

### 14.10 Settings Page

**Purpose**
Allow system management and configuration.

**Features**

- Branding settings
- Role management
- Module visibility controls
- Sync settings
- Reminder configuration in later versions
- Admin-only access

---

## Training Content Structure

The platform should begin with 5 main modules.

| Module | Title |
|---|---|
| Module 1 | Password Security |
| Module 2 | Phishing Awareness |
| Module 3 | Safe Browsing |
| Module 4 | Company Access Policy |
| Module 5 | Device and Network Security |

Each module must include:

- Introductory lecture
- Key takeaways
- Real-life examples
- Questions or quiz
- Completion action

---

## UX Requirements

### General UX Requirements

- Easy for non-technical employees
- Fast navigation
- Clear call-to-action buttons
- Low-friction login flow
- Consistent dashboard layout
- Responsive on mobile and desktop
- Smooth transitions and hover states
- Good empty states and loading states

### Employee UX Goals

- Know what to do immediately after login
- See which modules are left
- Understand training progress easily
- Never feel lost or overwhelmed

### Admin UX Goals

- Instantly see organization-wide progress
- Search employees quickly
- Understand who is missing training
- Navigate from summary to detail with minimal clicks

---

## UI Design Requirements

### Visual Style

- Premium SaaS dashboard style
- Clean and elegant
- Modern and secure feeling
- Light theme default
- Optional dark mode
- Deep navy, charcoal, white, and subtle teal accents
- Rounded corners
- Soft shadows
- Spacious layout
- Strong typography hierarchy

### Components

- Sidebar navigation
- Top navigation bar
- Cards
- Data tables
- Progress bars
- Status badges
- Charts
- Search fields
- Filters
- Buttons with subtle hover effects

---

## Data Models

### 18.1 User Model

| Field | Type |
|---|---|
| id | string |
| name | string |
| email | string |
| role | string |
| department | string |
| status | string |
| profileImage | string |
| createdAt | timestamp |
| updatedAt | timestamp |
| lastLoginAt | timestamp |

### 18.2 Employee Training Progress Model

| Field | Type |
|---|---|
| id | string |
| userId | string |
| overallProgress | number |
| completedModulesCount | number |
| totalModulesCount | number |
| status | string |
| lastActivityAt | timestamp |
| updatedAt | timestamp |

### 18.3 Module Model

| Field | Type |
|---|---|
| id | string |
| title | string |
| slug | string |
| description | string |
| order | number |
| estimatedMinutes | number |
| isActive | boolean |
| createdAt | timestamp |
| updatedAt | timestamp |

### 18.4 Module Completion Model

| Field | Type |
|---|---|
| id | string |
| userId | string |
| moduleId | string |
| completed | boolean |
| completedAt | timestamp |
| score | number |
| attempts | number |
| lastViewedAt | timestamp |

### 18.5 Quiz Question Model

| Field | Type |
|---|---|
| id | string |
| moduleId | string |
| question | string |
| type | string |
| options | array |
| correctAnswer | string |
| explanation | string |

---

## Functional Requirements

### Employee Features

- Log in with Google
- View dashboard
- See assigned modules
- Open a module
- Read lecture content
- Answer questions
- Mark module as complete
- Track personal progress
- Return and continue unfinished modules

### Admin Features

- View all employees
- View training completion stats
- Search and filter employees
- View employee details
- View module completion performance
- Track who has not started
- Track overdue or incomplete training in later versions

### System Features

- Restrict login to company domain
- Sync users from Workspace
- Store progress in Firebase
- Save quiz data
- Manage roles
- Display analytics
- Protect admin routes

---

## Non-Functional Requirements

- Entire platform must be written in TypeScript
- Fast load time
- Mobile responsive
- Secure authentication
- Clean and scalable codebase
- Reusable component architecture
- Strong role-based protection
- Maintainable backend service structure
- Cloud-ready deployment

---

## Security Requirements

- Domain-restricted Google login
- Backend-only access to sensitive integration logic
- Protected admin routes
- Role-based access control
- Validation of session and user role
- No exposure of sensitive service configuration in frontend
- Audit-friendly data structure for progress and completion
- Secure API route design
- Minimal-privilege access where possible

---

## Development Phases

### V1 — Premium Training Website

**Goal**
Launch the first version as a polished internal training website.

**Scope**

- Premium homepage
- Login page UI
- Employee training pages
- 5 training modules
- Lecture and quiz structure
- Completion flow
- Frontend-only experience or minimal auth-ready scaffolding
- Responsive design
- Entirely in TypeScript

**Deliverables**

- Homepage
- Module pages
- Basic employee-facing dashboard UI
- Premium UI system
- Content structure for 5 modules

**Limitations**

- Limited user tracking
- No full employee sync
- Basic completion handling only

---

### V2 — Authenticated Employee Platform

**Goal**
Turn the website into a functional employee platform.

**Scope**

- Firebase Authentication
- Google login
- Company domain restriction
- Employee dashboard functionality
- Personal progress tracking
- Persistent module completion state
- Firebase data storage
- Protected routes
- TypeScript services and API logic

**Deliverables**

- Working employee login
- Personal dashboard
- Real user progress data
- Progress persistence
- Employee profile support

---

### V3 — Admin Dashboard and Workspace Sync

**Goal**
Add full administrative visibility and employee directory integration.

**Scope**

- Admin dashboard
- Employee list view
- Employee detail pages
- Completion analytics
- Search and filter tools
- Google Workspace employee sync
- Backend sync services
- Role management
- Admin-protected routes

**Deliverables**

- Admin dashboard
- Employee management table
- Training analytics
- Workspace-connected employee visibility
- Expanded TypeScript backend services

---

### V4 — Enterprise Training Management

**Goal**
Add advanced automation, reporting, and organization-level features.

**Scope**

- Automated reminders
- Overdue training alerts
- Advanced analytics
- Exportable reports
- Module scoring improvements
- More detailed audit history
- Training assignment rules
- Department-based reporting
- Stronger compliance-style visibility

**Deliverables**

- Reminder system
- Reporting layer
- Advanced charts and insights
- Expanded admin settings
- Scalable enterprise controls

---

## Success Metrics

### Employee Metrics

- Percentage of employees who log in
- Percentage of employees who start training
- Percentage of employees who complete all modules
- Average completion time
- Quiz performance trends

### Admin Metrics

- Organization-wide completion rate
- Number of overdue users
- Most failed modules
- Most engaged departments in later versions

### Business Metrics

- Improved internal security awareness
- Reduction in common security mistakes
- Better visibility into employee readiness

---

## Risks

| Risk | Mitigation |
|---|---|
| Low employee engagement | Keep modules short, clear, visual, and easy to complete |
| Confusing experience for non-technical staff | Use simple language, clean UI, and strong navigation |
| Improper access control | Use role-based authorization and domain-restricted login |
| Directory sync complexity | Implement backend sync in a controlled phase and keep logic separated from frontend |

---

## Future Opportunities

- Phishing simulation campaigns
- Certificate of completion
- Department leaderboards
- Slack or email reminders
- Security policy acknowledgment workflows
- Expanded module library
- Incident reporting workflow integration

---

## Final Technical Rule

The full application must be developed in TypeScript from end to end.

This includes:

- Website frontend
- Dashboard frontend
- Authentication logic
- Backend services
- Firebase integration
- Workspace sync logic
- API routes
- Data models
- Admin tools

---

## Final Product Statement

EdLight Security Training Platform will be a premium internal website and training system that combines modern design, structured cybersecurity education, secure Google login, employee dashboards, administrative visibility, Google Workspace connectivity, and Firebase-backed progress tracking.
