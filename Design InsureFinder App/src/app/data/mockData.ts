export interface HealthPlan {
  id: string;
  provider: string;
  planName: string;
  planType: 'HMO' | 'PPO' | 'EPO' | 'POS';
  monthlyPremium: number;
  deductible: number;
  outOfPocketMax: number;
  rating: number;
  reviewCount: number;
  pros: string[];
  cons: string[];
  coverageDetails: {
    primaryCare: string;
    specialist: string;
    emergencyRoom: string;
    prescription: string;
  };
  benefits: string[];
}

export interface Review {
  id: string;
  planId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  householdSize: number;
  estimatedAnnualIncome: number;
  savedPlans: string[];
}

export const mockPlans: HealthPlan[] = [
  {
    id: '1',
    provider: 'Blue Cross Blue Shield',
    planName: 'Silver Saver Plan',
    planType: 'HMO',
    monthlyPremium: 328,
    deductible: 3500,
    outOfPocketMax: 7000,
    rating: 4.5,
    reviewCount: 234,
    pros: [
      'Low monthly premium',
      'Good for preventive care',
      'Wide network of doctors'
    ],
    cons: [
      'High deductible for frequent visits',
      'Requires referrals for specialists'
    ],
    coverageDetails: {
      primaryCare: '$25 copay',
      specialist: '$50 copay after deductible',
      emergencyRoom: '$350 copay after deductible',
      prescription: '$10/$35/$70 (Generic/Preferred/Non-preferred)'
    },
    benefits: [
      'Free preventive care',
      'Telehealth included',
      'Mental health coverage',
      'Prescription drug coverage'
    ]
  },
  {
    id: '2',
    provider: 'Aetna',
    planName: 'Gold Plus',
    planType: 'PPO',
    monthlyPremium: 485,
    deductible: 1500,
    outOfPocketMax: 5000,
    rating: 4.7,
    reviewCount: 189,
    pros: [
      'Low deductible',
      'No referrals needed',
      'Out-of-network coverage available'
    ],
    cons: [
      'Higher monthly premium',
      'May be expensive for healthy individuals'
    ],
    coverageDetails: {
      primaryCare: '$20 copay',
      specialist: '$40 copay',
      emergencyRoom: '$250 copay after deductible',
      prescription: '$5/$30/$60 (Generic/Preferred/Non-preferred)'
    },
    benefits: [
      'Free preventive care',
      'Vision and dental add-ons available',
      'Fitness program included',
      'No referrals needed'
    ]
  },
  {
    id: '3',
    provider: 'UnitedHealthcare',
    planName: 'Bronze Basic',
    planType: 'EPO',
    monthlyPremium: 245,
    deductible: 6000,
    outOfPocketMax: 8700,
    rating: 4.2,
    reviewCount: 156,
    pros: [
      'Lowest monthly premium',
      'Good for healthy individuals',
      'Covers catastrophic events'
    ],
    cons: [
      'Very high deductible',
      'Limited coverage until deductible met'
    ],
    coverageDetails: {
      primaryCare: 'Full cost until deductible met',
      specialist: 'Full cost until deductible met',
      emergencyRoom: 'Full cost until deductible met',
      prescription: '$15 generic after deductible'
    },
    benefits: [
      'Free preventive care',
      'Emergency coverage',
      'Prescription coverage after deductible'
    ]
  },
  {
    id: '4',
    provider: 'Cigna',
    planName: 'Platinum Care',
    planType: 'PPO',
    monthlyPremium: 612,
    deductible: 500,
    outOfPocketMax: 3000,
    rating: 4.8,
    reviewCount: 298,
    pros: [
      'Very low deductible',
      'Best for frequent medical needs',
      'Comprehensive coverage'
    ],
    cons: [
      'Highest monthly premium',
      'May be overkill for healthy individuals'
    ],
    coverageDetails: {
      primaryCare: '$15 copay',
      specialist: '$30 copay',
      emergencyRoom: '$150 copay',
      prescription: '$0/$20/$50 (Generic/Preferred/Non-preferred)'
    },
    benefits: [
      'Free preventive care',
      'Lowest cost-sharing',
      'Mental health and substance abuse coverage',
      'Maternity care included'
    ]
  },
  {
    id: '5',
    provider: 'Kaiser Permanente',
    planName: 'Silver Balanced',
    planType: 'HMO',
    monthlyPremium: 398,
    deductible: 2500,
    outOfPocketMax: 6500,
    rating: 4.6,
    reviewCount: 412,
    pros: [
      'Integrated care system',
      'Good balance of premium and coverage',
      'Easy appointment scheduling'
    ],
    cons: [
      'Must use Kaiser facilities',
      'Limited to specific geographic areas'
    ],
    coverageDetails: {
      primaryCare: '$30 copay',
      specialist: '$50 copay',
      emergencyRoom: '$250 copay',
      prescription: '$10/$30/$50 (Generic/Preferred/Non-preferred)'
    },
    benefits: [
      'Free preventive care',
      'Integrated medical records',
      'Mobile app for appointments',
      'Virtual care available'
    ]
  },
  {
    id: '6',
    provider: 'Humana',
    planName: 'Gold Standard',
    planType: 'POS',
    monthlyPremium: 456,
    deductible: 2000,
    outOfPocketMax: 5500,
    rating: 4.4,
    reviewCount: 203,
    pros: [
      'Flexible network options',
      'Moderate costs',
      'Good specialist access'
    ],
    cons: [
      'Referrals required for in-network',
      'Higher costs for out-of-network'
    ],
    coverageDetails: {
      primaryCare: '$25 copay',
      specialist: '$45 copay with referral',
      emergencyRoom: '$300 copay',
      prescription: '$10/$35/$65 (Generic/Preferred/Non-preferred)'
    },
    benefits: [
      'Free preventive care',
      'Wellness rewards program',
      'Dental and vision options',
      'Nurse hotline 24/7'
    ]
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    planId: '1',
    userName: 'Sarah M.',
    userAvatar: 'SM',
    rating: 5,
    date: '2026-02-15',
    comment: 'Great plan for my needs! The low premium helps me save money each month, and the preventive care coverage is excellent.'
  },
  {
    id: 'r2',
    planId: '1',
    userName: 'James T.',
    userAvatar: 'JT',
    rating: 4,
    date: '2026-01-28',
    comment: 'Good value overall. The deductible is a bit high, but for routine care it works well.'
  },
  {
    id: 'r3',
    planId: '2',
    userName: 'Maria G.',
    userAvatar: 'MG',
    rating: 5,
    date: '2026-03-01',
    comment: 'Love the flexibility of this PPO! No referrals needed and I can see specialists easily.'
  },
  {
    id: 'r4',
    planId: '2',
    userName: 'David L.',
    userAvatar: 'DL',
    rating: 4,
    date: '2026-02-20',
    comment: 'Premium is higher but worth it for the comprehensive coverage and low deductible.'
  },
  {
    id: 'r5',
    planId: '4',
    userName: 'Emily R.',
    userAvatar: 'ER',
    rating: 5,
    date: '2026-03-10',
    comment: 'Perfect for my family with ongoing medical needs. The low deductible saves us money in the long run.'
  },
  {
    id: 'r6',
    planId: '5',
    userName: 'Michael K.',
    userAvatar: 'MK',
    rating: 5,
    date: '2026-02-25',
    comment: 'Kaiser makes healthcare so easy. Everything is coordinated and the app is fantastic!'
  }
];

