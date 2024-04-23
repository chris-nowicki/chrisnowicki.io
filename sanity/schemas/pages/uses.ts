import { CloudinaryImage } from '../../components/CloudinaryImage'

const TITLE = 'Uses'

export default {
  name: 'uses',
  title: TITLE,
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'setup',
      title: 'Setup Picture',
      type: 'string',
      components: {
        input: CloudinaryImage,
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
