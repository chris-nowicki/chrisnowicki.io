import { CogIcon } from '@sanity/icons'
import {
  HomeIcon,
  DocumentsIcon,
  UserIcon,
  DocumentPdfIcon,
} from '@sanity/icons'

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
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(HomeIcon)
                .child(S.document().schemaType('home').documentId('home')),
            ])
        ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'settings',
            'home',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ])
