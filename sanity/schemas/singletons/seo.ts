import { defineType } from 'sanity'

const TITLE = 'Seo'

export default {
  name: 'seo',
  title: TITLE,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'OG Image',
      type: 'image',
    },
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
}
