import { pgTable, uuid, varchar, text, timestamp, pgEnum, integer, numeric, jsonb } from "drizzle-orm/pg-core";
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
  propertyType: varchar("property_type", { length: 50 }), // 'Haus', 'Wohnung', 'Gewerbeimmobilie'
  constructionYear: integer("construction_year").notNull(), // Baujahr
  squareMeters: numeric("square_meters", { precision: 10, scale: 2 }).notNull(), // Quadratmeter Wohnfläche
  plotArea: numeric("plot_area", { precision: 10, scale: 2 }), // Quadratmeter Grundstück
  energyEfficiencyClass: varchar("energy_efficiency_class", { length: 10 }).notNull(), // Energieeffizienzklasse (A+, A, B, C, D, E, F, G, H)
  location: varchar("location", { length: 255 }).notNull(), // Standort
  
  // Weitere Immobiliendetails
  isRenovated: varchar("is_renovated", { length: 10 }), // 'ja', 'nein'
  renovationDate: timestamp("renovation_date"), // Sanierungsdatum (optional)
  hasPhotovoltaik: varchar("has_photovoltaik", { length: 10 }), // 'ja', 'nein'
  heatingType: varchar("heating_type", { length: 50 }), // 'Gas', 'Öl', 'Wärmepumpe'
  
  // Persönliche Daten
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  userType: varchar("user_type", { length: 50 }), // 'Käufer', 'Verkäufer'
  
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

export const guideRequests = pgTable("guide_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull(),
  guideType: varchar("guide_type", { length: 100 }).default("erstfinanzierer").notNull(), // 'erstfinanzierer', etc.
  status: varchar("status", { length: 50 }).default("pending").notNull(), // 'pending', 'sent', 'failed'
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const banksOrCreditUnions = pgTable("banks_or_credit_unions", {
  id: uuid("id").primaryKey().defaultRandom(),
  
  // Grundlegende Informationen
  name: varchar("name", { length: 255 }).notNull(), // z.B. "UBS Schweiz"
  legalName: varchar("legal_name", { length: 255 }), // z.B. "UBS Switzerland AG"
  description: text("description"), // Beschreibung der Bank
  logo: varchar("logo", { length: 500 }), // URL zum Logo
  url: varchar("url", { length: 500 }), // URL zur Website
  foundingDate: integer("founding_date"), // Gründungsjahr (z.B. 1862)
  hasMap: varchar("has_map", { length: 500 }), // Google Maps URL
  
  // Awards (Array von Award-Strings)
  awards: jsonb("awards"), // Array von Awards, z.B. ["Beste Privatbank der Schweiz 2025", ...]
  
  // Social Media Links (Array von URLs)
  sameAs: jsonb("same_as"), // Array von Social Media URLs
  
  // Adresse (PostalAddress als JSON)
  address: jsonb("address"), // { @type: "PostalAddress", streetAddress, addressLocality, postalCode, addressRegion, addressCountry }
  
  // Bewertungen (AggregateRating als JSON)
  aggregateRating: jsonb("aggregate_rating"), // { @type: "AggregateRating", ratingValue, reviewCount }
  
  // Bediente Gebiete (Array von Countries)
  areaServed: jsonb("area_served"), // Array von { @type: "Country", name: "Switzerland" }
  
  // Kontaktpunkte (Array von ContactPoints)
  contactPoint: jsonb("contact_point"), // Array von { @type: "ContactPoint", areaServed, availableLanguage, contactType, url }
  
  // Mitarbeiter (Array von Employees/OrganizationRoles)
  employee: jsonb("employee"), // Array von { @type: "Person" | "OrganizationRole", name, jobTitle, startDate, ... }
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const interestRates = pgTable("interest_rates", {
  id: uuid("id").primaryKey().defaultRandom(),
  
  // Zinsbindung in Jahren (10, 15, 20)
  interestPeriod: integer("interest_period").notNull(), // 10, 15, 20
  
  // Beleihungsauslauf (70, 80, 90)
  loanToValue: integer("loan_to_value").notNull(), // 70, 80, 90
  
  // Effektiver Jahreszins
  annualPercentageRate: numeric("annual_percentage_rate", { precision: 5, scale: 2 }).notNull(), // z.B. 3.52
  
  // Datum der Zinsdaten
  rateDate: timestamp("rate_date").notNull(), // Datum, für das die Zinsen gelten
  
  // Quelle (z.B. "interhyp")
  source: varchar("source", { length: 100 }).default("interhyp").notNull(),
  
  // Zusätzliche Metadaten
  metadata: jsonb("metadata"), // Zusätzliche Informationen als JSON
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});