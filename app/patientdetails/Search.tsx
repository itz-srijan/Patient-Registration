"use client";

import { useState } from "react";
import { initDb } from "@/lib/db";
import { searchPatients } from "@/lib/search";

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
interface SearchProps {
  results: Patient[];
  setResults: (results: Patient[]) => void;
}

export default function Search({setResults }: SearchProps) {
  const [id, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  const handleSearch = async () => {
    if (!firstname && !id && !mobileNum) {
      alert("Please enter at least one search criteria.");
      return;
    }
    await initDb();
    const res = await searchPatients(id, firstname, lastname, mobileNum);
    setResults(res);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-start pt-10'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Search Patient Details
        </h2>

        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Patient ID
            </label>
            <input
              type='text'
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder='Enter patient ID'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Patient First Name
            </label>
            <input
              type='text'
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Enter patient name'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Patient Last Name
            </label>
            <input
              type='text'
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Enter patient name'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Mobile Number
            </label>
            <input
              type='text'
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              placeholder='Enter mobile number'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className='w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold'
        >
          Search
        </button>
      </div>
    </div>
  );
}
