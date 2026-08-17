export interface Experience {
  role: string;
  company: string;
  team?: string;
  period: string;
  location?: string;
  link?: string;
  details?: string;
}

export interface Education {
  degree: string;
  institution: string;
  advisor?: string;
  period: string;
  dissertation?: string;
  details?: string;
}

export interface IndustryProject {
  title: string;
  organization: string;
  period: string;
  patentUrl?: string;
}

export interface ServiceItem {
  category: string;
  items: {
    role: string;
    venueOrDetails: string;
    yearOrCount: string;
    link?: string;
  }[];
}

export interface Funding {
  title: string;
  amount: string;
}

export interface Collaborator {
  name: string;
  link?: string;
  affiliation?: string;
}

export const bioSummary = `I completed my Ph.D. at Yonsei University, Korea (Advisor: Professor Won Woo Ro), with a dissertation titled “GPU Architecture Design for Effective Computing Resource Usage.” My expertise spans the design of computer architectures—from general-purpose to domain-specific processors—with a focus on optimizing computing and memory resource utilization.

My research has centered on improving GPU resource efficiency, accelerating matrix computations, and democratizing domain-specific accelerators. To broaden my expertise from microarchitecture to system-level design, I worked as a system architect at MangoBoost Inc., where I explored SmartNICs to enhance DPUs. Currently, I am working at Meta as an ASIC engineer on the Infra Silicon team, further advancing my experience in cutting-edge chip design and large-scale hardware systems.`;

export const experiences: Experience[] = [
  {
    role: 'ASIC Engineer',
    company: 'Meta',
    team: 'Infra Silicon Team',
    period: 'July 2025 — Present',
    link: 'https://about.meta.com/',
    details: 'Mid-level (July 2025 – July 2026) · Senior (Aug 2026 – Present)',
  },
  {
    role: 'System Architect',
    company: 'Mangoboost',
    team: 'RDMA',
    period: 'July 2024 — March 2025',
    link: 'https://www.mangoboost.io/',
  },
  {
    role: 'Junior Specialist',
    company: 'University of California, Riverside',
    team: 'ESCA Lab (Advisor: Prof. Hung-Wei Tseng)',
    period: 'Sep 2023 — Dec 2023',
    link: 'https://www.escalab.org/#people',
  },
];

export const educations: Education[] = [
  {
    degree: 'Ph.D. in Electrical and Electronic Engineering',
    institution: 'Yonsei University, Seoul, Korea',
    advisor: 'Prof. Won Woo Ro',
    period: 'March 2021 — August 2024',
    dissertation: 'GPU Architecture Design for Effective Computing Resource Usage',
  },
  {
    degree: 'M.S. in Electrical and Electronic Engineering',
    institution: 'Yonsei University, Seoul, Korea',
    advisor: 'Prof. Won Woo Ro',
    period: 'March 2019 — February 2021',
  },
  {
    degree: 'B.S. in Electrical and Electronic Engineering',
    institution: 'Yonsei University, Seoul, Korea',
    period: 'March 2014 — February 2019',
  },
];

export const industryProjects: IndustryProject[] = [
  {
    title: 'Study on Memory Sub-System Architecture for Hyper-Scale AI Training',
    organization: 'SK Hynix',
    period: '2024',
  },
  {
    title: 'Development of PIM Software Architecture based on Data-Flow Computing',
    organization: 'Korea Government (IITP)',
    period: '2024',
  },
  {
    title: 'Analysis and Development of GPU Architecture for HPC Workloads',
    organization: 'Samsung (SAIT)',
    period: '2021 — 2022',
    patentUrl: 'https://patents.google.com/patent/US20230385025A1/en',
  },
  {
    title: 'Development of Data Center Many-core NPU Architecture and Memory Interface',
    organization: 'Samsung',
    period: '2019 — 2020',
  },
  {
    title: 'Development of CPU-GPU Heterogeneous Computing Simulation Environment',
    organization: 'SK Hynix',
    period: '2019 — 2020',
  },
  {
    title: 'Development of Identification Data Processing Technology for On-site Officers',
    organization: 'Korea Government (Korea National Police Agency)',
    period: '2018 — 2023',
  },
  {
    title: 'Development of Multi-GPU Based High Speed Ray-Tracing Engine',
    organization: 'Samsung',
    period: '2017 — 2018',
  },
];

