import {
    Search,
    Users,
    FileText,
    MessageCircle,
    Briefcase,
    Shield,
    Clock,
    Award,
    BarChart3,
    Building2,
    LayoutDashboard,
    Plus,
    MessageSquare,
    icons
} from 'lucide-react'

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: 'Smart Job Matching',
        description: 'Advanced algorithms match you with jobs that fit your skills and preferences.'
    },
    {
        icon: FileText,
        title: 'Resume Builder',
        description: 'Create professional resumes with our intuitive builder and templates designed by experts.'
    },
    {
        icon: MessageSquare,
        title: 'Direct Messaging',
        description: 'Communicate directly with hiring managers and recruiters through our built-in messaging system.'
    },
    {
        icon: Award,
        title: 'Skill Assessments',
        description: 'Take assessments to showcase your skills to potential employers.'
    },
]


export const employerFeatures = [

    {
        icon: Users,
        title: 'Talent Pool Access',
        description: 'Browse a vast database of qualified candidates to find the perfect fit for your company.'
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Gain insights into your hiring processes with our comprehensive analytics tools.'
    },
    {
        icon: Shield,
        title: 'Secure Hiring',
        description: 'Ensure a safe and secure hiring process with our verified candidate profiles.'
    },
    {
        icon: Clock,
        title: 'Efficient Workflow',
        description: 'Streamline your recruitment process with our intuitive hiring management system.'
    }
]


// Nevigation items confirguration
export const NAVIGATION_MENU = [
    { id: 'employer-dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'post-job', name: 'Post a Job', icon: Plus },
    { id: 'manage-jobs', name: 'Manage jobs', icon: Briefcase },
    { id: 'company-profile', name: 'Company Profile', icon: Building2 },
]

// Categories and job types
export const CATEGORIES = [

    { value: 'Acutary', label: 'Acutary' },
    { value: 'Data Analysis', label: 'Data Analysis' },
    { value: 'Risk Management', label: 'Risk Management' },
    { value: 'Underwriting', label: 'Underwriting' },
    { value: 'Compliance', label: 'Compliance' },
    { value: 'Investment', label: 'Investment' },
    { value: 'Claims', label: 'Claims' },
    { value: 'Customer Service', label: 'Customer Service' },
    { value: 'Sales and Marketing', label: 'Sales and Marketing' },
]


export const JOB_TYPES = [

    { value: 'Full-time', label: 'Full-time' },
    { value: 'Part-time', label: 'Part-time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Internship', label: 'Internship' },
]


export const SALARY_RANGES = [
    'Less than $1,000',
    '$1,000 - $15,000',
    'More than $15,000',
]
