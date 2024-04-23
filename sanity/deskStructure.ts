import { CogIcon } from '@sanity/icons'
import { ImageIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('SEO')
                .child(S.document().schemaType('seo').documentId('seo')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Portfolio')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Portfolio Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Intro')
                .child(S.document().schemaType('intro').documentId('intro')),
              S.listItem()
                .title('Featured Projects')
                .child(
                  S.document()
                    .schemaType('featuredProjects')
                    .documentId('featuredProjects')
                ),
              S.listItem()
                .title('Resume')
                .child(S.document().schemaType('resume').documentId('resume')),
            ])
        ),
      S.listItem()
        .title('Uses')
        .child(
          S.list()
            .title('Uses Documents')
            .items([
              S.listItem()
                .title('Setup Picture')
                .icon(ImageIcon)
                .child(S.document().schemaType('uses').documentId('uses')),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'seo',
            'home',
            'intro',
            'uses',
            'featuredProjects',
            'resume',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ])
