CREATE TABLE "banks_or_credit_unions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"legal_name" varchar(255),
	"description" text,
	"logo" varchar(500),
	"url" varchar(500),
	"founding_date" integer,
	"has_map" varchar(500),
	"awards" jsonb,
	"same_as" jsonb,
	"address" jsonb,
	"aggregate_rating" jsonb,
	"area_served" jsonb,
	"contact_point" jsonb,
	"employee" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "guide_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"guide_type" varchar(100) DEFAULT 'erstfinanzierer' NOT NULL,
	"status" varchar(50) DEFAULT 'pending' NOT NULL,
	"sent_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "property_type" varchar(50);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "plot_area" numeric(10, 2);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "is_renovated" varchar(10);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "renovation_date" timestamp;--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "has_photovoltaik" varchar(10);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "heating_type" varchar(50);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "first_name" varchar(255);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "last_name" varchar(255);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "email" varchar(255);--> statement-breakpoint
ALTER TABLE "property_valuations" ADD COLUMN "user_type" varchar(50);