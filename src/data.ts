import { Service, FAQ, Testimonial, Advantage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'income-tax-filing',
    title: 'Income Tax Return Filing',
    category: 'taxation',
    shortDescription: 'Error-free, timely preparation and e-filing of Income Tax Returns for Salaried Individuals, Business Owners, Professionals, and Corporates.',
    detailedDescription: 'Filing your Income Tax Return (ITR) is critical for compliance, loan approvals, and maintaining financial health. We analyze your income streams—salary, business, house property, capital gains, and other sources—to maximize eligible deductions under Chapter VI-A (80C, 80D, etc.) and advise on old vs. new tax regimes to minimize tax liabilities legally.',
    features: [
      'ITR-1 to ITR-7 computation and filing',
      'Regime optimization analysis (Old vs. New)',
      'Deductions and exemptions audit (80C, 80D, HRA, etc.)',
      'Capital gains calculation (Equity, Real Estate, Mutual Funds)',
      'E-verification and response to defective return notices'
    ],
    iconName: 'FileText'
  },
  {
    id: 'income-tax-refund',
    title: 'Income Tax Refund Guidance',
    category: 'taxation',
    shortDescription: 'Expert assistance in claim processing, correcting defective filings, and resolving stuck or delayed income tax refund claims.',
    detailedDescription: 'Stuck refunds or unexpected tax credit mismatches can disrupt your cash flow. We assist in auditing your 26AS, AIS, and TIS statements to reconcile TDS mismatches, submit revalidation requests for returned bank deposits, file rectification requests under Section 154, and track your refunds directly with the Centralized Processing Center (CPC).',
    features: [
      'AIS / TIS / Form 26AS reconciliation',
      'Rectification requests under Section 154',
      'Refund revalidation and bank account linking assistance',
      'Representation for long-delayed refunds',
      'Grievance filing on the e-filing portal'
    ],
    iconName: 'DollarSign'
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    category: 'taxation',
    shortDescription: 'Obtain your Goods & Services Tax Identification Number (GSTIN) swiftly for your proprietorship, partnership, or corporate business.',
    detailedDescription: 'Whether you are crossing the statutory threshold limit or voluntarily choosing GST registration to enable inter-state trade or e-commerce partnerships, we handle the entire process. We secure your GST Certificate smoothly by preparing correct documentation, identifying exact HSN/SAC codes, and resolving clarification notices.',
    features: [
      'New GST registration for all business structures',
      'HSN / SAC code mapping and optimization',
      'Resolution of clarifications raised by GST Officers',
      'Voluntary GST registration for e-commerce sellers',
      'Amendment of core and non-core registration details'
    ],
    iconName: 'CheckSquare'
  },
  {
    id: 'gst-return-filing',
    title: 'GST Return Filing',
    category: 'taxation',
    shortDescription: 'Monthly, quarterly, and annual GST compliance services to avoid heavy penalties and secure seamless Input Tax Credit (ITC).',
    detailedDescription: 'Missing GST compliance can lead to blocking of E-Way bills, cancellation of registrations, and loss of business trust. We handle systematic monthly and quarterly return filings (GSTR-1, GSTR-3B, GSTR-4, etc.), reconcile GSTR-2B to maximize your Input Tax Credit, and compile detailed annual returns (GSTR-9/9C) error-free.',
    features: [
      'Preparation & filing of GSTR-1 & GSTR-3B',
      'Reconciliation of purchase register with GSTR-2B/2A for optimal ITC',
      'Quarterly QRMP scheme filing and tax computations',
      'Annual returns preparation (GSTR-9 & GSTR-9C audit reconciliation)',
      'E-Way bill generation and compliance advisory'
    ],
    iconName: 'Activity'
  },
  {
    id: 'tds-return',
    title: 'TDS Return Filing',
    category: 'taxation',
    shortDescription: 'Quarterly TDS calculation, validation, return filing, and Form 16 / 16A generation to satisfy withholding tax regulations.',
    detailedDescription: 'Businesses must deduct tax at source (TDS) on payments like salaries, professional fees, contractor payments, and rent. We help calculate accurate TDS, generate challans, prepare quarterly TDS statements (Form 24Q, 26Q, 27Q), run pre-filing validation checks, and generate corresponding Form 16 or Form 16A certificates.',
    features: [
      'Quarterly TDS returns (Form 24Q, 26Q, 27Q)',
      'TDS challan verification and payment assistance',
      'Form 16/16A generation via TRACES platform',
      'Correction of TDS defaults and justification reports analysis',
      'Lower TDS deduction certificate applications'
    ],
    iconName: 'Percent'
  },
  {
    id: 'tax-audit',
    title: 'Tax Audit (U/S 44AB)',
    category: 'audit',
    shortDescription: 'Comprehensive verification of books of accounts for businesses and professionals crossing statutory turnover thresholds.',
    detailedDescription: 'Under Section 44AB of the Income Tax Act, businesses with turnover exceeding statutory limits must undergo a Tax Audit by a Chartered Accountant. We systematically review your transaction ledgers, verify compliance with tax laws, audit your business expenses, and compile Form 3CA/3CB and Form 3CD to prevent queries or penalties from tax departments.',
    features: [
      'Verification of books of accounts and ledger balances',
      'Checking compliance with TDS, GST, and depreciation provisions',
      'Preparation and filing of Form 3CA/3CB and Form 3CD schedules',
      'Audit reports tailored to proprietary, firm, and corporate structures',
      'Representations for post-audit assessments'
    ],
    iconName: 'BarChart3'
  },
  {
    id: 'statutory-audit',
    title: 'Statutory Audit',
    category: 'audit',
    shortDescription: 'Independent audit of company financial records in accordance with the Companies Act to ensure true and fair financial representation.',
    detailedDescription: 'Statutory Audits are a legal mandate for private limited companies, LLPs above specific limits, and trusts. We perform extensive independent evaluations of balance sheets, profit and loss statements, cash flow statements, and notes to accounts, providing a solid stamp of assurance to shareholders, banks, and regulators.',
    features: [
      'Verification of balance sheets, P&L accounts, and general ledgers',
      'Checking adherence to Indian Accounting Standards (Ind AS / AS)',
      'Internal control system review and risk assessments',
      'Preparation of audit opinions, CARO reports, and notes to accounts',
      'Board meeting and AGM advisory for regulatory compliance'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'msme-registration',
    title: 'MSME / Udyam Registration',
    category: 'registration',
    shortDescription: 'Register under MSME (Udyam) to access lower credit interest rates, government subsidies, and protection against delayed payments.',
    detailedDescription: 'Micro, Small, and Medium Enterprises receive immense benefits in India, including collateral-free loans, priority sector lending, subsidy on patent registrations, and strong legal support against delayed buyer payments (45-day credit limits under MSME Act). We secure your Udyam Certificate in record time with precise classification.',
    features: [
      'End-to-end Udyam registration on government portal',
      'Proper classification of Enterprise category (Micro/Small/Medium)',
      'Advisory on credit rating subsidies and government tender benefits',
      'Legal guidance for recovering outstanding payments from buyers',
      'Registration under MSME Samadhaan for grievance resolution'
    ],
    iconName: 'Award'
  },
  {
    id: 'company-registration',
    title: 'Company Registration (Pvt Ltd)',
    category: 'incorporation',
    shortDescription: 'Establish your Private Limited Company with complete MCA clearances, including Name Approval, DSC, SPICe+ form, PAN, and TAN.',
    detailedDescription: 'A Private Limited Company (Pvt Ltd) offers limited liability protection, high credit credibility, and easy equity funding options for startups. We handle the entire incorporation life-cycle, drafting the Memorandum of Association (MOA) and Articles of Association (AOA), acquiring Director Identification Numbers (DIN), and securing the Certificate of Incorporation.',
    features: [
      'Name reservation via RUN (Reserve Unique Name) portal',
      'Digital Signature Certificates (DSC) for two directors',
      'Drafting customized MoA and AoA bylaws',
      'Filing SPICe+ Form for fast incorporation',
      'Allotment of Company PAN, TAN, and corporate bank account activation'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'llp-registration',
    title: 'LLP Registration',
    category: 'incorporation',
    shortDescription: 'Form a Limited Liability Partnership (LLP) to combine the flexibility of a partnership with the benefit of limited liability protection.',
    detailedDescription: 'An LLP is an excellent choice for service providers, professional consultancies, and family businesses looking for lower compliance overhead compared to a private limited company, while still maintaining distinct legal entity status and limited liability shields for partners. We draft secure LLP agreements to protect interests.',
    features: [
      'Partner name approval via FiLLiP portal',
      'Acquisition of Designated Partner Identification Numbers (DPIN)',
      'Drafting LLP Agreements specifying contribution and profit ratios',
      'Filing registration forms with ROC (Registrar of Companies)',
      'Securing LLP PAN and opening active current account'
    ],
    iconName: 'Users'
  },
  {
    id: 'firm-registration',
    title: 'Partnership & Proprietorship Registration',
    category: 'incorporation',
    shortDescription: 'Register a Partnership Firm or execute a Sole Proprietorship setup through deed drafting, notary certification, and trade licensing.',
    detailedDescription: 'If you want to quickly start a retail, manufacturing, or professional trading business with minimal setup costs, a Partnership Firm or Sole Proprietorship is optimal. We draft standardized partnership deeds in compliance with the Indian Partnership Act, manage notarization, and obtain business licenses to open bank accounts.',
    features: [
      'Drafting custom Partnership Deeds with core clauses',
      'Notary services and state Registrar of Firms (RoF) submission',
      'Sole proprietorship setup via MSME/GST registrations',
      'Local trade license and shop establishment act filings',
      'Advisory on capital structuring and partner salary taxation'
    ],
    iconName: 'FileSignature'
  },
  {
    id: 'fssai-registration',
    title: 'FSSAI Food License',
    category: 'registration',
    shortDescription: 'Secure FSSAI Basic, State, or Central Food License for food manufacturing, packaging, retail, restaurants, and cloud kitchens.',
    detailedDescription: 'Any business operating in the food supply chain—from cloud kitchens and bakeries to large distributors and exporters—must possess an active FSSAI registration/license. Operating without a food license attracts steep fines. We compile the hygiene reports, floor plans, and owner details to obtain your 14-digit FSSAI license.',
    features: [
      'FSSAI Basic Registration (Turnover below 12 Lakhs)',
      'FSSAI State License (Turnover between 12 Lakhs to 20 Crores)',
      'FSSAI Central License for multi-state chains or importers/exporters',
      'Food Safety Management System (FSMS) plan drafting',
      'Modification and yearly renewal of existing food licenses'
    ],
    iconName: 'Utensils'
  },
  {
    id: 'iec-registration',
    title: 'IEC (Import Export Code)',
    category: 'registration',
    shortDescription: 'Acquire your lifetime Import Export Code (IEC) from the DGFT to legally initiate global trade and clear custom clearances.',
    detailedDescription: 'An Import Export Code (IEC) is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It is mandatory for any merchant looking to import goods into India or export services/products overseas. The IEC is valid for a lifetime and does not require periodic return filing.',
    features: [
      'Online application processing on DGFT portal',
      'Document validation (Bank certificate, PAN, Address proof)',
      'Quick issuance of Import Export Code certificate',
      'Advisory on custom clearance procedures',
      'Linking GST with IEC for smooth custom duty refunds'
    ],
    iconName: 'Globe'
  },
  {
    id: 'loan-consultancy',
    title: 'Loan Consultancy',
    category: 'advisory',
    shortDescription: 'Expert advisory on obtaining Business Loans, Working Capital, CC limits, Project Financing, and Machinery Loans.',
    detailedDescription: 'Getting credit approval from banks requires structured planning, precise financial drafting, and clear representation. We act as your financial bridge, drafting Bankable Project Reports, CMA (Credit Monitoring Arrangement) data statements, provisional financial sheets, and negotiating with top financial institutions for optimal interest rates.',
    features: [
      'Compilation of professional Project Reports for funding applications',
      'CMA Data drafting and forward-looking financial projections',
      'Consultancy on securing Working Capital & Cash Credit (CC) limits',
      'Machinery Loans and Term Loan documentation',
      'Liaison with nationalized and private banks for file approval'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'govt-scheme-consultancy',
    title: 'Government Scheme Consultancy',
    category: 'advisory',
    shortDescription: 'Unlock subsidies, incentives, and structural benefits under various Central and State schemes (PMEGP, CLCSS, Stand-Up India).',
    detailedDescription: 'The Indian Government offers attractive financial schemes to support young entrepreneurs and MSMEs. However, navigating the bureaucratic filing can be daunting. We consult on eligibility, manage applications, and coordinate with officers to unlock subsidies, interest subvention, and tax exemptions under PMEGP, Stand-Up India, Mudra Loans, and Start-up India schemes.',
    features: [
      'Advisory on PMEGP (Prime Minister Employment Generation Programme)',
      'Start-up India recognition, tax holidays, and funding support',
      'Subsidy claims under technology upgrading schemes (CLCSS)',
      'Interest subvention schemes guidance for exporters and MSMEs',
      'State-specific industrial subsidy documentation'
    ],
    iconName: 'Gift'
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'adv-experience',
    title: 'Deep Industry Expertise',
    description: 'Led by M. Zubair, a veteran consultant with comprehensive mastery over complex taxation systems, compliance pathways, and corporate laws.',
    iconName: 'Compass'
  },
  {
    id: 'adv-accuracy',
    title: 'Meticulous & Error-Free',
    description: 'We run multi-tier audit scans on your filings to eliminate compliance gaps, mismatch errors, and prevent high-stakes notices from tax departments.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'adv-speed',
    title: 'Fast & Committed Timelines',
    description: 'We respect your time. Registrations, return filings, and report compilations are completed ahead of deadlines to save you from late fee penalties.',
    iconName: 'Clock'
  },
  {
    id: 'adv-pricing',
    title: 'Transparent, Fair Pricing',
    description: 'Corporate-grade corporate advisory and tax resolution at SME-friendly prices. No hidden charges, no surprise fees. Complete billing integrity.',
    iconName: 'Coins'
  },
  {
    id: 'adv-support',
    title: '365-Day Dedicated Support',
    description: 'Tax planning is a year-round requirement. Our client care hotline provides quick query resolution, status updates, and dynamic tax planning advice.',
    iconName: 'HeartHandshake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Sharma',
    designation: 'Managing Director',
    companyName: 'Apex Industrial Solutions',
    feedback: 'Zubair & Associates made our company registration and GST migration incredibly smooth. Mr. Zubair explained everything in simple terms, saving us hours of research. Highly recommended for any new entrepreneur!',
    rating: 5,
    initials: 'RS'
  },
  {
    id: 't2',
    name: 'Anjali Gupta',
    designation: 'Founder & CEO',
    companyName: 'Anjali\'s Gourmet Bakes',
    feedback: 'I was worried about securing my FSSAI State license and managing MSME loans. M. Zubair took complete charge, drafted excellent CMA projections, and got both cleared within 2 weeks! True professional.',
    rating: 5,
    initials: 'AG'
  },
  {
    id: 't3',
    name: 'Vikramjit Singh',
    designation: 'Partner',
    companyName: 'V.S. Logistics Solutions',
    feedback: 'Managing GST filing for 15+ trucks across states was an accounting nightmare. Zubair & Associates took over our compliance, and now our returns are filed on the 10th of every month. Input Tax Credit matching is flawless!',
    rating: 5,
    initials: 'VS'
  },
  {
    id: 't4',
    name: 'Dr. Amit Mehta',
    designation: 'Chief Radiologist',
    companyName: 'Mehta Diagnostic Center',
    feedback: 'My personal and professional tax returns are extremely complex due to capital gains and multiple clinic consultancies. For 5 years now, Zubair & Associates has optimized my tax regimes and secured prompt refunds.',
    rating: 5,
    initials: 'AM'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'What is the last date to file Income Tax Returns in India?',
    answer: 'For individual taxpayers, salaried employees, and non-audit businesses, the standard due date to file Income Tax Returns (ITR) is 31st July of the assessment year. For businesses requiring a Tax Audit under Section 44AB, the due date is usually 31st October of the assessment year.',
    category: 'tax'
  },
  {
    id: 'faq2',
    question: 'Is GST registration mandatory for my business?',
    answer: 'GST registration is mandatory if your aggregate annual turnover exceeds ₹40 Lakhs for goods suppliers or ₹20 Lakhs for service providers (₹20 Lakhs and ₹10 Lakhs respectively for North-Eastern and hill states). Additionally, businesses engaged in inter-state supply, e-commerce sellers, and food aggregators must register, regardless of their turnover.',
    category: 'gst'
  },
  {
    id: 'faq3',
    question: 'How long does it take to register a Private Limited Company?',
    answer: 'With proper documentation, a Private Limited Company can be incorporated in 5 to 7 working days. This includes securing the Digital Signature Certificate (DSC), securing name approval from MCA, and submitting the SPICe+ form for incorporation, along with automated PAN & TAN generation.',
    category: 'business'
  },
  {
    id: 'faq4',
    question: 'What are the core documents required for MSME (Udyam) Registration?',
    answer: 'MSME registration is highly simplified. The core documents required are the promoter\'s Aadhaar card (linked to an active mobile number), the PAN card of the business or proprietor, the bank account details (account number and IFSC code), and the physical business address. No physical files need to be submitted anywhere.',
    category: 'business'
  },
  {
    id: 'faq5',
    question: 'What is a Tax Audit under Section 44AB and who needs it?',
    answer: 'A Tax Audit involves a structured review of your business books of accounts by a practicing Chartered Accountant. It is mandatory for any business whose total sales, turnover, or gross receipts exceeds ₹1 Crore (increased to ₹10 Crores if cash transactions are less than 5% of total transactions) and for professionals whose gross receipts exceed ₹50 Lakhs in any financial year.',
    category: 'tax'
  },
  {
    id: 'faq6',
    question: 'How do I claim a delayed Income Tax Refund?',
    answer: 'If your refund is delayed, first check its status on the e-filing portal. Common reasons for delays include pending bank account pre-validation or mismatch between the tax credit in your Form 26AS/AIS and the ITR submitted. We can file a Refund Revalidation request or represent your case to the Income Tax Department to speed up the process.',
    category: 'tax'
  }
];
