export async function updatePatientById(
  id: number,
  data: { contact: string; address: string; DOB: string }
) {
  const { getDb } = await import("./db");
  const db = await getDb();

  const today = new Date();
  const dob = new Date(data.DOB);
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  await db.exec(`
    UPDATE patients SET contact = '${data.contact}', address = '${data.address}', age = '${age}' ,DOB = '${data.DOB}'  WHERE id = ${id}
  `);
}
