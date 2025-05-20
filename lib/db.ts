import type { PGlite as PGliteType } from "@electric-sql/pglite";

let db: InstanceType<typeof PGliteType> | null = null;

export async function getDb() {
  if (typeof window === "undefined") {
    throw new Error("PGlite must only be used in the browser");
  }

  if (!db) {
    const { PGlite } = await import("@electric-sql/pglite");
    db = new PGlite("idb://patient.db");
  }

  return db;
}

export async function initDb() {
  const db = await getDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      firstname TEXT NOT NULL,
      lastname TEXT,
      age INTEGER,
      DOB TEXT NOT NULL,
      address TEXT NOT NULL,
      email TEXT,
      gender TEXT,
      contact TEXT NOT NULL
    );
  `);
}
