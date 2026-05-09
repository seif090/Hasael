import { User } from '../models/user.model';
import { InvestmentProject, Investment, FundingRequest } from '../models/investment.model';
import { Service, ServiceProvider } from '../models/service.model';

export const mockUsers: User[] = [
  {
    id: '1',
    fullName: 'أحمد العتيبي',
    email: 'ahmed@example.com',
    phone: '0501234567',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    memberSince: 'يناير 2024',
    role: 'investor'
  },
  {
    id: '2',
    fullName: 'محمد السالم',
    email: 'mohammed@example.com',
    phone: '0507654321',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    memberSince: 'فبراير 2024',
    role: 'farmer'
  },
  {
    id: '3',
    fullName: 'فاطمة الغامدي',
    email: 'fatima@example.com',
    phone: '0509876543',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    memberSince: 'مارس 2024',
    role: 'farmer'
  },
  {
    id: '4',
    fullName: 'خالد الشمري',
    email: 'khalid@example.com',
    phone: '0501122334',
    memberSince: 'أبريل 2024',
    role: 'service_provider'
  },
  {
    id: '5',
    fullName: 'نورة القحطاني',
    email: 'nora@example.com',
    phone: '0504455667',
    memberSince: 'مايو 2024',
    role: 'investor'
  },
  {
    id: '6',
    fullName: 'سعود الدوسري',
    email: 'saud@example.com',
    phone: '0508899001',
    memberSince: 'يونيو 2024',
    role: 'farmer'
  }
];

export const mockProjects: InvestmentProject[] = [
  {
    id: '1',
    title: 'مشروع زراعة القمح في القصيم',
    description: 'مشروع استثماري في زراعة القمح على مساحة 50 هكتار مع تكنولوجيا الري الحديثة',
    category: 'crops',
    targetAmount: 500000,
    currentAmount: 350000,
    expectedReturn: 15,
    duration: 12,
    location: 'القصيم',
    farmer: {
      name: 'عبدالله الدوسري',
      rating: 4.8,
      completedProjects: 12
    },
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    status: 'active',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'مشروع تسمين الأغنام',
    description: 'مشروع تسمين 500 رأس من الأغنام باستخدام أعلاف محلية عالية الجودة',
    category: 'livestock',
    targetAmount: 300000,
    currentAmount: 280000,
    expectedReturn: 18,
    duration: 8,
    location: 'الرياض',
    farmer: {
      name: 'سعود القحطاني',
      rating: 4.9,
      completedProjects: 8
    },
    images: [
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800',
      'https://images.unsplash.com/photo-1548449173-0a0b23c0c8ea?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800'
    ],
    status: 'active',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    title: 'مشروع الزراعة المائية',
    description: 'نظام زراعة مائية حديث للخضروات مع تكنولوجيا التحكم الآلي',
    category: 'infrastructure',
    targetAmount: 750000,
    currentAmount: 200000,
    expectedReturn: 20,
    duration: 18,
    location: 'الشرقية',
    farmer: {
      name: 'فهد الشمري',
      rating: 4.7,
      completedProjects: 5
    },
    images: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    status: 'active',
    createdAt: new Date('2024-03-10')
  },
  {
    id: '4',
    title: 'مشروع تربية الدواجن',
    description: 'مزرعة لتربية الدواجن بطرق صديقة للبيئة مع نظام تبريد ذكي',
    category: 'livestock',
    targetAmount: 400000,
    currentAmount: 400000,
    expectedReturn: 16,
    duration: 10,
    location: 'تبوك',
    farmer: {
      name: 'عمر البالوي',
      rating: 4.6,
      completedProjects: 15
    },
    images: [
      'https://images.unsplash.com/photo-1548449173-0a0b23c0c8ea?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800'
    ],
    status: 'funded',
    createdAt: new Date('2024-01-20')
  },
  {
    id: '5',
    title: 'مشروع زراعة التمر',
    description: 'زراعة التمر في مساحة 30 هكتار باستخدام تقنيات الزراعة المستدامة',
    category: 'crops',
    targetAmount: 600000,
    currentAmount: 180000,
    expectedReturn: 14,
    duration: 24,
    location: 'الطائف',
    farmer: {
      name: 'ياسر الحربي',
      rating: 4.9,
      completedProjects: 20
    },
    images: [
      'https://images.unsplash.com/photo-1587304382623-9a1e4737ee9b?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'
    ],
    status: 'active',
    createdAt: new Date('2024-02-15')
  },
  {
    id: '6',
    title: 'مشروع تجهيز مزرعة حديثة',
    description: 'شراء معدات حديثة لمزرعة الأبقار بسعة 200 رأس',
    category: 'equipment',
    targetAmount: 800000,
    currentAmount: 500000,
    expectedReturn: 17,
    duration: 15,
    location: 'حائل',
    farmer: {
      name: 'طارق السعد',
      rating: 4.5,
      completedProjects: 7
    },
    images: [
      'https://images.unsplash.com/photo-1516045090785-2d71498e9646?w=800',
      'https://images.unsplash.com/photo-1500653243719-7b8e6b8e3c1a?w=800',
      'https://images.unsplash.com/photo-1548449173-0a0b23c0c8ea?w=800'
    ],
    status: 'active',
    createdAt: new Date('2024-03-05')
  }
];

