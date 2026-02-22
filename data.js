// Portfolio Data - Easy to update and maintain

const portfolioData = {
    social: [
        { name: "GitHub", url: "https://github.com/devyanic11" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/devyani-chavan/" },
        { name: "Twitter", url: "https://twitter.com/devyaniCh" },
        { name: "LeetCode", url: "https://leetcode.com/u/devyanichavan110/" },
        { name: "Hashnode", url: "https://devyanichavan.hashnode.dev/" },
        { name: "Kaggle", url: "https://www.kaggle.com/devyanichavan" },
    ],

    experience: [{
            title: "Intern",
            company: "PTC",
            location: "Pune, Maharashtra",
            period: "July 2025 — Current",
            type: "Internship",
            achievements: [
                "Built a utility to validate APIs via Swagger UI, reducing manual API verification effort by ~70–80% during testing cycles",
                "Added REST API tests to the existing framework, enabling automated validation during every build and regression run",
                "Cut repetitive manual checks from hours to minutes per feature by enabling reusable automated test execution"
            ],
            technologies: ["Java", "Playwright", "Gradle", "REST APIs", "CI/CD", "Jenkins"]
        },
        {
            title: "AI Research Intern",
            company: "Defence Research and Development Organisation (DRDO)",
            location: "Pashan, Pune",
            period: "April 2025 — July 2025",
            type: "Internship",
            achievements: [
                "Designed and implemented a backend pipeline to index and retrieve 5,000+ technical documents for structured search and access",
                "Built preprocessing workflows to extract and organize metadata from large unstructured datasets",
                "Optimized query handling and storage access to improve retrieval efficiency and response consistency",
                "Converted loosely defined research requirements into a working software prototype for practical usage"
            ],
            technologies: ["Python", "Langchain", "Tensorflow", "MongoDB"]
        }
    ],

    techStack: {
        "AI / ML": ["Machine Learning", "Deep Learning", "Agentic AI", "NLP", "LLMs"],
        "Languages": ["Java", "C++", "Python", "JavaScript", "Bash", "SQL"],
        "Tools & Platforms": ["Git", "Linux", "CI/CD", "Playwright", "Docker", "AWS", "Azure"]
    },

    achievements: [{
            title: "Envio Track Winner",
            organization: "ETHGlobal Online",
            description: "Built Syntra, an AI + Hypersync powered system that makes blockchain data instantly searchable and queryable, enabling structured retrieval from large on-chain datasets",
            url: "https://ethglobal.com/showcase/syntra-gxpyr"
        },
        {
            title: "First Runner-Up",
            organization: "Logithon National Hackathon",
            description: "Developed an automated PDF-to-JSON invoice parser that extracted structured billing data and reduced manual logistics processing effort by ~60%",
            url: "https://logithon.ai/"
        },
        {
            title: "Published Research Paper",
            organization: "Taylor & Francis — Intelligent Computing and Communication Techniques",
            description: "Authored research on optimizing AI training and inference efficiency to reduce computational energy footprint in practical ML systems",
            url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003530176-116/optimizing-ai-sustainability-reducing-energy-footprint-training-inference-green-computing-pramod-aswale-devyani-chavan-santoshkumar-biradar-sunita-vani-sachin-dada-shinde-tanmay-bharambe" // Add URL if you have a link, or remove this line
        },
        {
            title: "Technical Speaker & Mentor",
            organization: "Peer Teaching Program",
            description: "Taught Quantum Computing concepts to 100+ students and conducted hands-on technical workshops and speaker sessions"
        },
        {
            title: "Developer Community Engagement",
            organization: "GDG Cloud Pune, FOSS United Pune, GDGoC WOW Pune",
            description: "Moderated technical panel discussions and coordinated a 1,000+ attendee developer conference with industry speakers"
        },
        {
            title: "Community & Developer Programs Leadership",
            organization: "Google Developer Groups / Microsoft Learn Student Ambassador / Code for GovTech",
            description: "Led campus technical initiatives and organized 10+ large-scale developer events, contributing to 6M+ community reach while supporting open civic-tech and developer ecosystem programs"
        }
    ],

    education: [{
        degree: "BTech Computer Science and Engineering(AI/ML)",
        institution: "GH Raisoni College of Engineering and Management",
        location: "Pune, Maharashtra, India",
        period: "2022 — 2026",
        gpa: "8.99/10.0",
        description: "Graduated with honors. Focused on software engineering and data structures. Led multiple research projects.",
        coursework: ["Data Structures", "Software Engineering", "Database Systems", "Operating Systems", "Computer Networks"]
    }],

    projects: [{
            title: "Syntra",
            description: "AI-powered blockchain search system built at ETHGlobal that enables structured querying and instant retrieval from on-chain data using Hypersync indexing.",
            technologies: ["AI", "Blockchain", "Indexing", "Search"],
            github: "https://github.com/flex3-org/syntra",
            demo: "https://ethglobal.com/showcase/syntra-gxpyr",
            image: "https://i.postimg.cc/43SBCWx9/default.jpg",
            featured: true
        }, {
            title: "EMIX",
            description: "Developed an AI-powered MJML email generator, reducing email design time by 85% for non-technical users.",
            technologies: ["Python", "Deep Learning", "LLM"],
            github: "https://github.com/flex3-org/emix",
            demo: "https://www.emixhq.live/",
            image: "https://i.postimg.cc/nhL4Hq5B/Screenshot-2026-02-15-at-8-55-34-PM.png",
            featured: true
        },
        {
            title: "SMEEK",
            description: "An AI-powered study tool that generates tailored topic lists and curated YouTube resources. Automated study material transformation, converting PDFs into interactive flashcards and quizzes, which improved knowledge retention by 45%.",
            technologies: ["Python", "Deep Learning", "LLM"],
            github: "https://github.com/flex3-org/smeek",
            demo: "https://smeek.vercel.app/",
            image: "https://i.postimg.cc/7YMWfvVL/Screenshot-2026-02-15-at-9-59-08-PM.png",
            featured: true
        },
        {
            title: "Ask Krishna",
            description: "Built an AI-powered chatbot that allows users to ask questions and receive personalized answers from Bhagavad Gita.",
            technologies: ["LLM", "Python", "Deep Learning"],
            github: "https://github.com/devyanic11/Ask-Krishna",
            demo: "https://ask-krishna-here.vercel.app/",
            image: "https://i.postimg.cc/m2tJt10Z/Screenshot-2026-02-15-at-8-45-03-PM.png",
            featured: false
        },
        {
            title: "Vaylen",
            description: "Created a platform for users to get personalized styling recommendations and shop for clothes.",
            technologies: ["Python", "Deep Learning", "Computer Vision"],
            github: "https://github.com/devyanic11/outfits",
            demo: "https://vaylen.vercel.app/",
            image: "https://i.postimg.cc/JzjTkNxY/Screenshot-2026-02-15-at-8-49-06-PM.png",
            featured: false
        }
    ],

    blogs: [{
            title: "Logistic Regression / Perceptron Trick",
            description: "Understanding classification boundaries in logistic regression using the perceptron trick and geometric intuition.",
            date: "November 4, 2024",
            readTime: "10 min read",
            link: "https://devyanichavan.hashnode.dev/logistic-regression-perceptron-trick",
            category: "Machine Learning",
            featured: true
        },
        {
            title: "Multiple Linear Regression",
            description: "Deriving coefficients in multiple linear regression using Ordinary Least Squares and building intuition behind the math.",
            date: "April 7, 2024",
            readTime: "8 min read",
            link: "https://devyanichavan.hashnode.dev/multiple-linear-regression",
            category: "Machine Learning",
            featured: true
        },
        {
            title: "Regions Transformation on Line",
            description: "Explores how feature transformations affect decision boundaries and model separability in linear classifiers.",
            date: "2024",
            readTime: "7 min read",
            link: "https://devyanichavan.hashnode.dev/regions-transformation-on-line",
            category: "Machine Learning",
            featured: false
        },
        {
            title: "Linear Regression — As Simple As It Is",
            description: "An intuitive explanation of linear regression and how models learn relationships from data.",
            date: "2024",
            readTime: "6 min read",
            link: "https://devyanichavan.hashnode.dev/linear-regression-as-simple-as-it-is",
            category: "Machine Learning",
            featured: false
        },
        {
            title: "Feature Transformations with Ensembles of Trees",
            description: "Using tree-based models to generate nonlinear feature transformations in scikit-learn.",
            date: "2024",
            readTime: "7 min read",
            link: "https://www.geeksforgeeks.org/machine-learning/feature-transformations-with-ensembles-of-trees-in-scikit-learn/",
            category: "Machine Learning",
            featured: false
        },
        {
            title: "Action Selection in Intelligent Agents",
            description: "Explains decision-making strategies and policies used by intelligent agents in AI systems.",
            date: "2024",
            readTime: "6 min read",
            link: "https://www.geeksforgeeks.org/artificial-intelligence/action-selection-in-intelligent-agents/",
            category: "Artificial Intelligence",
            featured: false
        },
        {
            title: "Distributed Training with TensorFlow",
            description: "Overview of scaling deep learning models using distributed training techniques in TensorFlow.",
            date: "2024",
            readTime: "8 min read",
            link: "https://www.geeksforgeeks.org/artificial-intelligence/distributed-training-with-tensorflow/",
            category: "Deep Learning",
            featured: false
        },
        {
            title: "Multi-Metric Evaluation in GridSearchCV",
            description: "Demonstrates evaluating models using multiple scoring metrics during cross validation in scikit-learn.",
            date: "2024",
            readTime: "7 min read",
            link: "https://www.geeksforgeeks.org/machine-learning/demonstration-of-multi-metric-evaluation-on-cross_val_score-and-gridsearchcv-in-scikit-learn/",
            category: "Machine Learning",
            featured: false
        }
    ]
};
