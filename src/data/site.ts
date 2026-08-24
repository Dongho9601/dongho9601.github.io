export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

const cvUrl =
  'https://docs.google.com/document/d/1P-iO7GcV41mg2lXqOPFTjrHO563jmLA_0MYGRonvLfQ/edit?usp=sharing';

export const siteConfig = {
  title: 'Dongho Ha',
  subtitle: 'Computer Architect',
  description:
    'Dongho Ha is a Computer Architect and ASIC Engineer at Meta, specializing in GPU architectures, domain-specific accelerators, and computing resource efficiency.',
  author: 'Dongho Ha',
  authorFormal: 'Dongho (Lucas) Ha',
  role: 'Computer Architect',
  company: 'Meta (Infra Silicon Team)',
  location: 'Pacific Time Zone',
  email: 'dongho9601@gmail.com',
  siteUrl: 'https://dongho9601.github.io',
  avatar: '/images/profile.jpg',
  resumeUrl: cvUrl,

  navItems: [
    { label: 'Dongho Ha', href: '/' },
    { label: 'Publications', href: '/publications' },
    { label: 'Writing', href: '/writing' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ] as NavItem[],

  socials: [
    {
      name: 'Google Scholar',
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=PmEs4dMAAAAJ&hl=ko',
      icon: 'scholar',
    },
    {
      name: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/Dongho9601',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dongho-ha-910129176',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      label: 'Email',
      url: 'mailto:dongho9601@gmail.com',
      icon: 'mail',
    },
    {
      name: 'CV',
      label: 'CV',
      url: cvUrl,
      icon: 'document',
    },
  ] as SocialLink[],
};
