import { defineType, defineField } from 'sanity'
import { SocialLinkInput } from '../../components/Social/SocialLinkInput'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  groups: [
    {
      default: true,
      name: 'bio',
      title: 'Bio',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    //Menu
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'object',
      group: 'bio',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'profilePicture',
          title: 'Picture',
          type: 'image',
        }),
        defineField({
          name: 'about',
          title: 'About',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'bio',
          title: 'Bio',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image' }],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      group: 'socialLinks',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'linkedin',
          title: 'Linkedin',
          type: 'string',
          description: 'https://www.linkedin.com/in/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'string',
          description: 'https://github.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
          description: 'https://twitter.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'https://instagram.com/',
          components: {
            field: SocialLinkInput,
          },
        }),
      ],
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'object',
      group: 'featuredProjects',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Links
        defineField({
          name: 'featured',
          title: 'Projects',
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
          validation: (Rule: any) =>
            Rule.max(4).warning('Only 4 Featured Projects Allowed'),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      options: {
        collapsed: false,
        collapsible: false,
      },
      fields: [
        defineField({
          name: 'name',
          title: 'name',
          type: 'string',
        }),
        defineField({
          name: 'siteName',
          title: 'Site Name',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Site URL',
          type: 'url',
        }),
        defineField({
          name: 'description',
          title: 'Site Description',
          type: 'string',
        }),
        defineField({
          name: 'type',
          title: 'Site Type',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'OG Image',
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
