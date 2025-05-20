"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Search from "./Search";
import Details from "./Details";

interface Patient {
  id?: number;
  firstname: string;
  lastname?: string;
  age: number;
  DOB: string;
  gender: string;
  contact: string;
  email?: string;
  address: string;
}

export default function PatientDetails() {
  const [results, setResults] = useState<Patient[]>([]);
  return (
    <>
      <Navbar />
      <div className='p-4 flex flex-row gap-4 min-h-screen bg-gray-100'>
        <Search results={results} setResults={setResults} />
        <Details results={results} />
      </div>
    </>
  );
}
