import { CodeBlockIcon } from '@sanity/icons'

export default {
  name: 'tech',
  type: 'document',
  title: 'Tech',
  icon: CodeBlockIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Languages', value: 'lang' },
          { title: 'Frameworks/Libraries', value: 'framelib' },
          { title: 'Databases', value: 'db' },
          { title: 'Cloud/Serverless', value: 'cloud' },
          { title: 'Operating Systems', value: 'os' },
          { title: 'Tools', value: 'tools' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'show',
      Title: 'Show',
      type: 'boolean',
    },
  ],
}
