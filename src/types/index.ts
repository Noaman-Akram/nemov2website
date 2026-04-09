/**
 * Global TypeScript types for the Nemo website.
 * Keep types lean — only add what's shared across 2+ files.
 */

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Footer column */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Page metadata helper */
export interface PageMeta {
  title: string;
  description: string;
}

/** Project / work item */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

/** Team member */
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Career / job listing */
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  href?: string;
}
