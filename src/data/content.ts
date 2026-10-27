export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'features' | 'permissions' | 'troubleshooting' | 'safety';
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  details: string[];
  status: 'Available' | 'Configurable' | 'System-Dependent';
}

export const APP_CONFIG = {
  appName: 'AG Rider',
  tagline: 'Fast, Focused and Ready for Every Ride',
  subTagline: 'Ride Assistance, Designed Around You',
  domain: 'agrider.pro',
  siteUrl: 'https://agrider.pro',
  version: '2.4.1',
  apkSize: '83.1 MB',
  minAndroid: 'Android 8.0 (Oreo) or later',
  releaseDate: 'July 2026',
  downloadFileName: 'app-debug.apk',
  downloadPath: '/downloads/app-debug.apk',
  sha256: 'cb5401e5102364fba97c4550fb530bc665fe863d6a40303477c6bd3bf8d22672',
  supportEmail: 'support@agrider.pro',
  adminEmail: 'info.praisol@gmail.com',
  telegramHandle: '@agrider_support',
  policyUpdateDate: '28 July 2026',
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'otp-signin',
    title: 'Mobile OTP Authentication',
    tagline: 'Fast, passwordless, and secure driver sign-in',
    description: 'Driver authentication powered by quick SMS verification code. No complex passwords to remember while on duty.',
    iconName: 'Smartphone',
    details: [
      'Enter 10-digit registered mobile number',
      'Instant SMS OTP verification',
      'Optional referral code entry on onboarding',
      'Preserves driver profile preferences across sessions'
    ],
    status: 'Available'
  },
  {
    id: 'ride-deck',
    title: 'Ride Deck Command Center',
    tagline: 'Clean dashboard with real-time driver metrics',
    description: 'The central cockpit view giving eligible drivers full visibility into assistant status, session counters, and active filters.',
    iconName: 'LayoutDashboard',
    details: [
      'Instant Assistant status toggle (Active / Standby)',
      'Accepted ride session counter',
      'Last tap latency and response monitor',
      'Direct shortcut to filter thresholds'
    ],
    status: 'Available'
  },
  {
    id: 'fare-filters',
    title: 'Configurable Fare Filters',
    tagline: 'Focus exclusively on rides that match your earning goals',
    description: 'Set custom Minimum and Maximum fare thresholds. The assistant prioritizes offers within your desired payout parameters.',
    iconName: 'CircleDollarSign',
    details: [
      'Adjustable Minimum Fare slider',
      'Adjustable Maximum Fare limit',
      'Zero value disables the filter restriction',
      'Instant real-time evaluation of incoming offers'
    ],
    status: 'Available'
  },
  {
    id: 'distance-filters',
    title: 'Pickup & Drop Distance Limits',
    tagline: 'Eliminate unprofitable deadhead travel and excessive pickups',
    description: 'Three distinct distance controls ensure you only accept rides within your preferred geographical radius.',
    iconName: 'MapPin',
    details: [
      'Minimum pickup distance limit',
      'Maximum pickup radius threshold',
      'Maximum trip drop distance cap',
      'Protects drivers from unexpected long-distance deadheads'
    ],
    status: 'Available'
  },
  {
    id: 'accessibility-assist',
    title: 'Android Accessibility Service',
    tagline: 'Engineered specifically for drivers requiring assistive interaction',
    description: 'Assists eligible drivers experiencing motor, coordination, or situational difficulties to trigger on-screen Accept controls reliably.',
    iconName: 'Accessibility',
    details: [
      'Android Accessibility API integration',
      'Helps when vibrations or glare hinder manual tapping',
      'Configurable response delay (0ms to custom delay)',
      'Strictly local on-device UI inspection'
    ],
    status: 'System-Dependent'
  },
  {
    id: 'battery-performance',
    title: 'Battery & Background Optimization',
    tagline: 'Uninterrupted responsiveness through active shifts',
    description: 'Clear system guidance helping drivers configure Android power management so foreground assistive overlays remain responsive.',
    iconName: 'BatteryCharging',
    details: [
      'In-app Android battery whitelist guidance',
      'Prevents background app freezes during rides',
      'Low CPU footprint engineered for low-spec phones',
      'Optimized memory usage without heating devices'
    ],
    status: 'Configurable'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is AG Rider?',
    answer: 'AG Rider is an Android accessibility assistance application engineered for eligible professional drivers who experience motor, coordination, visual, or situational interaction difficulties while operating ride-request screens.',
    category: 'general'
  },
  {
    question: 'Who is AG Rider designed for?',
    answer: 'AG Rider is designed for professional commercial drivers who need assistive touch help—such as drivers with motor or tremors, coordination challenges, or those navigating high-vibration motorcycle mounts where pressing small on-screen accept buttons in time is difficult.',
    category: 'general'
  },
  {
    question: 'How do I download and install the AG Rider APK?',
    answer: `Click the "Download APK" button on this website to save the latest ${APP_CONFIG.downloadFileName} file. Open your Android notification panel or file manager, tap the downloaded APK, and allow "Install from unknown sources" if prompted by your Android security settings.`,
    category: 'troubleshooting'
  },
  {
    question: 'Does AG Rider work with Rapido and Ola?',
    answer: 'AG Rider includes assistive interface support that references interfaces like Rapido and Ola for accessibility button interaction. However, AG Rider is an independent utility and is NOT affiliated with, sponsored by, or endorsed by Rapido, Ola, or any ride platform.',
    category: 'general'
  },
  {
    question: 'Why does AG Rider require Android Accessibility Service access?',
    answer: 'The Accessibility Service permission enables the app to detect incoming ride request popups and assist eligible users in activating the "Accept" control when physical tapping is delayed or hindered. The app does NOT read your personal chats, photos, or passwords.',
    category: 'permissions'
  },
  {
    question: 'How do Fare Filters work?',
    answer: 'In the app settings, you can define Minimum Fare and Maximum Fare amounts. When an offer appears, AG Rider evaluates the displayed fare and applies your configured preference so you only focus on offers meeting your criteria.',
    category: 'features'
  },
  {
    question: 'How do Pickup and Drop distance filters operate?',
    answer: 'You can configure three independent distance parameters: Minimum Pickup Distance, Maximum Pickup Distance, and Maximum Drop Distance. Setting a value to 0 disables that specific filter limit.',
    category: 'features'
  },
  {
    question: 'Why is the assistant showing as disabled or paused?',
    answer: 'The assistant will display as disabled if: (1) Android Accessibility Service is toggled off in device settings, (2) you manually tapped the Pause/Stop control on the Ride Deck, or (3) Android power saving terminated the background service.',
    category: 'troubleshooting'
  },
  {
    question: 'Why is battery optimization guidance provided?',
    answer: 'Aggressive battery savers on brands like Xiaomi, Realme, Samsung, and OnePlus frequently kill background accessibility services after a few minutes. AG Rider guides you to exclude it from battery optimizations to ensure continuous operation.',
    category: 'troubleshooting'
  },
  {
    question: 'Does AG Rider guarantee more rides or higher earnings?',
    answer: 'No. AG Rider is an accessibility assistance tool, not an earnings guarantee system. Ride frequency depends strictly on platform demand, passenger requests, city area, and the driver’s platform rating.',
    category: 'safety'
  },
  {
    question: 'How can I revoke Accessibility or other permissions?',
    answer: 'You can revoke permissions at any time: open Android Settings → Accessibility → Installed Apps / AG Rider → toggle OFF. You can also uninstall the app anytime via Android App Info.',
    category: 'permissions'
  },
  {
    question: 'How does AG Rider handle my personal data and privacy?',
    answer: 'AG Rider processes only the minimum data required for authentication (mobile number). Preferences and ride history are stored locally on your device. We do not sell your personal data or read unrelated messages.',
    category: 'safety'
  },
  {
    question: 'How can I contact technical support?',
    answer: 'You can reach out through our Contact page form or directly message our official support channels via support@agrider.app and Telegram @agrider_support.',
    category: 'general'
  }
];
