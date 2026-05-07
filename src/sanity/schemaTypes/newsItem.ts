import { defineField, defineType } from 'sanity'

export const newsItem = defineType({
  name: 'newsItem',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in cards on the home page and news page.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImageUrl',
      title: 'Cover Image URL',
      type: 'url',
      description: 'External image URL (used when no uploaded image is set)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Award', 'Feature', 'Event', 'Press', 'Launch'],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Date (newest first)',
      name: 'dateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
