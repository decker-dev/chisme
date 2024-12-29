import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
export type Room = typeof rooms.$inferSelect;

export type InsertRoom = typeof rooms.$inferInsert;

export const messages = pgTable("messages", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  roomId: integer("room_id")
    .references(() => rooms.id)
    .notNull(),
  username: varchar("username").notNull(),
  content: varchar("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const messagesIndex = pgTable(
  "messages_index",
  {
    roomId: integer("room_id").notNull(),
    createdAt: timestamp("created_at").notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.roomId, table.createdAt],
    }),
  }),
);
