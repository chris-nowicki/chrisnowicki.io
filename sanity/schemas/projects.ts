import { JoystickIcon } from '@sanity/icons'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  icon: JoystickIcon,
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'dateCreated',
      title: 'Date Created',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'gitHubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'liveSiteUrl',
      title: 'Live Site URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tech' }] }],
    },
  ],
}
