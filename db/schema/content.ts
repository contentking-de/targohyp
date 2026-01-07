import { pgTable, uuid, varchar, text, timestamp, pgEnum, jsonb } from "drizzle-orm/pg-core";
import { cmsUsers } from "./users";

export const contentStatusEnum = pgEnum("content_status", ["draft", "review", "published", "archived"]);

export const contentTypes = pgTable("content_types", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  schema: jsonb("schema"), // Flexible Schema-Definition
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contentEntries = pgTable("content_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentTypeId: uuid("content_type_id").references(() => contentTypes.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  status: contentStatusEnum("status").default("draft").notNull(),
  content: jsonb("content").notNull(), // Flexible Content-Struktur
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"), // Array als TEXT
  ogImage: varchar("og_image", { length: 255 }),
  authorId: uuid("author_id").references(() => cmsUsers.id),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const contentVersions = pgTable("content_versions", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentEntryId: uuid("content_entry_id").references(() => contentEntries.id).notNull(),
  versionNumber: varchar("version_number", { length: 10 }).notNull(),
  content: jsonb("content").notNull(),
  authorId: uuid("author_id").references(() => cmsUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const media = pgTable("media", {
  id: uuid("id").primaryKey().defaultRandom(),
  filename: varchar("filename", { length: 255 }).notNull(),
  originalFilename: varchar("original_filename", { length: 255 }).notNull(),
  mimeType: varchar("mime_type", { length: 100 }),
  size: varchar("size", { length: 20 }), // INTEGER als VARCHAR
  url: varchar("url", { length: 500 }).notNull(),
  altText: text("alt_text"),
  uploadedBy: uuid("uploaded_by").references(() => cmsUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  parentId: uuid("parent_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contentCategories = pgTable("content_categories", {
  contentEntryId: uuid("content_entry_id").references(() => contentEntries.id).notNull(),
  categoryId: uuid("category_id").references(() => categories.id).notNull(),
});

export const tags = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contentTags = pgTable("content_tags", {
  contentEntryId: uuid("content_entry_id").references(() => contentEntries.id).notNull(),
  tagId: uuid("tag_id").references(() => tags.id).notNull(),
});

