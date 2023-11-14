const TITLE = 'Resume'

export default {
  name: 'resume',
  title: TITLE,
  type: 'document',
  fields: [
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
