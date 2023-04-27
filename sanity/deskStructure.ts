import { CogIcon } from '@sanity/icons'
import { DocumentTextIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.listItem()
        .title('Resumé')
        .icon(DocumentTextIcon)
        .child(S.document().schemaType('resume').documentId('resume')),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'settings',
            'resume',
            'professionalExperience',
            'education',
          ].includes(listItem.getId())
      ),
    ])
