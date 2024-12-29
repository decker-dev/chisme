CREATE TABLE "messages" (
	"id" text PRIMARY KEY NOT NULL,
	"room_id" integer NOT NULL,
	"username" varchar NOT NULL,
	"content" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages_index" (
	"room_id" integer NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "messages_index_room_id_created_at_pk" PRIMARY KEY("room_id","created_at")
);
--> statement-breakpoint
CREATE TABLE "rooms" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_room_id_rooms_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("id") ON DELETE no action ON UPDATE no action;