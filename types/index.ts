import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Links {
  website?: string;
  github?: string;
  github2?: string;
  discord?: string;
  pypi?: string;
  npm?: string;
}

export interface Project extends ParsedContent {
  title: string;
  description: string;
  tags: string[];
  date: string;
  links: Links;
}