export const mockUserProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  age: 32,
  householdSize: 1,
  estimatedAnnualIncome: 55000,
  savedPlans: ['2', '5']
};

export const faqData = [
  {
    question: 'What is a premium?',
    answer: 'A premium is the monthly amount you pay for your health insurance coverage, regardless of whether you use medical services or not. Think of it like a membership fee to have health insurance.'
  },
  {
    question: 'What is a deductible?',
    answer: 'A deductible is the amount you must pay out-of-pocket for healthcare services before your insurance starts to pay. For example, with a $2,000 deductible, you pay the first $2,000 of covered services yourself, then insurance kicks in.'
  },
  {
    question: 'What is an out-of-pocket maximum?',
    answer: 'The out-of-pocket maximum is the most you will pay for covered services in a year. Once you reach this amount, your insurance pays 100% of covered benefits. This protects you from catastrophic medical costs.'
  },
  {
    question: 'What\'s the difference between HMO and PPO?',
    answer: 'HMO (Health Maintenance Organization) plans typically have lower premiums but require you to choose a primary care doctor and get referrals for specialists. PPO (Preferred Provider Organization) plans offer more flexibility - you can see any doctor without referrals, but usually have higher premiums.'
  },
  {
    question: 'What is EPO?',
    answer: 'EPO (Exclusive Provider Organization) is a managed care plan where services are covered only if you use doctors and hospitals in the plan\'s network (except in an emergency). You don\'t need referrals to see specialists.'
  },
  {
    question: 'What is POS?',
    answer: 'POS (Point of Service) plans combine features of HMO and PPO. You choose a primary care doctor and need referrals for specialists, but you can go out-of-network for higher costs.'
  },
  {
    question: 'How do I enroll in a plan?',
    answer: 'Once you\'ve selected a plan, click "Enroll Now" on the plan detail page. You\'ll be guided through providing personal information, choosing coverage dates, and setting up payment. Enrollment typically takes 10-15 minutes.'
  },
  {
    question: 'When does my coverage start?',
    answer: 'Coverage typically starts on the first day of the month following your enrollment, as long as you enroll before the 15th of the current month. If you enroll after the 15th, coverage usually starts the first of the following month.'
  }
];
