CREATE TABLE "financing_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"financing_type" varchar(100),
	"property_type" varchar(100),
	"usage" varchar(100),
	"step" varchar(100),
	"postal_code" varchar(10),
	"city" varchar(255),
	"purchase_price" numeric(15, 2),
	"equity" numeric(15, 2),
	"employment_type" varchar(100),
	"income" numeric(15, 2),
	"first_name" varchar(255),
	"last_name" varchar(255),
	"email" varchar(255),
	"phone" varchar(50),
	"street" varchar(255),
	"address_postal_code" varchar(10),
	"address_city" varchar(255),
	"status" varchar(50) DEFAULT 'new' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "financing_requests" ADD CONSTRAINT "financing_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;