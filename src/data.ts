import React from 'react';
import { 
  Monitor, 
  Camera, 
  Wifi, 
  HardDrive, 
  Printer, 
  Shield,
  Cpu,
  Settings
} from 'lucide-react';
import { Product, Service, Testimonial } from './types';

// Categories for products
export const categories = [
  'Desktop Computers',
  'Laptops',
  'CCTV & Security',
  'Accessories',
  'Networking',
  'Storage',
  'Printers & Scanners'
];

// Featured Computers
export const featuredComputers: Product[] = [
  {
    id: 'pc-001',
    name: 'Pro Gaming Desktop i7',
    description: 'High-performance gaming desktop with Intel Core i7, 16GB RAM, 1TB SSD, and dedicated graphics.',
    price: 75000,
    oldPrice: 82000,
    category: 'Desktop Computers',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    inStock: true,
    features: [
      'Intel Core i7 12th Gen Processor',
      '16GB DDR4 RAM',
      '1TB NVMe SSD',
      'NVIDIA RTX 3060 8GB Graphics',
      'Windows 11 Home',
      'RGB Lighting'
    ],
    specifications: [
      {name: 'Processor', value: 'Intel Core i7-12700 (12 Cores, up to 4.9GHz)'},
      {name: 'Memory', value: '16GB DDR4 3200MHz (2x8GB)'},
      {name: 'Storage', value: '1TB NVMe SSD'},
      {name: 'Graphics', value: 'NVIDIA GeForce RTX 3060 8GB GDDR6'},
      {name: 'Operating System', value: 'Windows 11 Home 64-bit'},
      {name: 'Power Supply', value: '650W 80+ Gold'},
      {name: 'Connectivity', value: 'WiFi 6, Bluetooth 5.2, Gigabit Ethernet'},
      {name: 'Case', value: 'Mid Tower ATX with Tempered Glass'},
      {name: 'Warranty', value: '2 Years Onsite'}
    ]
  },
  {
    id: 'pc-002',
    name: 'Business Desktop i5',
    description: 'Reliable business desktop with Intel Core i5, 8GB RAM, and 512GB SSD for productivity and everyday use.',
    price: 45000,
    category: 'Desktop Computers',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    inStock: true,
    features: [
      'Intel Core i5 12th Gen Processor',
      '8GB DDR4 RAM',
      '512GB NVMe SSD',
      'Intel UHD Graphics',
      'Windows 11 Pro',
      'Compact Design'
    ],
    specifications: [
      {name: 'Processor', value: 'Intel Core i5-12400 (6 Cores, up to 4.4GHz)'},
      {name: 'Memory', value: '8GB DDR4 3200MHz (2x4GB)'},
      {name: 'Storage', value: '512GB NVMe SSD'},
      {name: 'Graphics', value: 'Intel UHD Graphics 730'},
      {name: 'Operating System', value: 'Windows 11 Pro 64-bit'},
      {name: 'Power Supply', value: '400W 80+ Bronze'},
      {name: 'Connectivity', value: 'WiFi 6, Bluetooth 5.0, Gigabit Ethernet'},
      {name: 'Case', value: 'Micro-ATX Tower'},
      {name: 'Warranty', value: '3 Years Limited'}
    ]
  },
  {
    id: 'laptop-001',
    name: 'UltraBook Pro 14"',
    description: 'Ultra-thin and lightweight laptop with 14" FHD display, perfect for professionals on the go.',
    price: 65000,
    oldPrice: 72000,
    category: 'Laptops',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    inStock: true,
    features: [
      'Intel Core i7 11th Gen Processor',
      '16GB LPDDR4X RAM',
      '512GB NVMe SSD',
      '14" Full HD IPS Display',
      'Backlit Keyboard',
      'Fingerprint Reader'
    ],
    specifications: [
      {name: 'Processor', value: 'Intel Core i7-1165G7 (4 Cores, up to 4.7GHz)'},
      {name: 'Memory', value: '16GB LPDDR4X (Soldered)'},
      {name: 'Storage', value: '512GB M.2 PCIe NVMe SSD'},
      {name: 'Display', value: '14" FHD (1920x1080) IPS, 300 nits, Anti-glare'},
      {name: 'Graphics', value: 'Intel Iris Xe Graphics'},
      {name: 'Battery', value: '56Wh, up to 12 hours'},
      {name: 'Weight', value: '1.3 kg'},
      {name: 'Operating System', value: 'Windows 11 Home'},
      {name: 'Warranty', value: '1 Year Carry-in'}
    ]
  },
  {
    id: 'acc-001',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical gaming keyboard with customizable keys and macro support.',
    price: 5000,
    oldPrice: 6500,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg',
    inStock: true,
    features: [
      'Blue Mechanical Switches',
      'Per-Key RGB Backlighting',
      'Programmable Macro Keys',
      'Anti-Ghosting',
      'Durable Aluminum Frame',
      'Detachable Wrist Rest'
    ],
    specifications: [
      {name: 'Switch Type', value: 'Blue Mechanical Switches'},
      {name: 'Lighting', value: 'RGB with 16.8 million colors'},
      {name: 'Connection', value: 'USB 2.0'},
      {name: 'Cable Length', value: '1.8m Braided Cable'},
      {name: 'Dimensions', value: '44.5 x 14.0 x 3.5 cm'},
      {name: 'Weight', value: '1.1 kg'},
      {name: 'Compatibility', value: 'Windows 7/8/10/11, MacOS'},
      {name: 'Warranty', value: '2 Years Limited'}
    ]
  }
];

