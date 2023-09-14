import { defineType, defineField } from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      default: true,
    },
  ],
  fields: [
    //Menu
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
