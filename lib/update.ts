export async function updatePatientById(
  id: number,
  data: { contact: string; address: string; DOB: string }
) {
  const { getDb } = await import("./db");
  const db = await getDb();

  await db.exec(`
    UPDATE patients SET contact = '${data.contact}', address = '${data.address}', DOB = '${data.DOB}' WHERE id = ${id}
  `);
}
