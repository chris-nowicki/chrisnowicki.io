const TITLE = 'Pages'

export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  groups: [
    { name: 'home', title: 'HOME', default: true },
    { name: 'about', title: 'ABOUT' },
  ],
  fields: [
    { name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}],group: 'home' },
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
}
