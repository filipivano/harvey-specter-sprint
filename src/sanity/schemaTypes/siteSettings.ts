import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram handle',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook handle',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'X / Twitter handle',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn handle',
      type: 'string',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact heading',
      type: 'string',
      description: 'Large heading shown on the contact page and in the "Let\'s talk" modal.',
    }),
    defineField({
      name: 'contactSubtext',
      title: 'Contact subtext',
      type: 'text',
      rows: 3,
    }),
  ],
})
