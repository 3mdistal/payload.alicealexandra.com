import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'ogInfo',
      label: 'OG Info',
      type: 'relationship',
      relationTo: 'ogInfo',
      hasMany: false,
      required: false,
      admin: {
        description: 'Select the Open Graph metadata for this blog post.',
      },
    },
  ],
}
