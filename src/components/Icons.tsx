import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

const defaultProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Car = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 13v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

export const Shield = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

export const ShieldCheck = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Check = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CheckCircle2 = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const X = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Sparkles = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

export const Search = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Globe = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const Headphones = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

export const User = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Menu = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const ChevronDown = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeft = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ArrowLeft = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const ArrowUp = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

export const HeartPulse = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

export const CreditCard = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

export const Stethoscope = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export const Home = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const Plane = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

export const Truck = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

export const Wallet = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

export const Lock = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const FileText = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

export const AlertCircle = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const Tag = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);

export const ShoppingBag = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const Trophy = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const Flame = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

export const HeartHandshake = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="m11 14 2 2 4-4" />
  </svg>
);

export const Percent = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <line x1="19" x2="5" y1="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const Award = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

export const Building2 = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export const HelpCircle = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

export const LayoutGrid = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

export const Eye = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Network = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </svg>
);

export const Smartphone = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const Bell = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const Zap = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Star = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Download = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const Gift = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export const Printer = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect width="12" height="8" x="6" y="14" />
  </svg>
);

export const Phone = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Heart = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const Share2 = ({ size, ...props }: IconProps) => (
  <svg {...defaultProps} width={size || props.width || 24} height={size || props.height || 24} {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);
