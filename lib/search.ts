"use client";

interface Patient {
  id?: number;
  firstname: string;
  lastname?: string;
  age: number;
  dob: string;
  gender: string;
  contact: string;
  email?: string;
  address: string;
}

export const searchPatients = async (
  id: string,
  firstname: string,
  lastname: string,
  mobileNum: string
): Promise<Patient[]> => {
  const { getDb } = await import("./db"); 
  const db = await getDb();

  const conditions: string[] = [];

  if (id.trim()) {
    conditions.push(`id = ${parseInt(id)}`);
  }
  if (firstname.trim()) {
    conditions.push(`firstname LIKE '%${firstname.replace(/'/g, "''")}%'`);
  }
  if (lastname.trim()) {
    conditions.push(`lastname LIKE '%${lastname.replace(/'/g, "''")}%'`);
  }
  if (mobileNum.trim()) {
    conditions.push(`contact LIKE '%${mobileNum.replace(/'/g, "''")}%'`);
  }

  if (conditions.length === 0) return [];

  const whereClause = `WHERE ${conditions.join(" AND ")}`;
  const query = `SELECT * FROM patients ${whereClause};`;

  const result = await db.exec(query);
  return result[0]?.rows as Patient[];
};
