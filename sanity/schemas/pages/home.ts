const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  fields: [
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projects' }] }],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
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
