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
              S.listItem()
                .title('About')
                .icon(UserIcon)
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Resumé')
                .icon(DocumentPdfIcon)
                .child(S.document().schemaType('resume').documentId('resume')),
            ])
        ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'settings',
            'resume',
            'professionalExperience',
            'education',
            'home',
            'about',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ])
