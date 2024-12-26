//Velite: Library for managing static content. It allows defining collections, validating data with schemas, and configuring output.

// This file configures a collection of blog posts and their output settings.

// Main steps:
// 1. Importing functions: `defineConfig`, `defineCollection`, `s`.
// 2. Defining `computedFields` to add `slugParams` derived from `slug`.
// 3. Configuring the `posts` collection:
//    - Name: "Post"
//    - Pattern: 'blog/**/*.mdx'
//    - Schema:
//      - `slug`: file path
//      - `title`: string (max 99 characters)
//      - `description`: optional string (max 999 characters)
//      - `date`: ISO date
//      - `published`: boolean (default: `true`)
//      - `body`: MDX content
//    - Data transformation with `computedFields`.
// 4. General configuration via `defineConfig`:
//    - `root`: main directory ("content")
//    - `output`: settings for data path, assets, base URL, cleaning, etc.
//    - `collections`: definition of collections (e.g., `posts`)
//    - `mdx`: configuration of `rehype` and `remark` plugins for MDX.

import { defineConfig, defineCollection, s } from 'velite';

const computedFields = <T extends {slug: string}>(data: T) => ({
    ...data,
    slugParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6]-[ext]",
        clean: true,
    },
    collections: {
        posts
    },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
});