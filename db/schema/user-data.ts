import { pgTable, uuid, varchar, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { users } from "./users";
import { contentEntries } from "./content";

export const userDocuments = pgTable("user_documents", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  filename: varchar("filename", { length: 255 }).notNull(),
  originalFilename: varchar("original_filename", { length: 255 }).notNull(),
  mimeType: varchar("mime_type", { length: 100 }),
  size: varchar("size", { length: 20 }),
  url: varchar("url", { length: 500 }).notNull(), // Encrypted/secure URL
  category: varchar("category", { length: 100 }), // 'income', 'schufa', 'land_register', 'plans', 'other'
  encrypted: boolean("encrypted").default(true).notNull(),
  uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
});

export const userCalculations = pgTable("user_calculations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  calculatorType: varchar("calculator_type", { length: 100 }).notNull(), // 'financing', 'repayment', 'equity', 'monthly_rate'
  inputData: jsonb("input_data").notNull(),
  resultData: jsonb("result_data").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const userBookmarks = pgTable("user_bookmarks", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  contentEntryId: uuid("content_entry_id").references(() => contentEntries.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const userComparisons = pgTable("user_comparisons", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  comparisonType: varchar("comparison_type", { length: 100 }).notNull(),
  comparisonData: jsonb("comparison_data").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

