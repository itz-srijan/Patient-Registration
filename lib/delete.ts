"use client";

export const deletePatientById = async (id: number) => {
  const { getDb } = await import("./db");
  const db = await getDb();
  await db.exec(`DELETE FROM patients WHERE id = ${id}`);
};