export const serviceCommittees = [
  {
    role: 'Program / Review Committee',
    venue: 'International Symposium on Microarchitecture (MICRO)',
    years: '2025, 2026',
  },
  {
    role: 'Program Committee',
    venue: 'Workshop on General Purpose Processing using GPUs (GPGPU)',
    years: '2025',
  },
  {
    role: 'Visiting Scholar',
    venue: 'University of California, Riverside (Advisor: Prof. Hung-Wei Tseng)',
    years: '2022 — 2023',
    link: 'https://www.escalab.org/#people',
  },
  {
    role: 'Teaching Assistant',
    venue: 'EEE3530: Computer Architecture (Yonsei University)',
    years: 'Spring 2021',
  },
  {
    role: 'Teaching Assistant',
    venue: 'EEE4473: Embedded System Lab (Yonsei University)',
    years: 'Spring 2020',
  },
];

export const journalReviews = [
  { journal: 'IEEE Computer Architecture Letters (CAL)', count: '×8' },
  { journal: 'ACM Transactions on Architecture and Code Optimization (TACO)', count: '×3' },
  { journal: 'Parallel Computing (PC)', count: '×3' },
  { journal: 'IEEE Transactions on Emerging Topics in Computing (TETC)', count: '×2' },
];

export const fundings: Funding[] = [
  { title: 'BK21 FOUR Project Scholarship', amount: '23,800,000 KRW' },
  { title: 'External Scholarship', amount: '11,400,000 KRW' },
  { title: 'Teaching Assistant Scholarship', amount: '3,716,000 KRW' },
  { title: 'Research Assistance Scholarship', amount: '3,000,000 KRW' },
];

export const languages = [
  { language: 'Korean', proficiency: 'Native' },
  { language: 'English', proficiency: 'Professional' },
];

export const personalInterests = [
  {
    name: 'Gaming',
    link: 'https://steamcommunity.com/profiles/76561198274843283',
    label: 'Steam Profile',
  },
  {
    name: 'Photography',
    link: 'https://www.instagram.com/in_da_sqr',
    label: '@in_da_sqr on Instagram',
  },
  {
    name: 'Technical Writing & Blogging',
    link: '/writing',
    label: 'Writing Archive',
  },
];

