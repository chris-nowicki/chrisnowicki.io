import { CogIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
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
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          !['featuredProjects', 'resume', 'media.tag'].includes(
            listItem.getId()
          )
      ),
    ])
