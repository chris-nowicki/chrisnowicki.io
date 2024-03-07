const TITLE = 'Intro'

export default {
  name: 'intro',
  title: TITLE,
  type: 'document',
  __experimental_formPreviewTitle: false,
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
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
}
