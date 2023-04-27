const TITLE = 'Professional Experience'

export default {
  name: 'professionalExperience',
  title: TITLE,
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'companyURL',
      title: 'Company URL',
      type: 'url',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'accomplishments',
      title: 'Accomplishments',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
