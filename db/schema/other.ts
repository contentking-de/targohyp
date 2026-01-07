import { pgTable, uuid, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { users } from "./users";

export const newsletterStatusEnum = pgEnum("newsletter_status", ["pending", "confirmed", "unsubscribed"]);

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  status: newsletterStatusEnum("status").default("pending").notNull(),
  confirmationToken: varchar("confirmation_token", { length: 255 }),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  confirmedAt: timestamp("confirmed_at"),
  unsubscribedAt: timestamp("unsubscribed_at"),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  userId: uuid("user_id").references(() => users.id), // Optional, wenn eingeloggt
  status: varchar("status", { length: 50 }).default("new").notNull(), // 'new', 'in_progress', 'resolved'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const advisoryRequests = pgTable("advisory_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  preferredDate: timestamp("preferred_date"),
  preferredTime: varchar("preferred_time", { length: 50 }),
  message: text("message"),
  status: varchar("status", { length: 50 }).default("pending").notNull(), // 'pending', 'confirmed', 'completed', 'cancelled'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  userType: varchar("user_type", { length: 50 }), // 'customer', 'cms_user'
  action: varchar("action", { length: 100 }).notNull(),
  resourceType: varchar("resource_type", { length: 100 }),
  resourceId: uuid("resource_id"),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  details: text("details"), // JSONB als TEXT
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

