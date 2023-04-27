import LocationInput from '../../components/LocationInput'

const TITLE = 'Resumé'

export default {
  name: 'resume',
  title: TITLE,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      components: {
        input: LocationInput,
      },
    },
    {
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
    },
    {
      name: 'technicalProjects',
      title: 'Technical Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'projects',
            },
          ],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule: any) => Rule.max(4).warning('Only 4 Projects Allowed'),
    },
    {
      name: 'professionalExperience',
      title: 'Professional Experience',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'professionalExperience',
            },
          ],
          options: {
            disableNew: false,
          },
        },
      ],
      validation: (Rule: any) => Rule.max(4).warning('Only 4 Projects Allowed'),
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'education',
            },
          ],
          options: {
            disableNew: false,
          },
        },
      ],
      validation: (Rule: any) => Rule.max(4).warning('Only 4 Projects Allowed'),
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
