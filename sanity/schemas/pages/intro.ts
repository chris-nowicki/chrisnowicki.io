const TITLE = 'Intro'

export default {
  name: 'intro',
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
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
}