// Featured CCTV
export const featuredCCTV: Product[] = [
  {
    id: 'cctv-001',
    name: '4 Camera HD CCTV Security System',
    description: 'Complete 4 camera security system with HD resolution, night vision, and 1TB storage for home or small business.',
    price: 25000,
    category: 'CCTV & Security',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    inStock: true,
    features: [
      '4 HD (1080p) Security Cameras',
      'Night Vision up to 20m',
      '4 Channel DVR with 1TB HDD',
      'Motion Detection',
      'Mobile App Viewing',
      'Weather Resistant Cameras'
    ],
    specifications: [
      {name: 'Camera Resolution', value: '1080p Full HD'},
      {name: 'Night Vision', value: 'IR LEDs, up to 20 meters'},
      {name: 'DVR', value: '4 Channel H.264+ Compression'},
      {name: 'Storage', value: '1TB Surveillance HDD (expandable to 6TB)'},
      {name: 'Motion Detection', value: 'Yes, with push notifications'},
      {name: 'Remote Access', value: 'Mobile App & Web Interface'},
      {name: 'Camera Housing', value: 'IP66 Weather Resistant'},
      {name: 'Power', value: '12V DC, Power Adapter Included'},
      {name: 'Warranty', value: '2 Years with Installation'}
    ]
  },
  {
    id: 'cctv-002',
    name: '8 Camera 4K Ultra HD Security System',
    description: 'Professional 8 camera security system with 4K Ultra HD resolution, advanced motion detection, and 4TB storage.',
    price: 55000,
    oldPrice: 65000,
    category: 'CCTV & Security',
    image: 'https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg',
    inStock: true,
    features: [
      '8 Ultra HD (4K) Security Cameras',
      'Advanced Night Vision up to 30m',
      '8 Channel NVR with 4TB HDD',
      'AI-Based Motion Detection',
      'Person & Vehicle Recognition',
      'IP67 Weatherproof Cameras'
    ],
    specifications: [
      {name: 'Camera Resolution', value: '8MP (4K Ultra HD)'},
      {name: 'Night Vision', value: 'IR LEDs, up to 30 meters'},
      {name: 'NVR', value: '8 Channel H.265+ Compression'},
      {name: 'Storage', value: '4TB Surveillance HDD (expandable to 12TB)'},
      {name: 'Motion Detection', value: 'AI-based with person & vehicle recognition'},
      {name: 'Remote Access', value: 'Mobile App & Web Interface'},
      {name: 'Camera Housing', value: 'IP67 Weatherproof'},
      {name: 'Power', value: 'PoE (Power over Ethernet)'},
      {name: 'Warranty', value: '3 Years with Installation'}
    ]
  },
  {
    id: 'cctv-003',
    name: 'Wireless Home Security Camera',
    description: 'Easy-to-install wireless security camera with two-way audio, motion detection, and cloud storage.',
    price: 3500,
    category: 'CCTV & Security',
    image: 'https://images.pexels.com/photos/4300394/pexels-photo-4300394.jpeg',
    inStock: false,
    features: [
      '1080p Full HD Resolution',
      'Two-Way Audio',
      'Motion Detection Alerts',
      'Night Vision',
      'Cloud & SD Card Storage',
      'Easy WiFi Setup'
    ],
    specifications: [
      {name: 'Resolution', value: '1080p Full HD'},
      {name: 'Field of View', value: '130° Wide Angle'},
      {name: 'Audio', value: 'Two-Way with Noise Reduction'},
      {name: 'Night Vision', value: 'Up to 10 meters'},
      {name: 'Storage', value: 'Cloud (7-day free) & MicroSD (up to 128GB)'},
      {name: 'Power', value: 'AC Adapter (Included)'},
      {name: 'Connectivity', value: '2.4GHz WiFi'},
      {name: 'Mounting', value: 'Table Mount & Wall Mount'},
      {name: 'Warranty', value: '1 Year Limited'}
    ]
  },
  {
    id: 'cctv-004',
    name: 'Video Doorbell with Camera',
    description: 'Smart doorbell with HD camera, motion detection, and two-way talk. See and speak to visitors from your phone.',
    price: 8000,
    oldPrice: 9500,
    category: 'CCTV & Security',
    image: 'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg',
    inStock: true,
    features: [
      'HD Video Quality',
      'Two-Way Talk',
      'Motion Detection',
      'Night Vision',
      'Cloud Recording',
      'Mobile App Control'
    ],
    specifications: [
      {name: 'Video', value: '1080p HD with HDR'},
      {name: 'Field of View', value: '155° Horizontal, 90° Vertical'},
      {name: 'Motion Detection', value: 'Advanced with Customizable Zones'},
      {name: 'Audio', value: 'Two-Way Talk with Noise Cancellation'},
      {name: 'Power', value: 'Built-in Rechargeable Battery or Hardwired'},
      {name: 'Connectivity', value: '2.4GHz or 5GHz WiFi'},
      {name: 'Weather Resistance', value: 'IP65 Rating'},
      {name: 'Storage', value: 'Cloud (30-day subscription included)'},
      {name: 'Warranty', value: '1 Year Limited'}
    ]
  }
];

