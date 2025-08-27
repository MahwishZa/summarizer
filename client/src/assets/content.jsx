import { FiBookOpen, FiBarChart2, FiFileText, FiShield, FiArchive, FiBriefcase, FiSend, FiCpu, FiTrendingUp, FiLayers } from 'react-icons/fi';
{/* About */ }
export const about = [
    {
        description: 'Scribe uses AI to turn long articles and documents into clear, concise summaries in seconds—making information easy to understand and use',
        highlight: true
    },
    {
        title: 'Save Time & Boost Productivity',
        description: 'Quickly extract key points from any text, so you can focus on what matters most'
    },
    {
        title: 'Supports Multiple Formats',
        description: 'Summarize plain text, PDFs, and Word documents with ease'
    },
    {
        title: 'Secure & User-Friendly',
        description: 'Enjoy a seamless experience with privacy-first processing and an intuitive interface'
    }
]

{ /* Contact Form */ }
export const contact = [
    {
        heading: 'Start an Enterprise Trial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.',
        bullets: [
            {
                icon: FiSend,
                strong: 'Get a custom demo.',
                text: 'Discover the value of our Enterprise plan and explore tailored pricing and support.'
            },
            {
                icon: FiCpu,
                strong: 'Set up your Enterprise trial.',
                text: 'See how Enterprise features speed up your workflow and increase impact.'
            }
        ],
        endpoint: 'http://localhost:5000/contact',
        buttonText: 'Send Message'
    },
    {
        heading: 'Start an Premium Trial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.',
        bullets: [
            {
                icon: FiTrendingUp,
                strong: 'Explore advanced tools.',
                text: 'Gain access to premium-only features like priority queuing, increased limits, and analytics.'
            },
            {
                icon: FiLayers,
                strong: 'Set up your Premium trial.',
                text: 'Quickly test enhancements over the free tier with no commitment.'
            }
        ],
        endpoint: 'http://localhost:5000/register',
        buttonText: 'Get Token'
    }
]

{/* FAQs */ }
export const faqs = [
    {
        question: 'What is Scribe?',
        answer: 'Scribe is a simple online tool that summarizes text, articles, and documents. You can paste text or upload files, and get a summary in either paragraph or bullet point format.'
    },
    {
        question: 'Is Scribe free to use?',
        answer: 'Yes, Scribe is completely free to use for all users.'
    },
    {
        question: 'What file types can I upload?',
        answer: 'You can upload PDF files for summarization. Support for other file types may be added in the future.'
    },
    {
        question: 'Can I download or copy my summary?',
        answer: 'Yes, you can download your summary as a PDF or copy it to your clipboard with a single click.'
    },
    {
        question: 'Can I choose the summary format?',
        answer: 'Yes, you can choose to receive your summary as a paragraph or as bullet points.'
    }
]

{/* Navigation */ }
export const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Service', href: '/service' }
]

{/* Plans */ }
export const plans = [
    {
        title: 'Free',
        subtitle: 'Try our tool at no cost',
        price: 0,
        features: [
            'Summarize any text or article',
            'Download summaries as PDFs',
            'Customize summary format',
        ],
        label: 'Start Free',
        href: '/service'
    },
    {
        title: 'Premium',
        subtitle: 'Most popular choice for regular users',
        price: 19,
        features: [
            'All Free features',
            'Email support',
            'More customization options'
        ],
        label: 'Get Premium',
        highlight: true,
        href: '/register'
    },
    {
        title: 'Enterprise',
        subtitle: 'For teams and high-volume users',
        price: 49,
        features: [
            'All Free & Premium features',
            'Dedicated support',
            'Feature requests & feedback sessions'
        ],
        label: 'Contact Sales',
        href: '/contact'
    }
]

{/* Steps */ }
export const steps = [
    {
        id: '01',
        title: 'Paste or Upload Content',
        description: 'Easily input your text, PDF, or document to get started with summarization.',
        highlight: true
    },
    {
        id: '02',
        title: 'Choose Summary Preferences',
        description: 'Select your desired summary length, language, and format for tailored results.',
    },
    {
        id: '03',
        title: 'Generate Summary Instantly',
        description: 'Scribe processes your content and delivers a concise, accurate summary in seconds.',
        highlight: true
    },
    {
        id: '04',
        title: 'Review & Export',
        description: 'Easily review, copy, or export your summary for use in reports, studies, or sharing.',
    }
]

{/* Testimonials */ }
export const testimonials = [
    {
        quote: 'Scribe helped me condense lengthy research papers into clear, actionable insights. It saves me hours every week!',
        name: 'Priya S.',
        role: 'Graduate Student'
    },
    {
        quote: 'As a business analyst, I rely on Scribe to quickly summarize reports and emails. The accuracy is impressive.',
        name: 'Michael T.',
        role: 'Business Analyst'
    },
    {
        quote: 'I use Scribe to prepare teaching materials from dense articles. The summaries are always on point.',
        name: 'Dr. Emily R.',
        role: 'Educator'
    },
    {
        quote: 'Summarizing client documents used to be tedious. Now, Scribe does it in seconds and lets me focus on strategy.',
        name: 'Carlos M.',
        role: 'Consultant'
    },
    {
        quote: 'Even with complex content, Scribe delivers summaries that are easy to understand. It’s a game changer for my studies.',
        name: 'Sofia L.',
        role: 'International Student'
    }
]

{/* Use Cases */ }
export const usecases = [
    {
        title: 'Academic Research',
        icon: <FiBookOpen size={24} />,
        description: 'Extract essential findings and key points from scholarly articles and research documents in seconds.'
    },
    {
        title: 'Media & Content Analysis',
        icon: <FiFileText size={24} />,
        description: 'Analyze and summarize diverse media sources to stay informed without information overload.',
        highlight: true
    },
    {
        title: 'Business Reporting',
        icon: <FiBarChart2 size={24} />,
        description: 'Create concise summaries of business reports, proposals, and meeting notes for efficient review.',
        highlight: true
    },
    {
        title: 'Legal & Compliance Documents',
        icon: <FiShield size={24} />,
        description: 'Simplify legal documents and compliance materials for faster understanding and decision-making.'
    },
    {
        title: 'Project Documentation',
        icon: <FiArchive size={24} />,
        description: 'Summarize technical docs, manuals, and project notes to keep teams aligned and informed.'
    },
    {
        title: 'Personal Productivity',
        icon: <FiBriefcase size={24} />,
        description: 'Condense personal notes, to-dos, and reading materials for be,ter knowledge management.',
        highlight: true
    }
]