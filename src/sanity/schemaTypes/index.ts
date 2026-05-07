import { type SchemaTypeDefinition } from 'sanity'
import { portfolioItem } from './portfolioItem'
import { service } from './service'
import { newsItem } from './newsItem'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioItem, service, newsItem, siteSettings],
}
