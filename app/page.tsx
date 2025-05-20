"use client";

import { useEffect, useState } from "react";
import { getDb, initDb } from "@/lib/db";
import PatientForm from "@/components/PatientForm";
import PatientLists from "@/components/PatientList";
import Navbar from "@/components/Navbar";

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

export default function HomePage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  const fetchPatients = async () => {
    const db = await getDb();
    const res = await db.exec("SELECT * FROM patients");
    setPatients((res[0]?.rows as Patient[]) ?? []);
  };

  useEffect(() => {
    const setup = async () => {
      await initDb();
      await fetchPatients();
    };
    setup();

    const channel = new BroadcastChannel("patient-updates");

    channel.onmessage = async (event) => {
      if (event.data === "refresh") {
        await fetchPatients();
      }
    };

    return () => {
      channel.close();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className='max-w-4xl mx-auto py-10 space-y-10'>
        <PatientForm onSubmitSuccess={fetchPatients} />
        {<PatientLists patients={patients.slice(-5)} />}
      </main>
    </>
  );
}
