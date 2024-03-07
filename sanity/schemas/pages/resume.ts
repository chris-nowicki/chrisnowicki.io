const TITLE = 'Resume'

export default {
  name: 'resume',
  title: TITLE,
  type: 'document',
  __experimental_formPreviewTitle: false,
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
