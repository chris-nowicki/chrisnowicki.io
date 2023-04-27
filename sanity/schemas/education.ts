const TITLE = 'Education'

export default {
  name: 'education',
  title: TITLE,
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'schoolURL',
      title: 'School URL',
      type: 'url',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Degree / Certificate',
      type: 'string',
    },
    {
      name: 'dateEarned',
      title: 'Date Earned',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'displayDate',
      title: 'Display Date',
      type: 'boolean',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  orderings: [
    {
      title: 'Date Earned',
      name: 'date earned',
      by: [{ field: 'dateEarned', direction: 'desc' }],
    },
  ],
}
