import { defineType, defineField } from 'sanity'
import { SocialLinkInput } from '../../components/Social/SocialLinkInput'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  groups: [
    {
      name: 'socialLinks',
      title: 'Social Links',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    //Menu
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      group: 'socialLinks',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'linkedin',
          title: 'Linkedin',
          type: 'string',
          description: 'https://www.linkedin.com/in/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'string',
          description: 'https://github.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
          description: 'https://twitter.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'devto',
          title: 'DevTo',
          type: 'string',
          description: 'https://dev.to/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'https://instagram.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      options: {
        collapsed: false,
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'name',
          title: 'name',
          type: 'string',
        }),
        defineField({
          name: 'siteName',
          title: 'Site Name',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Site URL',
          type: 'url',
        }),
        defineField({
          name: 'description',
          title: 'Site Description',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'OG Image',
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
