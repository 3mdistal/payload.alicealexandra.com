import type { CollectionConfig } from 'payload'

export const OgInfo: CollectionConfig = {
  slug: 'ogInfo',
  admin: {
    useAsTitle: 'ogTitle',
    description: 'Open Graph metadata for sharing pages on social media.',
  },
  access: {
    read: () => true, // Everyone can read OG info
    create: ({ req: { user } }: { req: { user: any } }) => !!user, // Only logged-in users can create
    update: ({ req: { user } }: { req: { user: any } }) => !!user, // Only logged-in users can update
    delete: ({ req: { user } }: { req: { user: any } }) => !!user, // Only logged-in users can delete
  },
  fields: [
    {
      name: 'ogTitle',
      label: 'OG Title',
      type: 'text',
      required: true,
      admin: {
        description: 'The title that appears when the page is shared.',
      },
    },
    {
      name: 'ogDescription',
      label: 'OG Description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The description that appears when the page is shared.',
      },
    },
    {
      name: 'ogImage',
      label: 'OG Image',
      type: 'upload',
      relationTo: 'media', // Relates to the Media collection
      required: true,
      admin: {
        description:
          'The image that appears when the page is shared. Recommended size: 1200x630px.',
      },
    },
    {
      name: 'ogType',
      label: 'OG Type',
      type: 'select',
      options: [
        { label: 'Website', value: 'website' },
        { label: 'Article', value: 'article' },
        { label: 'Book', value: 'book' },
        { label: 'Profile', value: 'profile' },
      ],
      defaultValue: 'website',
      admin: {
        description: 'The type of object being shared (e.g., website, article).',
      },
    },
    {
      name: 'ogUrl',
      label: 'OG URL',
      type: 'text',
      admin: {
        description: '(Optional) The canonical URL for the page. Often derived automatically.',
      },
    },
  ],
}
