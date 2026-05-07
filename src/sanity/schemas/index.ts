import { SchemaTypeDefinition } from "sanity";
import { portfolioItem } from "../schemaTypes/portfolioItem";
import { service } from "../schemaTypes/service";
import { newsItem } from "../schemaTypes/newsItem";
import { siteSettings } from "../schemaTypes/siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  portfolioItem,
  service,
  newsItem,
  siteSettings,
];