// All Products
export const allProducts: Product[] = [
  ...featuredComputers, 
  ...featuredCCTV,
  {
    id: 'laptop-002',
    name: 'Business Laptop 15.6"',
    description: 'Professional laptop with 15.6" display, SSD storage, and long battery life for business users.',
    price: 52000,
    category: 'Laptops',
    image: 'https://images.pexels.com/photos/5474293/pexels-photo-5474293.jpeg',
    inStock: true,
    features: [
      'Intel Core i5 11th Gen Processor',
      '8GB DDR4 RAM',
      '512GB SSD',
      '15.6" Full HD Display',
      'Windows 11 Pro',
      'Fingerprint Reader'
    ]
  },
  {
    id: 'laptop-003',
    name: 'Student Laptop 14"',
    description: 'Affordable and lightweight laptop perfect for students and everyday computing tasks.',
    price: 35000,
    category: 'Laptops',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    inStock: true,
    features: [
      'Intel Core i3 10th Gen Processor',
      '4GB DDR4 RAM',
      '256GB SSD',
      '14" HD Display',
      'Windows 11 Home',
      'Lightweight Design'
    ]
  },
  {
    id: 'storage-001',
    name: '2TB External Hard Drive',
    description: 'Portable 2TB external hard drive for backup and storage with USB 3.0 for fast transfers.',
    price: 5500,
    category: 'Storage',
    image: 'https://images.pexels.com/photos/14679592/pexels-photo-14679592.jpeg',
    inStock: true,
    features: [
      '2TB Storage Capacity',
      'USB 3.0 Interface',
      'Compact Design',
      'Plug and Play',
      'Compatible with Windows & Mac',
      'Automatic Backup Software'
    ]
  },
  {
    id: 'networking-001',
    name: 'Dual-Band WiFi Router',
    description: 'High-performance dual-band WiFi router with extensive coverage for home or small office.',
    price: 3200,
    oldPrice: 3800,
    category: 'Networking',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    inStock: true,
    features: [
      'Dual-Band AC1200 Technology',
      '5GHz & 2.4GHz Bands',
      '4 High-Gain Antennas',
      'Gigabit Ethernet Ports',
      'Easy Setup',
      'Parental Controls'
    ]
  },
  {
    id: 'printer-001',
    name: 'All-in-One Inkjet Printer',
    description: 'Versatile all-in-one printer with printing, scanning, and copying capabilities.',
    price: 8500,
    category: 'Printers & Scanners',
    image: 'https://images.pexels.com/photos/4219937/pexels-photo-4219937.jpeg',
    inStock: false,
    features: [
      'Print, Scan, Copy Functions',
      'Wireless Printing',
      'Mobile Device Compatible',
      'Automatic Document Feeder',
      'Duplex Printing',
      'Color Touchscreen'
    ]
  },
  {
    id: 'acc-002',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.',
    price: 2500,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/1035074/pexels-photo-1035074.jpeg',
    inStock: true,
    features: [
      '16000 DPI Optical Sensor',
      'RGB Lighting',
      'Programmable Buttons',
      'Rechargeable Battery',
      'Ultra-Low Latency',
      'Lightweight Design'
    ]
  },
  {
    id: 'acc-003',
    name: 'Noise-Cancelling Headphones',
    description: 'Over-ear wireless headphones with active noise cancellation for immersive audio experience.',
    price: 12000,
    oldPrice: 15000,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
    inStock: true,
    features: [
      'Active Noise Cancellation',
      'Bluetooth 5.0 Connectivity',
      'Up to 30 Hours Battery Life',
      'Fast Charging',
      'Built-in Microphone',
      'Foldable Design'
    ]
  }
];

