export interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "beranda",
    title: "Beranda",
  },
  {
    id: "program",
    title: "Program Kami",
  },
  {
    id: "promo",
    title: "Promo",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

import { IconType } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export interface socialLink {
  id: string;
  icon: IconType;
  link: string;
}

export const socialMedia: socialLink[] = [
  {
    id: "social-media-facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/",
  },
];

export interface FooterLink {
  id: string;
  title: string;
}

export const footerLinks: FooterLink[] = [
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "tentang-kami",
    title: "Tentang Kami",
  },
  {
    id: "kontak-kami",
    title: "Kontak Kami",
  },
  {
    id: "kebijakan-privasi",
    title: "Kebijakan Privasi",
  },
  {
    id: "syarat-ketentuan",
    title: "Syarat dan Ketentuan",
  },
];

export interface PartnerLink {
  id: string;
  title: string;
}

export const partnerLinks: PartnerLink[] = [
  {
    id: "partner-kami",
    title: "Partner Kami",
  },
  {
    id: "gabung-kami",
    title: "Gabung dengan Kami",
  },
];

export const heroTexts = {
  main: "Menuju Perguruan Tinggi Impianmu",
  desc: "STUDISINI.id siap bantu kamu yang mau sukses masuk ke perguruan tinggi favoritmu. Ayo mulai perjalanan akademismu sekarang!",
};

export const alumni = {
  name: "William Wijaya",
  desc: "Alumni Bimbingan STUDISINI.id",
  uni: "Lolos Institut Teknologi Bandung",
};

import { femaleModel1, femaleModel2 } from "../assets";

export interface ProgramListItem {
  title: string;
  content: string;
  duration: string;
  priceBefore: string;
  discount: string;
  priceAfter: string;
  model: string;
  color: string;
}

export const programLists: ProgramListItem[] = [
  {
    title: "STUDISINI.id Online Eksklusif 12 SMA",
    content: "SNBT + Ujian Mandiri",
    duration: "8 Minggu",
    priceBefore: "Rp2.000.000",
    discount: "Diskon 50%",
    priceAfter: "Rp1.000.000",
    model: femaleModel1,
    color: "bg-gradient-to-b from-teal-200 to-sky-500",
  },
  {
    title: "STUDISINI.id Online Eksklusif 12 SMA",
    content: "Seleksi Kedinasan",
    duration: "8 Minggu",
    priceBefore: "Rp2.000.000",
    discount: "Diskon 50%",
    priceAfter: "Rp1.000.000",
    model: femaleModel1,
    color: "bg-gradient-to-b from-teal-200 to-sky-500",
  },
  {
    title: "STUDISINI.id Online Premium 12 SMA",
    content: "SNBT + Ujian Mandiri",
    duration: "4 Minggu",
    priceBefore: "Rp1.000.000",
    discount: "Diskon 50%",
    priceAfter: "Rp500.000",
    model: femaleModel1,
    color: "bg-gradient-to-b from-cyan-200 to-sky-700",
  },
  {
    title: "STUDISINI.id Online Reguler 12 SMA",
    content: "SNBT",
    duration: "4 Minggu",
    priceBefore: "Rp1.000.000",
    discount: "Diskon 75%",
    priceAfter: "Rp250.000",
    model: femaleModel2,
    color: "bg-gradient-to-b from-sky-300 to-blue-600",
  },
  {
    title: "STUDISINI.id Online Reguler 12 SMA",
    content: "Ujian Mandiri",
    duration: "4 Minggu",
    priceBefore: "Rp1.000.000",
    discount: "Diskon 75%",
    priceAfter: "Rp250.000",
    model: femaleModel2,
    color: "bg-gradient-to-b from-sky-300 to-blue-600",
  },
  {
    title: "STUDISINI.id Online Reguler 12 SMA",
    content: "Seleksi Kedinasan",
    duration: "4 Minggu",
    priceBefore: "Rp1.000.000",
    discount: "Diskon 75%",
    priceAfter: "Rp250.000",
    model: femaleModel2,
    color: "bg-gradient-to-b from-sky-300 to-blue-600",
  },
];

export interface ClassesLink {
  id: string;
  title: string;
}

export const classesLinks: ClassesLink[] = [
  {
    id: "snbt-sm",
    title: "SNBT & Seleksi Mandiri",
  },
  {
    id: "snbt",
    title: "SNBT",
  },
  {
    id: "seleksi-mandiri",
    title: "Seleksi Mandiri",
  },
  {
    id: "seleksi-kedinasan",
    title: "Seleksi Kedinasan",
  },
];

import { mentor1, mentor2, mentor3 } from "../assets";

export interface Mentor {
  name: string;
  alumni: string;
  major: string;
  rating: string;
  img: string;
}

export const mentors: Mentor[] = [
  {
    name: "Kak Bobby",
    alumni: "Universitas Indonesia",
    major: "Bahasa Inggris",
    rating: "4,8",
    img: mentor1,
  },
  {
    name: "Kak Dewi",
    alumni: "Universitas Brawijaya",
    major: "Matematika",
    rating: "4,9",
    img: mentor2,
  },
  {
    name: "Kak Andika",
    alumni: "Universitas Negeri Semarang",
    major: "Bahasa Indonesia",
    rating: "4,8",
    img: mentor3,
  },
];

export interface MentorSection {
  title: string;
  desc: string;
  points: string[];
}

export const mentorSection: MentorSection = {
  title: "Belajar bersama Mentor lulusan PTN favorit",
  desc: "Di STUDISINI.id, kamu akan belajar langsung dari ahlinya dengan metode yang interaktif, suportif dan menyenangkan.",
  points: [
    "Lulusan pilihan dari PTN favorit",
    "Berpengalaman mengajar lebih dari 5 tahun",
    "Memiliki sertifikasi tingkat nasional hingga internasional",
  ],
};
