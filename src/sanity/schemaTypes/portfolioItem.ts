import { defineField, defineType } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
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
      name: 'tall',
      title: 'Tall card',
      type: 'boolean',
      description: 'Display as a taller card in the desktop grid (744 px vs 699 px)',
      initialValue: false,
    }),
    defineField({
      name: 'link',
      title: 'Project URL',
      type: 'url',
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
  ],
})
