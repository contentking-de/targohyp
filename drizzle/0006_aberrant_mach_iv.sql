CREATE TABLE "interest_rates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"interest_period" integer NOT NULL,
	"loan_to_value" integer NOT NULL,
	"annual_percentage_rate" numeric(5, 2) NOT NULL,
	"rate_date" timestamp NOT NULL,
	"source" varchar(100) DEFAULT 'interhyp' NOT NULL,
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
