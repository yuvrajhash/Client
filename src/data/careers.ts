export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Mineral Procurement Specialist",
    slug: "mineral-procurement-specialist",
    department: "Supply Chain",
    location: "Geneva, Switzerland",
    type: "Full-time",
    description: "We are looking for an experienced Procurement Specialist to manage sourcing strategies for industrial minerals.",
    responsibilities: [
      "Develop and execute sourcing strategies for key mineral categories.",
      "Negotiate contracts with global suppliers and miners.",
      "Monitor market trends and pricing fluctuations.",
      "Ensure compliance with ethical sourcing standards."
    ],
    requirements: [
      "5+ years of experience in mineral procurement or commodities trading.",
      "Strong negotiation and relationship management skills.",
      "Knowledge of international trade regulations (Incoterms, LC, etc.).",
      "Fluent in English; additional languages are a plus."
    ]
  },
  {
    id: "2",
    title: "Supply Chain Analyst",
    slug: "supply-chain-analyst",
    department: "Logistics",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Analyze and optimize our global supply chain operations to ensure efficient delivery of minerals.",
    responsibilities: [
      "Analyze supply chain data to identify bottlenecks and opportunities.",
      "Optimize logistics routes and shipping costs.",
      "Maintain inventory levels and forecast demand.",
      "Prepare reports for senior management."
    ],
    requirements: [
      "Bachelor's degree in Supply Chain Management, Logistics, or related field.",
      "Proficiency in data analysis tools (Excel, SQL, Tableau).",
      "Strong analytical and problem-solving skills.",
      "Experience with ERP systems."
    ]
  },
  {
    id: "3",
    title: "International Sales Manager",
    slug: "international-sales-manager",
    department: "Sales",
    location: "Singapore",
    type: "Full-time",
    description: "Drive sales growth in the Asian market by building relationships with key industrial clients.",
    responsibilities: [
      "Identify and pursue new business opportunities in the region.",
      "Manage relationships with existing key accounts.",
      "Develop and implement sales strategies.",
      "Collaborate with technical teams to provide solutions to customers."
    ],
    requirements: [
      "7+ years of B2B sales experience in industrial materials.",
      "Proven track record of meeting or exceeding sales targets.",
      "Strong understanding of the Asian market.",
      "Excellent communication and presentation skills."
    ]
  },
  {
    id: "4",
    title: "Geology & Resource Analyst",
    slug: "geology-resource-analyst",
    department: "Technical",
    location: "Perth, Australia",
    type: "Contract",
    description: "Provide geological expertise to assess mineral quality and potential new sources.",
    responsibilities: [
      "Evaluate mineral deposits and quality reports.",
      "Conduct site visits and audits of mines.",
      "Provide technical support to procurement and sales teams.",
      "Stay updated on geological research and exploration trends."
    ],
    requirements: [
      "Degree in Geology or Earth Sciences.",
      "Experience in industrial minerals exploration or assessment.",
      "Willingness to travel to remote locations.",
      "Detail-oriented with strong reporting skills."
    ]
  },
  {
    id: "5",
    title: "Logistics Coordinator",
    slug: "logistics-coordinator",
    department: "Logistics",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Coordinate the movement of shipments from origin to destination, ensuring timely delivery.",
    responsibilities: [
      "Coordinate freight bookings with shipping lines and freight forwarders.",
      "Prepare and review shipping documentation (BL, Invoice, PL, CO).",
      "Track shipments and update stakeholders.",
      "Resolve logistics issues and delays."
    ],
    requirements: [
      "3+ years of experience in international logistics.",
      "Familiarity with shipping documentation and customs procedures.",
      "Strong organizational and multitasking skills.",
      "Ability to work under pressure."
    ]
  }
];
