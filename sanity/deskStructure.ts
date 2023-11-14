import { CogIcon } from '@sanity/icons'
import { HomeIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
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
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'settings',
            'home',
            'intro',
            'featuredProjects',
            'resume',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ])
