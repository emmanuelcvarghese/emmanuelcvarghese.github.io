import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    icon: z.string(),
    github: z.string().optional(),
    live: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    skills: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Emmanuel Varghese'),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    profileImage: z.string().default('/Profile_image.jpg'),
    linkedinUrl: z.string(),
    githubUrl: z.string(),
    floatingCards: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      subtitle: z.string(),
    })).optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('About Me'),
    paragraphs: z.array(z.string()),
    skills: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  experience,
  blog,
  hero,
  about,
};
