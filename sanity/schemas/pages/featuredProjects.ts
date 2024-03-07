const TITLE = 'Featured Projects'

export default {
  name: 'featuredProjects',
  title: TITLE,
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projects' }] }],
      options: {
        disableNew: true,
      },
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