export const collaborators: Collaborator[] = [
  { name: 'Won Woo Ro', link: 'http://escal.yonsei.ac.kr/professor.html', affiliation: 'Yonsei University' },
  { name: 'Yunho Oh', link: 'https://yunho-oh.github.io/', affiliation: 'Korea University' },
  { name: 'Hung-Wei Tseng', link: 'https://intra.engr.ucr.edu/~htseng/', affiliation: 'UC Riverside' },
  { name: 'Babak Falsafi', link: 'https://parsa.epfl.ch/~falsafi/', affiliation: 'EPFL' },
  { name: 'Tor M. Aamodt', link: 'https://people.ece.ubc.ca/aamodt/', affiliation: 'UBC' },
  { name: 'Murali Annavaram', link: 'https://realai.usc.edu/', affiliation: 'USC' },
  { name: 'Yufei Ding', link: 'https://jacobsschool.ucsd.edu/people/profile/Yufei-Ding', affiliation: 'UCSD' },
  { name: 'Gwanjong Park', link: 'https://kr.linkedin.com/in/gwanjong-park-3a1107287' },
  { name: 'Osama Khan', link: 'http://csl.skku.edu/People/OKhan' },
  { name: 'Myeongjae Jeon', link: 'https://sites.google.com/site/myeongjae/' },
  { name: 'Euiseong Seo', link: 'http://csl.skku.edu/People/Euiseong' },
  { name: 'Seunghyun Lee', link: 'https://www.linkedin.com/in/seunghyun-lee-a02064346/?originalSubdomain' },
  { name: 'Sungbin Kim', link: 'https://scholar.google.com/citations?user=K1HoL1MAAAAJ&hl=en' },
  { name: 'Sungwoo Kim', link: 'https://kr.linkedin.com/in/sungwoo-2kim' },
  { name: 'Hyunwuk Lee', link: 'https://hyunwuklee0519.github.io/' },
  { name: 'Minseong Gil', link: 'https://www.linkedin.com/in/minseong-gil-76a059365/?originalSubdomain' },
  { name: 'Simla Burcu Harma', link: 'https://sites.google.com/view/simla-burcu-harma/home' },
  { name: 'Myung Kuk Yoon', link: 'https://myungkuk.com' },
  { name: 'Ayan Chakraborty', link: 'https://www.linkedin.com/in/ayanchak' },
  { name: 'Elizaveta Kostenok', link: 'https://ch.linkedin.com/in/elizaveta-kostenok-202005312' },
  { name: 'Danila Mishin', link: 'https://ch.linkedin.com/in/danmishin' },
  { name: 'Martin Jaggi', link: 'https://people.epfl.ch/martin.jaggi' },
  { name: 'Ming Liu', link: 'https://pages.cs.wisc.edu/~mgliu/' },
  { name: 'Suvinay Subramanian', link: 'https://people.csail.mit.edu/suvinay/' },
  { name: 'Amir Yazdanbakhsh', link: 'https://www.ayazdan.com/' },
  { name: 'Yunan Zhang', link: 'https://www.linkedin.com/in/yunandrewzhang' },
  { name: 'Chen-Chien Kao', link: 'https://www.linkedin.com/in/chen-chien-kao-2a2038283' },
  { name: 'Christopher J. Hughes', link: 'https://scholar.google.com/citations?user=DH-T2h46j_oC&hl' },
  { name: 'Lufei Liu', link: 'https://www.lufei.ca/' },
  { name: 'Yuan Hsi Chou', link: 'https://www.linkedin.com/in/tommy-chou/' },
  { name: 'Seokjin Go', link: 'https://seokjin-go.notion.site/' },
  { name: 'Enhyeok Jang', link: 'https://enhyeok.notion.site/enhyeok/Enhyeok-Jang-9f594ec32719477fa5ab8cf0f517a642' },
  { name: 'Seungwoo Choi', link: 'https://www.linkedin.com/in/seungwoo-choi-560947245/' },
  { name: 'Youngmin Kim', link: 'https://scholar.google.com/citations?user=Esdp944AAAAJ&hl' },
  { name: 'Yongju Lee', link: 'https://scholar.google.com/citations?user=x8inNl8AAAAJ&hl' },
  { name: 'Sungwoo Ahn', link: 'https://www.linkedin.com/in/sungwoo-ahn-311875176/' },
  { name: 'Hyungseok Kim', link: 'https://fluorite42.github.io/' },
  { name: 'Seunghwan Sung', link: 'https://www.linkedin.com/in/seunghwan-sung-965803297/' },
  { name: 'Sujin Hur', link: 'https://www.linkedin.com/in/sujin-hur-6aaa9717b/' },
  { name: 'Won Jeon', link: 'https://www.linkedin.com/in/won-jeon-etri' },
  { name: 'Gun Ko', link: 'https://scholar.google.com/citations?user=Va6wcsAAAAAJ&hl' },
  { name: 'Jiwon Lee', link: 'https://jiwon24lee.github.io/' },
  { name: 'Hyun Jae Oh', link: 'https://www.linkedin.com/in/hyun-jae-oh-5a2a59295/?originalSubdomain' },
  { name: 'Hyungjun Jang', link: 'https://www.linkedin.com/in/hyungjun-jang-3671a939b/' },
  { name: 'Zihan Chen', link: 'https://cesartwothousands.github.io/' },
  { name: 'Yipeng Huang', link: 'https://yipenghuang.com/' },
  { name: 'Mingu Jung', link: 'https://www.linkedin.com/in/mingu-jung-747ab83ba/' },
  { name: 'Eddy Z. Zhang' },
  { name: 'Junsung Kim' },
  { name: 'Wonho Cho' },
  { name: 'Jaewon Kwon' },
];
