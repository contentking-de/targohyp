import { pgTable, uuid, varchar, text, timestamp, pgEnum, integer, numeric } from "drizzle-orm/pg-core";
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

export const financingRequests = pgTable("financing_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id), // Optional, wenn eingeloggt
  
  // Schritt 1: Art der Finanzierung
  financingType: varchar("financing_type", { length: 100 }), // 'Kauf Bestandsimmobilie', 'Anschlussfinanzierung', etc.
  
  // Schritt 2: Art der Immobilie
  propertyType: varchar("property_type", { length: 100 }), // 'Einfamilienhaus', 'Eigentumswohnung', etc.
  
  // Schritt 3: Nutzung
  usage: varchar("usage", { length: 100 }), // 'Selbst genutzt', 'Teilweise vermietet', 'Vermietet'
  
  // Schritt 4: Schritt
  step: varchar("step", { length: 100 }), // 'Auf Immobiliensuche', 'Immobilie gefunden', etc.
  
  // Schritt 5: Standort
  postalCode: varchar("postal_code", { length: 10 }),
  city: varchar("city", { length: 255 }),
  
  // Schritt 6: Finanzierungsbedarf
  purchasePrice: numeric("purchase_price", { precision: 15, scale: 2 }), // Kaufpreis/Baupreis
  equity: numeric("equity", { precision: 15, scale: 2 }), // Eigenkapital
  
  // Schritt 7: Beschäftigungsverhältnis
  employmentType: varchar("employment_type", { length: 100 }),
  
  // Schritt 8: Einkommen
  income: numeric("income", { precision: 15, scale: 2 }),
  
  // Schritt 9: Persönliche Daten
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  street: varchar("street", { length: 255 }),
  addressPostalCode: varchar("address_postal_code", { length: 10 }),
  addressCity: varchar("address_city", { length: 255 }),
  
  // Status
  status: varchar("status", { length: 50 }).default("new").notNull(), // 'new', 'in_progress', 'contacted', 'completed'
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const propertyValuations = pgTable("property_valuations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id), // Optional, wenn eingeloggt
  
  // Immobiliendaten
  constructionYear: integer("construction_year").notNull(), // Baujahr
  squareMeters: numeric("square_meters", { precision: 10, scale: 2 }).notNull(), // Quadratmeter
  energyEfficiencyClass: varchar("energy_efficiency_class", { length: 10 }).notNull(), // Energieeffizienzklasse (A+, A, B, C, D, E, F, G, H)
  location: varchar("location", { length: 255 }).notNull(), // Standort
  
  // Status
  status: varchar("status", { length: 50 }).default("new").notNull(), // 'new', 'in_progress', 'completed'
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const appointmentRequests = pgTable("appointment_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id), // Optional, wenn eingeloggt
  
  // Persönliche Daten
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  
  // Termindetails
  preferredDate: timestamp("preferred_date").notNull(), // Gewünschtes Datum
  preferredTime: varchar("preferred_time", { length: 50 }), // Gewünschte Uhrzeit (z.B. "Vormittag", "Nachmittag", "09:00")
  topic: varchar("topic", { length: 255 }), // Thema/Beratungsanlass (optional)
  message: text("message"), // Zusätzliche Nachricht (optional)
  
  // Status
  status: varchar("status", { length: 50 }).default("pending").notNull(), // 'pending', 'confirmed', 'completed', 'cancelled'
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

