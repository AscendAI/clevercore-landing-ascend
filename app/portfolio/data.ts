import { ReactNode } from "react"

export interface Portfolio {
  name: string
  title: string
  subTitle: string
  introduction: string
  techStacks: string[]
  platforms: string[]
  background: {
    location: string
    industry: string
    duration: string
    services: string[]
  }
  coreFeatures: string[]
  coreFeaturesTitle: string[]
  endProduct: string
  reverse: boolean
  imageUrl: string
  thumbnail: string
  link: string
  badges: string[]
  img1: string
  img2: string
  isReleased: boolean
  color: string
  similarProjects?: string
}

export const portfolios: Portfolio[] = [
  {
    name: "CleverCore-AI",
    title: "CleverCore AI",
    subTitle: "Your Words, Our Clever Notes",
    introduction:
      "An advanced AI-powered platform designed to revolutionize the way individuals and organizations interact with and process spoken content. From transforming voice inputs into highly accurate transcripts and summaries to offering AI-driven assistance through an intelligent chatbot named Cleverbot, CleverCore AI caters to both professional and educational environments. Whether it's meetings or classroom lectures, CleverCore AI ensures seamless productivity and enhanced learning experiences.",
      techStacks: ['/portfolio/techStackIcons/next-js.svg','/portfolio/techStackIcons/react.png', '/portfolio/techStackIcons/tailwind.svg', '/portfolio/techStackIcons/firebase.png'],
      platforms: ['Web', 'Mobile'],
    background: {
      location: "United States",
      industry: "Education",
      duration: "12 Months",
      services: ["AI", "Automation"],
    },
    coreFeatures: [
      "Effortlessly capture real-time conversations, lectures, or meetings. The AI ensures high-accuracy transcription to document every word spoken.",
      "Transform lengthy discussions into concise summaries, highlighting critical points, making it easier to review and retain key information.",
      "An intelligent AI assistant designed to answer queries, provide clarifications, and help users interact with their transcriptions and summaries efficiently. Perfect for students or professionals needing quick access to information.",
      "Systematically categorize transcribed content into folders and share them with ease, promoting collaboration among teams or students.",
      "Leverage our fine-tuned AI models to create quizzes and assessments from recorded lectures, with automated grading that delivers personalized feedback to identify learning trends.",
    ],
    coreFeaturesTitle: [
      "Live Recording and Transcription",
      "AI-Generated Summaries & Notes",
      "Cleverbot",
      "Organize & Share Notes",
      "Automated Test Generation & Grading",
    ],
    endProduct:
      "The final product is a multi-faceted AI-powered platform that seamlessly blends functionality and intelligence. CleverCore AI is perfect for educators, enabling them to record lectures, organize notes, and automate assessment processes, ultimately enhancing the learning experience. On the professional front, it streamlines meeting documentation and provides actionable insights through transcription and summarization. The CleverCore chatbot adds another layer of efficiency, offering a conversational interface to navigate and utilize data effectively. CleverCore AI is a versatile solution that redefines how individuals and teams manage and interact with spoken content, making it indispensable for classrooms, businesses, and beyond.",
      reverse: true,
      imageUrl: '/portfolio/thumbnails/cover/cleverCore.png',
      thumbnail: '/portfolio/thumbnails/cc_thumb.png',
      link: 'https://www.clevercore.ai/',
      badges: [],
      img1: '/portfolio/features/cc/img1.png',
      img2: '/portfolio/features/cc/img2.webp',
      isReleased: true,
      color: ''
  },
  {
    name: "NLCyber",
    title: "NLCyber",
    subTitle: "The Cybersecurity Platform",
    introduction:
      "A centralized platform designed to simplify cybersecurity by aggregating the latest news, connecting users with trusted companies, and highlighting essential events. It empowers businesses and professionals to make informed decisions, contributing to a safer digital environment.",
      techStacks: ["/portfolio/techStackIcons/next-js.svg", '/portfolio/techStackIcons/tailwind.svg', '/portfolio/techStackIcons/postgres.webp'],
      platforms: ['Web'],
    background: {
      location: "Netherlands",
      industry: "Cybersecurity",
      duration: "5 Months",
      services: ["Information Aggregation", "Networking", "Event Highlighting"],
    },
    coreFeatures: [
      "Stay informed with up-to-date information on cybersecurity trends and threats, enabling proactive protection measures",
      "Access a curated list of reputable cybersecurity firms to find solutions tailored to your business needs",
      "Discover and participate in key cybersecurity events to enhance knowledge and professional networks",
      "Navigate through information efficiently, accessing desired content within three clicks",
    ],
    coreFeaturesTitle: [
      "Latest Cybersecurity News",
      "Directory of Trusted Companies",
      "Comprehensive Event Listings",
      "User-Friendly Interface",
    ],
    endProduct:
      "NLCyber offers a user-centric platform that consolidates critical cybersecurity resources, making them easily accessible. By providing timely news, connecting users with trusted companies, and promoting relevant events, NLCyber serves as a comprehensive tool for businesses and professionals aiming to navigate the complexities of cybersecurity effectively",
      similarProjects: "",
      reverse: false,
      imageUrl: '/portfolio/thumbnails/cover/nlc.png',
      thumbnail: '/portfolio/thumbnails/nlc2.png',
      link: 'https://www.nlcyber.com/',
      badges: [],
      img1: '/portfolio/features/nlc/img1.png',
      img2: '/portfolio/features/nlc/img2.png',
      isReleased: true,
      color: ''
  },
  {
    name: "AscendDM",
    title: "AscendDM",
    subTitle: 'Turn Every DM Into An Opportunity',
    introduction:
      "A cutting-edge platform designed to revolutionize Instagram outreach by leveraging artificial intelligence to automate and scale direct messaging campaigns. By enabling users to send personalized messages en masse, AscendDM enhances engagement and lead generation, making it an invaluable tool for businesses and influencers aiming to expand their reach efficiently.",
      techStacks: ["/portfolio/techStackIcons/electron.png", "/portfolio/techStackIcons/tailwind.svg", '/portfolio/techStackIcons/firebase.png'],
      platforms: ['Desktop'],
    background: {
      location: "Bangladesh",
      industry: "Social Media Marketing",
      duration: "5 Months",
      services: ["AI", "Automation"],
    },
    coreFeatures: [
      "Leverage up to 8 browsers simultaneously for seamless, high-volume DM campaigns. Maximize efficiency and outreach like never before!",
      "Optimize your messaging strategy with dynamic script variations. Reduce suspension rates and discover the most effective approach to engage your audience.",
      "Generate qualified leads through automated outreach and engagement tracking.",
      "Efficiently manage and automate direct messages at scale with smart targeting capabilities.",
    ],
    coreFeaturesTitle: [
      "Multi Browser Functionality",
      "Spintax Integration",
      "Lead Generation",
      "Super Mass DM",
    ],
    endProduct:
      "The culmination of this project is a robust AI-driven application that empowers users to automate and scale their Instagram outreach efforts significantly. AscendDM AI facilitates the sending of personalized messages to thousands of users, automates lead generation, and provides tools for efficient account management and performance tracking. By integrating these features, AscendDM AI stands as a comprehensive solution for businesses and influencers seeking to enhance their social media engagement and expand their audience reach effectively.",
      similarProjects: 'Two variants of this app are available as InstaDM AI and AutoLeads',
      reverse: true,
      imageUrl: '/portfolio/thumbnails/cover/ascend.png',
      thumbnail: '/portfolio/thumbnails/ascendDM.png',
      link: 'https://www.ascenddm.online/',
      badges: ['AI', 'Automation', 'Instagram', 'Mass DM', 'Lead Generation'],
      img1: '/portfolio/features/insta/img1.png',
      img2: '/portfolio/features/insta/img2.png',
      isReleased: true,
      color: 'blue'
  },
  {
    name: "Whisper-AI",
    title: "Whisper AI",
    subTitle: 'Know the right words, at the right moment',
    introduction:
      "An advanced conversational assistant designed to help users navigate and excel in social interactions. By discreetly providing targeted prompts during live conversations, Whisper AI ensures users never run out of things to say, helping them communicate confidently and effortlessly.",
      techStacks: ["/portfolio/techStackIcons/next-js.svg", '/portfolio/techStackIcons/react.png', '/portfolio/techStackIcons/tailwind.svg'],
      platforms: ['Mobile'],
    background: {
      location: "United Kingdom",
      industry: "Communication",
      duration: "In Development",
      services: ["AI Assistance", "Conversational Insights"],
    },
    coreFeatures: [
      "Whisper actively listens to your conversation in real time, understanding context and participants to provide timely prompts.",
      "Whisper generates highly relevant conversational prompts based on the ongoing discussion, ensuring you stay confident and engaging.",
      "Suggestions are delivered via push notifications, allowing you to access tips without disrupting the conversation or drawing attention.",
      "Tailor Whisper to match your conversational style and preferences, ensuring the prompts perfectly align with your needs.",
    ],
    coreFeaturesTitle: [
      "Live Conversation Assistance",
      "Targeted Suggestions",
      "Discreet Notifications",
      "Customizable Settings",
    ],
    endProduct:
      "The end product is a cutting-edge application that supports users in various social contexts—whether networking, dating, or public speaking. Whisper AI bridges the gap between nervous silences and confident communication by providing on-the-spot conversational insights and prompts. With its sleek and discreet interface, Whisper AI is not just a tool but a reliable social partner for anyone looking to improve their conversational skills and boost their confidence.",
      reverse: false,
      imageUrl: '/portfolio/thumbnails/whisper.png',
      thumbnail: '/portfolio/thumbnails/whisper.png',
      link: '/',
      badges: [],
      img1: '/portfolio/features/whisper/img1.png',
      img2: '/portfolio/features/whisper/img2.png',
      isReleased: false,
      color: ''
  },
  {
    name: "Pindrop-Stories",
    title: "Pindrop Stories",
    subTitle: 'Turn your website into an experience',
    introduction:
      "An innovative platform that enhances website engagement by integrating TikTok-style vertical videos directly into web pages. This dynamic approach captivates visitors, leading to increased user interaction, higher conversion rates, and boosted revenue.",
      techStacks: ['/portfolio/techStackIcons/next-js.svg', '/portfolio/techStackIcons/aws.webp', '/portfolio/techStackIcons/drizzle.jpg', '/portfolio/techStackIcons/postgres.webp'],
      platforms: ['Web'],
    background: {
      location: "United States",
      industry: "Digital Marketing",
      duration: "3 Months",
      services: ["AI", "Automation"],
    },
    coreFeatures: [
      "Ensures seamless display of vertical videos across all devices, providing an optimal viewing experience for every user",
      "Offers in-depth insights into user interactions with stories, enabling data-driven optimization of content strategies",
      "Facilitates easy addition of engaging stories to websites, enhancing user experience without extensive technical expertise",
      "Provides cost-effective solutions with customizable plans, ensuring a significant return on investment as conversion rates improve",
    ],
    coreFeaturesTitle: [
      "Cross-Platform Compatibility",
      "Advanced Analytics",
      "User-Friendly Integration",
      "Affordable Pricing Plans",
    ],
    endProduct:
      "The final product is a comprehensive platform that transforms static websites into interactive experiences by incorporating captivating vertical video stories. Pindrop Stories enables businesses to engage their audience more effectively, leading to increased session durations and improved conversion metrics. With its cross-platform support, advanced analytics, and user-friendly integration, Pindrop Stories stands as a vital tool for businesses aiming to elevate their digital presence and foster deeper connections with their audience",
      reverse: true,
      imageUrl: '/portfolio/thumbnails/cover/pindrop.png',
      thumbnail: '/portfolio/thumbnails/pindrop.webp',
      link: 'https://www.pindropstories.com/',
      badges: [],
      img1: '/portfolio/features/pindrop/img1.png',
      img2: '/portfolio/features/pindrop/img2.webp',
      isReleased: true,
      color: ''
  },
  {
    name: "Reinforz-AI",
    title: "Reinforz AI",
    subTitle: "Reshape Education with AI",
    introduction:
      "An innovative platform that leverages artificial intelligence to streamline and enhance the educational experience for institutions, educators, and learners. By automating academic tasks such as question generation and performance reporting, Reinforz AI provides a comprehensive solution that saves time and effort, ultimately improving learning outcomes.",
      techStacks: ["/portfolio/techStackIcons/next-js.svg", '/portfolio/techStackIcons/mui.png', '/portfolio/techStackIcons/prisma.webp', '/portfolio/techStackIcons/aws.webp'],
      platforms: ['Web'],
    background: {
      location: "Bangladesh",
      industry: "Education",
      duration: "8 Months",
      services: ["AI", "Automation"],
    },
    coreFeatures: [
      "Utilizing the ChatGPT API, Reinforz AI automates the creation of diverse and customizable questions, allowing educators to focus more on teaching.",
      "Offers both basic and advanced modes, enabling users to modify questions, add hints, explanations, and alternate questions to tailor assessments to specific needs.",
      "Engages learners through interactive quizzes and a dynamic leaderboard system, fostering healthy competition and motivation.",
      "Provides comprehensive reports and personalized feedback, allowing learners to identify strengths and areas for improvement, thereby enhancing the learning process.",
    ],
    coreFeaturesTitle: [
      "Advanced Question Generation",
      "Customizable Question Editor",
      "Gamified Learning with Leaderboards",
      "Detailed Performance Analytics",
    ],
    endProduct:
      "The final product is a robust AI-driven educational platform that automates and enriches various academic tasks. Reinforz AI empowers educators to efficiently create and manage assessments, while providing learners with engaging, personalized, and interactive study experiences. By integrating features like advanced question generation, customizable editing tools, gamified learning elements, and detailed performance analytics, Reinforz AI stands as a comprehensive solution that simplifies the academic process and fosters improved educational outcomes.",
      reverse: false,
      imageUrl: '/portfolio/thumbnails/cover/reinforz.png',
      thumbnail: '/portfolio/thumbnails/reinforz.png',
      link: 'https://www.reinforz.ai/',
      badges: [],
      img1: '/portfolio/features/rz/img1.png',
      img2: '/portfolio/features/rz/img2.jpg',
      isReleased: true,
      color: ''
  },
  {
    name: "Sagar-Jute",
    title: "Sagar Jute",
    subTitle: 'Spinning Mills Limited',
    introduction:
      "A leading manufacturer and exporter of high-quality jute products based in Bangladesh. With a commitment to excellence and sustainability, the company offers innovative solutions to meet the diverse needs of its global clientele. The company's website features user and admin-level login capabilities, facilitating seamless order placement and management for both customers and administrators.",
      techStacks: ['/portfolio/techStackIcons/next-js.svg', '/portfolio/techStackIcons/firebase.png', '/portfolio/techStackIcons/tailwind.svg'],
      platforms: ['Web'],
    background: {
      location: "Bangladesh",
      industry: "Jute Manufacturing and Export",
      duration: "5 Months",
      services: ["Manufacturing", "Export", "Digital Order Management"],
    },
    coreFeatures: [
      "Provides secure access for customers and administrators, enabling personalized experiences and efficient management of orders and content.",
      "Allows customers to conveniently place orders for jute products through the website, streamlining the purchasing process.",
      "Showcases a diverse range of jute products, including bags, yarn, hessian cloth, soil savers, and ropes, with detailed descriptions and specifications.",
      "Offers insights into the company's history, mission, and commitment to sustainability, fostering transparency and trust with clients.",
    ],
    coreFeaturesTitle: [
      "User and Admin-Level Login",
      "Online Order Placement",
      "Product Catalog",
      "Company Information",
    ],
    endProduct:
      "The final product is a comprehensive digital platform that not only highlights Sagar Jute Spinning Mills Limited's extensive range of jute products but also facilitates efficient interaction between the company and its customers. The website's user and admin-level login features ensure secure and personalized access, while the online order placement system simplifies the purchasing process. By integrating detailed product information and company insights, the platform serves as a vital tool for clients seeking quality jute products and fosters a deeper understanding of the company's values and operations.",
      reverse: true,
      imageUrl: '/portfolio/thumbnails/cover/sagar.png',
      thumbnail: '/portfolio/thumbnails/sagar.png',
      link: 'https://www.sagarjutemills.com/',
      badges: [],
      img1: '/portfolio/features/sagar/img1.webp',
      img2: '/portfolio/features/sagar/img2.png',
      isReleased: true,
      color: ''
  },
  {
    name: "Unibox",
    title: "Unibox",
    subTitle: 'One Inbox. Endless Connections',
    introduction:
      "An all-in-one messaging platform designed to revolutionize communication and lead generation for businesses and professionals. Based in Bangladesh, Unibox consolidates Facebook, Instagram, and WhatsApp messages into a single, user-friendly interface, enabling seamless message management and engagement. With powerful lead generation capabilities, Unibox empowers users to boost their reach and build stronger connections.",
      techStacks: ["/portfolio/techStackIcons/next-js.svg", '/portfolio/techStackIcons/tailwind.svg', '/portfolio/techStackIcons/firebase.png'],
      platforms: ['Web'],
    background: {
      location: "Bangladesh",
      industry: "Social Media Management & Marketing",
      duration: "In Development",
      services: ["Unified Messaging", "Lead Generation"],
    },
    coreFeatures: [
      "Consolidate all messages from Facebook, Instagram, and WhatsApp into a single dashboard, making it easier to manage and respond efficiently",
      "Respond to messages from multiple platforms directly within Unibox, reducing the hassle of switching between apps",
      "Extract potential leads from Instagram and Facebook posts, hashtags, and post links, providing valuable contact opportunities for your business",
      "Stay on top of your communication with instant notifications for new messages across all connected platforms",
    ],
    coreFeaturesTitle: [
      "Unified Messaging Platform",
      "Cross-Platform Response",
      "Advanced Lead Scraping",
      "Real-Time Notifications",
    ],
    endProduct:
      "The final product is a robust platform that streamlines social media communication and maximizes lead generation for businesses. With Unibox, users can effortlessly manage all their Facebook, Instagram, and WhatsApp messages in one place, saving time and improving response rates. Additionally, its powerful lead generation tools give users a competitive edge by enabling them to identify and engage potential customers through social media activity. Designed for efficiency and scalability, Unibox is the ultimate tool for businesses aiming to enhance their digital communication and grow their customer base",
      reverse: false,
      imageUrl: '/portfolio/thumbnails/cover/unibox.png',
      thumbnail: '/portfolio/thumbnails/theUniBox.png',
      link: 'https://www.theunibox.online/',
      badges: [],
      img1: '/portfolio/features/unibox/img1.png',
      img2: '/portfolio/features/unibox/img2.png',
      isReleased: false,
      color: ''
  },
]
