import { BsStopwatch } from 'react-icons/bs'
const TITLE = 'Now'

export default {
  name: 'now',
  title: TITLE,
  type: 'document',
  icon: BsStopwatch,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'publishDate',
        slugify: (input: any) => input.slice(0, 10),
        maxLength: 10,
      },
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Quote', value: 'blockquote' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
