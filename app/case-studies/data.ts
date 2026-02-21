export interface CaseStudy {
  name: string,
  title: string,
  image: string,
  preview: string,
  intro: string
  background: string
  businessChallenges: string[]
  ourSolution: string[]
  businessValues: string[]
  results: string[]
  businessChallengesTitle: string[]
  ourSolutionTitle: string[]
  businessValuesTitle: string[]
  resultsTitle: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    name: "real-estate-listings",
    title: "AI-Powered Real Estate Listings",
    image: "/caseStudies/ebro.png",
    preview: 'The AI-driven automation pipeline developed for the real estate agency',
    intro:
      "In the highly competitive real estate market, timely and accurate listing management is essential for maintaining visibility and securing potential leads. A prominent real estate agency, burdened by the manual effort of posting and updating property listings across multiple online platforms, approached us for a streamlined and automated solution. Our team responded by developing a state-of-the-art AI-driven automation pipeline that dramatically reduced manual workloads, improved listing quality, and accelerated the time-to-market for their rental and sale properties.",
    background:
      "The client, a mid-sized real estate agency specializing in residential and commercial properties, struggled to keep up with the constant need to refresh and expand their online presence. They recognized that the repetitive and time-consuming process of writing property descriptions, formatting content, and uploading images onto platforms like Zillow, Trulia, and other listing sites was hindering productivity. Their vision was to find a modern, intelligent solution that would handle all backend content generation and uploading tasks, freeing their team to focus on high-value activities such as client relationship management and strategic marketing initiatives",
    businessChallenges: [
      "The agency&apos;s staff spent hours each week crafting property descriptions, uploading images, and ensuring consistency across multiple listing sites. This slowed down their response to market opportunities",
      "With multiple team members involved in updating various listings, inconsistencies in style, tone, and accuracy occasionally emerged, undermining brand integrity and tenant/buyer trust",
      "As the agency&apos;s portfolio grew, manual listing updates became increasingly cumbersome. Without an automated solution, scaling up their listing operations was both costly and time-consuming",
      "New and updated listings often took days to appear online, meaning missed opportunities to capture early tenant/buyer interest",
    ],
    ourSolution: [
      " Leveraging advanced natural language processing models, the system transformed basic property details—room count, area, bathroom number, amenities—into polished, engaging property descriptions",
      "Instead of manually resizing, renaming, and uploading property photos, the solution automatically formatted and attached images to the generated listings",
      " A centralized dashboard allowed the agency to input listing details once and have the pipeline automatically distribute consistent content to all targeted online platforms",
      "With AI-driven content checks and a standardized tone and style, every listing met the agency’s quality benchmarks, ensuring a reliable brand image across channels",
    ],
    businessValues: [
      "By eliminating tedious manual tasks, the agency’s team could devote more time to client interaction, strategic marketing, and expanding their property portfolio.",
      "Consistent, well-crafted descriptions and professional imagery boosted trust with prospective buyers and renters, solidifying the agency’s brand reputation",
      "Reduced reliance on manual labor meant lower operational costs and better allocation of resources",
      "The automated posting ensured listings appeared swiftly on multiple platforms, capturing early leads and increasing the likelihood of quick conversions",
    ],
    results: [
      "The agency cut listing preparation and posting time by over 70%.",
      "Faster updates and higher-quality listings led to a measurable uptick in inquiries and showings",
      "The unified, AI-driven content standard enhanced the agency’s professional image online",
      "With automation at its core, the agency can now easily accommodate an expanded property portfolio without additional staff",
    ],
    businessChallengesTitle: [
      "Labor-Intensive Processes",
      "Inconsistent Property Listings",
      "Limited Scalability",
      "Delayed Time-to-Market",
    ],
    ourSolutionTitle: [
      "Automated Content Generation",
      "Seamless Image Handling",
      "Multi-Platform Integration",
      "Quality Control and Brand Consistency",
    ],
    businessValuesTitle: [
      "Efficiency and Productivity",
      "Enhanced Brand Reputation",
      "Cost Savings",
      "Faster Market Response",
    ],
    resultsTitle: [
      "Time Savings",
      "Increased Lead Generation",
      "Improved Brand Consistency",
      "Scalable Growth",
    ],
  },
  {
    name: "discord-notification",
    title: "Discord Notification Hub",
    image: "/caseStudies/blank.png",
    preview: 'Streamlining Notifications with Discord Automation',
    intro:
      "For a small but growing business that relied on Discord for team communication, managing notifications across multiple sales platforms was becoming increasingly unwieldy. The company sold products through several online storefronts, support portals, and social media channels, leading to a fragmented flow of alerts and updates. We developed an automation pipeline that centralized all these messages into a dedicated Discord channel, making it easier than ever for the team to stay informed and respond promptly.",
    background:
      "The client’s sales, support, and customer engagement activities took place on various digital platforms. This meant that critical notifications—such as new orders, customer inquiries, product restock alerts, and shipment updates—arrived from multiple, disconnected sources. Team members wasted valuable time toggling between different dashboards and inboxes, risking delayed responses and potential revenue loss. To enable the company to scale efficiently, a unified notification system was essential.",
    businessChallenges: [
      "Key updates were scattered across multiple platforms and channels, causing confusion and inefficient monitoring",
      "With alerts buried in different systems, response times to customer inquiries and order issues were longer, affecting customer satisfaction",
      "Managers and decision-makers struggled to maintain a clear overview of ongoing activities, making it harder to prioritize tasks effectively",
      "As the company grew and added more product lines or sales channels, the complexity of managing notifications threatened to become unmanageable",
    ],
    ourSolution: [
      "The pipeline connected to multiple sales platforms, support systems, and communication tools, feeding all updates into a single Discord channel",
      "By using defined rules and keywords, the pipeline categorized and tagged incoming notifications, making it easy for team members to identify priority alerts at a glance",
      "Instant delivery of notifications ensured that no time was lost between receiving critical information and taking action, improving team responsiveness",
      "Designed to accommodate new platforms and product lines, the system could easily evolve alongside the company’s growth without additional overhead",
    ],
    businessValues: [
      "By consolidating notifications, the team saved time and reduced the cognitive load of constantly switching between different tools",
      "Faster awareness of orders, inquiries, and issues led to quicker resolutions, enhancing customer satisfaction and loyalty",
      "A unified channel for all updates provided managers with real-time visibility into ongoing activities, aiding in better decision-making and prioritization",
      "The scalable design of the pipeline allowed the company to seamlessly integrate additional sales channels or products as their business expanded",
    ],
    results: [
      "The team’s average response to critical notifications improved by over 30%, resulting in more satisfied customers",
      "Streamlining notifications into one platform eliminated the need to monitor multiple tools, cutting administrative overhead",
      "With everyone viewing the same live feed of updates, collaboration and task delegation became more intuitive and efficient",
      "The company gained the flexibility to add new channels and products without worrying about notification overload or communication breakdowns",
    ],
    businessChallengesTitle: [
      "Fragmented Notifications",
      "Inefficient Response Times",
      "Lack of Operational Visibility",
      "Scaling Difficulties",
    ],
    ourSolutionTitle: [
      "Centralized Integration",
      "Smart Filtering and Tagging",
      "Real-Time Updates",
      "Scalable Architecture",
    ],
    businessValuesTitle: [
      "Increased Efficiency",
      "Improved Customer Response",
      "Better Operational Oversight",
      "Flexible Growth",
    ],
    resultsTitle: [
      "Faster Response Times",
      "Reduced Complexity",
      "Enhanced Team Coordination",
      "Readiness for Expansion",
    ],
  },
  {
    name: "hotel-cheduling",
    title: "Hotel Smart Scheduling",
    image: "/caseStudies/shifty.png",
    preview: 'The intelligent scheduling system developed for the hotel chain optimized workforce allocation, streamlined staffing operations',
    intro:
      "A prominent hotel chain struggled to efficiently manage staff schedules across multiple properties. Balancing occupancy rates, event bookings, and seasonal fluctuations required continual adjustments, and the complexity often led to understaffing, overstaffing, or last-minute changes. We stepped in to develop an intelligent scheduling system that optimized their workforce allocation, streamlined staffing operations, and ensured that the right employees were always in place to deliver exceptional guest experiences.",
    background:
      "The client, operating several hotels in different regions, had a highly variable staffing requirement influenced by room bookings, conference events, and peak travel seasons. Traditionally, managers relied on static spreadsheets, guesswork, and extensive email threads to coordinate shifts. This approach not only consumed management’s valuable time but also often failed to account for sudden changes in demand or unexpected staff absences. Recognizing the need for a dynamic, data-driven solution, the hotel chain enlisted our expertise.",
    businessChallenges: [
      "Managers spent hours juggling spreadsheets, emails, and calls, struggling to balance staffing needs against changing occupancy and event schedules",
      "Without real-time insights into bookings, events, and seasonal patterns, it was challenging to anticipate staffing needs, resulting in either overstaffed or understaffed shifts",
      "Inconsistent scheduling and frequent last-minute changes frustrated staff members, reducing morale and increasing turnover risks",
      "As the hotel chain expanded, the complexity of managing multiple properties and various departments grew, making manual scheduling even more unmanageable",
    ],
    ourSolution: [
      "The scheduler used historical data, upcoming booking trends, and seasonality patterns to predict staffing needs in real time, minimizing guesswork",
      "Utilizing employee preferences, availability, and skill sets, the system automatically assigned staff to the most suitable shifts, improving productivity and guest satisfaction",
      "When unexpected changes occurred—such as last-minute cancellations or sudden surges in bookings—the system recalibrated schedules instantly, notifying managers and staff of updates",
      "The platform provided a central dashboard to manage scheduling across multiple hotels, ensuring consistency and strategic distribution of staff resources",
    ],
    businessValues: [
      "By automating the scheduling process, management reclaimed valuable time, focusing on strategic tasks rather than administrative overhead",
      "Fair, consistent, and well-communicated schedules fostered a positive work environment, reducing turnover and boosting morale",
      "With the right number of qualified employees on each shift, the hotels consistently provided timely, high-quality services that elevated guest satisfaction",
      "The flexible, data-driven system positioned the hotel chain to efficiently handle additional properties, larger events, and future expansion without increasing scheduling complexity",
    ],
    results: [
      "Managers cut scheduling hours by over 50%, freeing them to focus on training, operations, and guest engagement",
      "More accurate staffing forecasts and intelligent shift assignments translated into lower labor costs and fewer service bottlenecks",
      "Employees experienced more predictable schedules and timely communication, leading to improved attendance and productivity",
      "With properly staffed shifts, the hotel chain reported a noticeable improvement in guest reviews, loyalty, and overall satisfaction scores",
    ],
    businessChallengesTitle: [
      "Inefficient, Manual Scheduling",
      "Limited Visibility into Demand Fluctuations",
      "Employee Dissatisfaction",
      "Difficulty Scaling Operations",
    ],
    ourSolutionTitle: [
      "Automated Demand Forecasting",
      "Smart Shift Allocation",
      "Dynamic Adjustments",
      "Multi-Property Coordination",
    ],
    businessValuesTitle: [
      "Enhanced Operational Efficiency",
      "Improved Staff Satisfaction",
      "Optimized Guest Experiences",
      "Scalable Growth",
    ],
    resultsTitle: [
      "Reduced Scheduling Time",
      "Better Resource Utilization",
      "Higher Staff Engagement",
      "Consistent Guest Satisfaction",
    ],
  },
  {
    name: "automating-freight-quoting",
    title: "Automating Freight Quoting",
    image: "/caseStudies/comparate.png",
    preview: 'The automation of Load Meter (LDM) calculations and seamless integration of carrier rates enabled faster, more accurate quoting and route selection for the transport mediator',
    intro:
      "For international freight intermediaries, efficiently handling multi-carrier pricing and logistics can dramatically impact profitability and client satisfaction. A transport mediator company in the Netherlands faced just such a challenge, as they managed complex cross-border shipments throughout Europe. They engaged our team to streamline their operational workflow. By automating the calculation of Load Meter (LDM) metrics and seamlessly integrating carrier rates from multiple sources, we enabled faster, more accurate quoting and route selection—ultimately transforming their logistics process into a powerful competitive advantage.",
    background:
      "The client specialized in connecting businesses and customers who needed to import or export goods between the Netherlands and other European countries. They relied heavily on Excel-based workflows, manually calculating LDM metrics for each shipment, and then referencing up to 20 different carrier sheets—each with its own format and rate structure—to determine the optimal shipping solution. As shipment volumes grew and regulations varied by country, managing these data sources became increasingly time-consuming, error-prone, and unsustainable.",
    businessChallenges: [
      "With a vast array of carriers, differing formats, and separate country-specific sheets, finding the right rate and terms required significant manual effort",
      "Staff needed to repeatedly calculate load meter metrics by hand, extending processing times and increasing the risk of inaccuracies",
      "Without a single source of truth, operations struggled to quickly compare carriers, slowing down the quoting process and impacting customer responsiveness",
      "As demands grew, the company’s reliance on manual methods made it difficult to scale operations or handle surges in shipping requests",
    ],
    ourSolution: [
      "Users simply input shipment dimensions, weights, and destination details. The system instantly calculated the LDM without manual intervention",
      "We programmed the tool to ingest data from the different carrier sheets, normalizing formats and creating a centralized, searchable database",
      "With a single click, the platform displayed all carrier rates side-by-side, highlighting the most cost-effective option and providing a comprehensive cost breakdown",
      "The solution featured an intuitive dashboard that allowed staff to quickly generate quotes, reduce handling time, and maintain high service quality",
    ],
    businessValues: [
      "By automating tedious calculations and consolidating carrier data, the company’s staff could focus on higher-value tasks and customer engagement",
      "Eliminating manual data entry and referencing ensured more reliable quotes, reducing errors that could erode trust and profitability",
      "Instantaneous comparisons meant faster quotes, improving customer satisfaction and increasing the likelihood of securing new business",
      "With a flexible, automated system at its core, the transport mediator could easily expand its carrier network and handle increased shipment volumes",
    ],
    results: [
      "The quoting process was accelerated by over 60%, allowing faster turnaround times for client requests",
      "Automated calculations and standardized data formats significantly minimized pricing discrepancies and booking mistakes",
      "Quicker, more accurate quotes translated into improved client confidence and a measurable increase in accepted proposals",
      "The streamlined process enabled the company to handle a larger volume of requests without additional staffing needs",
    ],
    businessChallengesTitle: [
      "Complex Multi-Carrier Data",
      "Cumbersome LDM Calculations",
      "Lack of Centralized Information",
      "Scaling Limitations",
    ],
    ourSolutionTitle: [
      "Automated LDM Computation",
      "Dynamic Carrier Integration",
      "Real-Time Cost Comparison",
      "User-Friendly Interface",
    ],
    businessValuesTitle: [
      "Operational Efficiency",
      "Improved Accuracy",
      "Enhanced Responsiveness",
      "Scalability and Growth",
    ],
    resultsTitle: [
      "Time Savings",
      "Reduced Errors",
      "Higher Conversion Rates",
      "Capacity for Expansion",
    ],
  },
  {
    name: "IT-AI-Agent",
    title: "IT AI Agent",
    image: "/caseStudies/it.png",
    preview: 'The AI-driven support agent, built using the company’s existing Zendesk materials, streamlined IT support, increased productivity, and significantly reduced the burden on the IT helpdesk',
    intro:
      "In a large European organization with a predominantly senior workforce, the IT department faced persistent challenges in addressing a deluge of repetitive helpdesk tickets. Though the solutions to many routine issues were documented in Zendesk and other internal knowledge bases, employees often found it difficult to locate the relevant resources. Our team stepped in to create an AI-driven support agent, leveraging the company’s existing Zendesk materials. The result was a transformative, user-friendly solution that streamlined IT support, increased productivity, and significantly reduced the burden on the IT helpdesk.",
    background:
      "The client, a large enterprise with an extensive legacy IT infrastructure, struggled with an aging workforce less accustomed to navigating self-service portals. Their IT team spent a significant portion of their time fielding repetitive queries, often redirecting users to knowledge base articles or existing Zendesk tickets. Despite having well-documented solutions, the complexity of the search process prevented employees from effectively self-serving. The client needed a solution that would present relevant information instantly, improve the user experience, and free up their IT department for more complex tasks.",
    businessChallenges: [
      "Constantly handling repetitive tickets drained time and resources, limiting the IT department’s ability to tackle higher-level strategic projects",
      "Employees struggled to navigate and understand the available documentation, leading to reliance on direct IT support",
      "Despite robust Zendesk documentation, the search process was cumbersome, resulting in prolonged resolution times",
      "As the company grew, so did its volume of support requests, threatening to overwhelm existing IT support workflows",
    ],
    ourSolution: [
      "By training a natural language model on the company’s repository of tickets and documents, the AI agent could quickly interpret user queries and retrieve the most relevant solutions",
      "A user-friendly chat interface enabled employees to describe their issues in plain language, reducing the need for technical know-how",
      "The AI agent didn’t just provide links; it offered step-by-step instructions, ensuring employees could resolve many issues without additional IT intervention",
      "With every query, the AI model refined its understanding, improving the accuracy and relevance of its responses over time",
    ],
    businessValues: [
      "The AI agent drastically reduced the volume of repetitive tickets that required direct IT involvement, freeing support staff to focus on complex projects",
      "By providing immediate, easy-to-understand guidance, employees gained confidence in self-service resources and became more independent",
      "The AI ensured that responses were always up-to-date and accurate, minimizing misinformation and maintaining organizational standards",
      "As the company expanded, the AI solution scaled effortlessly, preventing resource bottlenecks and maintaining quick resolution times",
    ],
    results: [
      "Routine inquiries handled by the AI agent cut repetitive IT tickets by over 50%",
      "Employees found solutions instantly, reducing the average time to resolve common issues from hours to mere minutes",
      "With the mundane tasks delegated to the AI agent, IT support staff reclaimed up to 30% of their workday for strategic initiatives",
      "Quicker, clearer solutions led to improved employee satisfaction rates and increased trust in internal support resources",
    ],
    businessChallengesTitle: [
      "Overburdened IT Staff",
      "Limited User Adoption of Self-Help Resources",
      "Inefficient Knowledge Retrieval",
      "Scalability Concerns",
    ],
    ourSolutionTitle: [
      "Intelligent Search and Retrieval",
      "Conversational Interface",
      "Contextual Guidance",
      "Continuous Learning",
    ],
    businessValuesTitle: [
      "Increased Efficiency",
      "Enhanced User Experience",
      "Consistent, High-Quality Support",
      "Scalability for Growth",
    ],
    resultsTitle: [
      "Significant Reduction in Ticket Load",
      "Faster Resolution Times",
      "Improved Staff Productivity",
      "Higher Employee Satisfaction",
    ],
  },
  {
    name: "HR-Agent",
    title: "HR Agent",
    image: "/caseStudies/hr.png",
    preview: 'The AI-powered agent provided employees with instant access to accurate, up-to-date company, legal, and HR policy information through a user-friendly interface',
    intro:
      "In large organizations, ensuring that employees have a clear, accessible understanding of company policies—spanning corporate guidelines, legal regulations, and HR procedures—is an ongoing challenge. Our client, a multinational company, found that traditional training sessions, intranet pages, and email announcements were not effectively guiding staff to the information they needed. We addressed this gap by developing an AI-powered agent that served as a central, intuitive resource, enabling employees to quickly retrieve accurate, up-to-date information on company, legal, and HR policies through a conversational, user-friendly interface.",
    background:
      "The client struggled to keep their workforce informed about evolving legal frameworks, internal compliance standards, and HR policies. Policies were scattered across multiple platforms and file repositories, making it cumbersome for employees to find the right answers. Meanwhile, the HR and Legal teams spent valuable time fielding repetitive inquiries. Recognizing the need for a more efficient solution, the company sought an intelligent system that could organize and deliver these policies on-demand, empowering employees to self-serve and improving organizational transparency.",
    businessChallenges: [
      "Multiple internal repositories—policy PDFs, intranet pages, training slide decks—created confusion and prolonged the search for reliable information",
      "Common questions about policies consumed HR and Legal resources, slowing response times and reducing focus on strategic activities",
      "As compliance standards and legal requirements changed, outdated documents left employees uncertain about current regulations",
      "New hires struggled to navigate the policy landscape independently, increasing their reliance on direct HR support and lengthening onboarding cycles",
    ],
    ourSolution: [
      "Trained on the company’s comprehensive library of legal, HR, and corporate documents, the agent allowed employees to ask questions in plain language, sidestepping the need for technical search terms",
      "Instead of navigating multiple systems, employees consulted the agent through a familiar chat-like interface, drastically reducing the time spent hunting for documents",
      "The agent’s integration with internal systems ensured that any document revisions were immediately reflected in the agent’s responses, maintaining always-current guidance",
      "Beyond simply retrieving documents, the agent summarized key points, highlighted recent changes, and offered step-by-step instructions to help employees grasp complex topics quickly",
    ],
    businessValues: [
      "By centralizing and simplifying access, the agent significantly decreased the time required for employees to find accurate policy information",
      "With instant access to updated policies, employees were more likely to follow proper procedures and remain in compliance with regulatory guidelines",
      "Fewer repetitive inquiries freed up HR and Legal teams, reducing operational costs and allowing them to focus on strategic, high-value initiatives",
      "New hires quickly acclimated to company standards, leading to faster integration, higher confidence, and improved overall engagement",
    ],
    results: [
      "The agent handled a significant portion of repetitive policy questions, cutting direct inquiries to these departments by over 40%",
      "Employees obtained immediate answers, shrinking information search from hours or days to mere seconds",
      "With readily accessible and continuously updated information, compliance levels rose as employees adhered more closely to regulations",
      "Employees reported greater clarity, trust, and comfort in navigating company policies, contributing to improved morale and a more informed workforce",
    ],
    businessChallengesTitle: [
      "Fragmented Information Sources",
      "Repetitive Inquiries to HR & Legal Teams",
      "Dynamic Regulatory Environment",
      "Onboarding and Training Delays",
    ],
    ourSolutionTitle: [
      "Natural Language Understanding",
      "Centralized Policy Repository",
      "Real-Time Policy Updates",
      "Contextual and Summarized Responses",
    ],
    businessValuesTitle: [
      "Increased Efficiency in Information Retrieval",
      "Better Compliance and Awareness",
      "Cost Savings in Training and Support",
      "Improved Employee Onboarding and Engagement",
    ],
    resultsTitle: [
      "Reduction in HR and Legal Queries",
      "Instant Response Times",
      "Enhanced Compliance Rates",
      "Higher Employee Satisfaction",
    ],
  },
]