// Services
export const services: Service[] = [
  {
    id: 'service-001',
    title: 'Computer Sales & Repair',
    description: 'We offer a wide range of computers and provide expert repair services for all brands and models.',
    icon: Monitor,
    image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
    features: [
      'New & refurbished computer sales',
      'Hardware repair and upgrades',
      'Virus removal and data recovery',
      'Software installation and configuration',
      'System optimization',
      'Free diagnostic assessment'
    ]
  },
  {
    id: 'service-002',
    title: 'CCTV Installation',
    description: 'Secure your home or business with our professional CCTV installation and monitoring services.',
    icon: Camera,
    image: 'https://images.pexels.com/photos/3205736/pexels-photo-3205736.jpeg',
    features: [
      'Custom security system design',
      'Professional installation',
      'HD and 4K camera options',
      'Remote viewing setup',
      'Motion detection configuration',
      'Maintenance and support'
    ]
  },
  {
    id: 'service-003',
    title: 'Networking Solutions',
    description: 'We design, install, and maintain reliable network infrastructure for homes and businesses.',
    icon: Wifi,
    image: 'https://images.pexels.com/photos/359948/pexels-photo-359948.jpeg',
    features: [
      'WiFi network setup and optimization',
      'Wired network installation',
      'Network security implementation',
      'Router and access point configuration',
      'Network troubleshooting',
      'Network expansion and upgrades'
    ]
  },
  {
    id: 'service-004',
    title: 'Data Backup & Recovery',
    description: 'Protect your valuable data with our backup solutions and recover lost data with our expert recovery services.',
    icon: HardDrive,
    image: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg',
    features: [
      'Automated backup solutions',
      'Cloud backup implementation',
      'Data recovery from damaged media',
      'Disaster recovery planning',
      'Secure data destruction',
      'Data migration services'
    ]
  },
  {
    id: 'service-005',
    title: 'Printer Services',
    description: 'We offer printer sales, repair, and maintenance services to ensure your printing needs are always met.',
    icon: Printer,
    image: 'https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg',
    features: [
      'Printer sales and installation',
      'Ink and toner supplies',
      'Printer repair and maintenance',
      'Network printer setup',
      'Print optimization',
      'Bulk printing services'
    ]
  },
  {
    id: 'service-006',
    title: 'IT Security',
    description: 'Protect your digital assets with our comprehensive IT security solutions and services.',
    icon: Shield,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    features: [
      'Antivirus and anti-malware solutions',
      'Firewall setup and management',
      'Security audits and assessments',
      'VPN implementation',
      'Email security',
      'Employee security training'
    ]
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    name: 'Rajiv Sharma',
    title: 'Small Business Owner',
    content: 'Excellent Computers installed a complete CCTV system at my shop. Their team was professional, and the quality of service was outstanding. Highly recommended!',
    rating: 5
  },
  {
    id: 'testimonial-002',
    name: 'Priya Gupta',
    title: 'College Student',
    content: 'I bought a laptop for my studies, and the team provided excellent guidance within my budget. The after-sales support has been great too!',
    rating: 4
  },
  {
    id: 'testimonial-003',
    name: 'Anand Verma',
    title: 'School Principal',
    content: 'We\'ve been working with Excellent Computers for our school computer lab maintenance for three years now. Their service is prompt and reliable every time.',
    rating: 5
  }
];