export const mockInvestments: Investment[] = [
  {
    id: '1',
    projectId: '1',
    userId: '1',
    amount: 50000,
    investedAt: new Date('2024-02-01'),
    expectedReturn: 7500,
    status: 'active'
  },
  {
    id: '2',
    projectId: '2',
    userId: '1',
    amount: 75000,
    investedAt: new Date('2024-02-10'),
    expectedReturn: 13500,
    status: 'active'
  },
  {
    id: '3',
    projectId: '4',
    userId: '5',
    amount: 100000,
    investedAt: new Date('2024-03-15'),
    expectedReturn: 16000,
    status: 'completed'
  }
];

export const mockFundingRequests: FundingRequest[] = [
  {
    id: '1',
    userId: '2',
    projectTitle: 'مشروع زراعة القطن',
    description: 'مشروع زراعة القطن في المنطقة الشرقية بمساحة 100 هكتار',
    category: 'crops',
    requestedAmount: 1000000,
    duration: 18,
    expectedReturn: 15,
    location: 'الدمام',
    documents: ['business-plan.pdf', 'land-deed.pdf'],
    status: 'pending',
    submittedAt: new Date('2024-04-01')
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'حصاد آلي بالحصادات الحديثة',
    description: 'خدمة حصاد آلية باستخدام أحدث الحصادات مع طاقم محترف',
    category: 'machinery',
    provider: {
      name: 'شركة الزراعة الحديثة',
      rating: 4.9,
      completedServices: 150
    },
    price: 500,
    unit: 'hectare',
    location: 'الرياض',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
      'https://images.unsplash.com/photo-1503614442490-3f931c8e3865?w=800',
      'https://images.unsplash.com/photo-1516045090785-2d71498e9646?w=800'
    ],
    createdAt: new Date('2024-01-20')
  },
  {
    id: '2',
    title: 'نظام الري بالتنقيط',
    description: 'تركيب وصيانة أنظمة الري بالتنقيط الحديثة',
    category: 'irrigation',
    provider: {
      name: 'مركز الري المتقدم',
      rating: 4.8,
      completedServices: 200
    },
    price: 150,
    unit: 'hour',
    location: 'القصيم',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
      'https://images.unsplash.com/photo-1580674284081-9f4d3595d8e2?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    createdAt: new Date('2024-02-05')
  },
  {
    id: '3',
    title: 'نقل المحاصيل الزراعية',
    description: 'خدمات نقل المحاصيل ببرادات مخصصة للحفاظ على الجودة',
    category: 'logistics',
    provider: {
      name: 'النقل السريع',
      rating: 4.7,
      completedServices: 180
    },
    price: 300,
    unit: 'day',
    location: 'جميع المناطق',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      'https://images.unsplash.com/photo-1601315487776-2df3ebc1dc25?w=800',
      'https://images.unsplash.com/photo-1503614442490-3f931c8e3865?w=800'
    ],
    createdAt: new Date('2024-02-15')
  },
  {
    id: '4',
    title: 'استشارة زراعية متخصصة',
    description: 'استشارات من خبراء زراعيين لتحسين الإنتاجية',
    category: 'consultancy',
    provider: {
      name: 'د. أحمد الزراع',
      rating: 5.0,
      completedServices: 90
    },
    price: 200,
    unit: 'hour',
    location: 'عن بعد',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      'https://images.unsplash.com/photo-1559839919-d707c9e0c27d?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    createdAt: new Date('2024-03-01')
  },
  {
    id: '5',
    title: 'تأجير جرار زراعي',
    description: 'تأجير جرار حديث للحقول الكبيرة مع سائق محترف',
    category: 'machinery',
    provider: {
      name: 'شركة الحقول',
      rating: 4.8,
      completedServices: 75
    },
    price: 800,
    unit: 'day',
    location: 'القصيم',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1503614442490-3f931c8e3865?w=800',
      'https://images.unsplash.com/photo-1516045090785-2d71498e9646?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    createdAt: new Date('2024-03-10')
  },
  {
    id: '6',
    title: 'صيانة شبكات السدود',
    description: 'صيانة دورية لشبكات السدود والخزانات الزراعية',
    category: 'irrigation',
    provider: {
      name: 'مياه الرياض',
      rating: 4.6,
      completedServices: 120
    },
    price: 1000,
    unit: 'project',
    location: 'الرياض',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1580674284081-9f4d3595d8e2?w=800',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    createdAt: new Date('2024-03-20')
  },
  {
    id: '7',
    title: 'نقل العفاشيات',
    description: 'نقل العفاشيات الزراعية للمناطق البعيدة',
    category: 'logistics',
    provider: {
      name: 'النقل الثقيل',
      rating: 4.5,
      completedServices: 95
    },
    price: 500,
    unit: 'day',
    location: 'جميع المناطق',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1601315487776-2df3ebc1dc25?w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      'https://images.unsplash.com/photo-1503614442490-3f931c8e3865?w=800'
    ],
    createdAt: new Date('2024-04-01')
  },
  {
    id: '8',
    title: 'استشارة تربية الدواجن',
    description: 'استشارات متخصصة في تربية الدواجن وإدارة المزارع',
    category: 'consultancy',
    provider: {
      name: 'د. سلمى الفارز',
      rating: 4.9,
      completedServices: 150
    },
    price: 250,
    unit: 'hour',
    location: 'عن بعد',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1559839919-d707c9e0c27d?w=800',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    createdAt: new Date('2024-04-10')
  }
];

export const mockProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'شركة الزراعة الحديثة',
    email: 'info@modernfarm.com',
    phone: '0112345678',
    services: ['machinery'],
    rating: 4.9,
    completedServices: 150,
    location: 'الرياض',
    verified: true
  },
  {
    id: '2',
    name: 'مركز الري المتقدم',
    email: 'contact@advancedirrigation.com',
    phone: '0119876543',
    services: ['irrigation'],
    rating: 4.8,
    completedServices: 200,
    location: 'القصيم',
    verified: true
  },
  {
    id: '3',
    name: 'النقل السريع',
    email: 'info@quicktransport.com',
    phone: '0115566778',
    services: ['logistics'],
    rating: 4.7,
    completedServices: 180,
    location: 'جدة',
    verified: true
  },
  {
    id: '4',
    name: 'د. أحمد الزراع',
    email: 'dr.ahmed@agri.com',
    phone: '0501234567',
    services: ['consultancy'],
    rating: 5.0,
    completedServices: 90,
    location: 'الرياض',
    verified: true
  }
];