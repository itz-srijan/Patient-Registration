"use client";

import { useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";
import { MdDelete, MdEdit } from "react-icons/md";
import { deletePatientById } from "@/lib/delete";

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

interface DetailsProps {
  results: Patient[];
}

export default function Details({ results }: DetailsProps) {
  const [open, setOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientID] = useState<number | null>(
    null
  );

  const openModal = (id: number) => {
    setSelectedPatientID(id);
    setOpen(true);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-4'>
      <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>
        Patient Details
      </h1>

      <ConfirmModal
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          deletePatientById(selectedPatientId!);
          setOpen(false);
        }}
        message={`Are you sure you want to delete patient with ID: ${selectedPatientId}?`}
      />

      {results.length === 0 ? (
        <p className='text-center text-gray-500'>No patient records found.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {results.map((patient) => (
            <div
              key={patient.id}
              className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow'
            >
              <div className='flex justify-between'>
                <h2 className='text-xl font-semibold text-blue-700 mb-2'>
                  {patient.firstname + " " + patient.lastname}
                </h2>
                <div className='flex gap-1 right-2'>
                  <button
                    onClick={() => openModal(patient.id!)}
                    className='cursor-pointer pb-2 text-red-500 hover:text-red-700'
                  >
                    <MdDelete size={24} />
                  </button>
                  <button className='pb-2 cursor-pointer text-blue-500 hover:text-blue-700'>
                    <MdEdit size={24} />
                  </button>
                </div>
              </div>

              <p className='text-gray-700 mb-1'>
                <span className='font-medium'>ID:</span> {patient.id}
              </p>
              <p className='text-gray-700 mb-1'>
                <span className='font-medium'>Age:</span> {patient.age}
              </p>
              <p className='text-gray-700 mb-1'>
                <span className='font-medium'>Gender:</span> {patient.gender}
              </p>
              <p className='text-gray-700 mb-1'>
                <span className='font-medium'>Contact:</span> {patient.contact}
              </p>
              <p className='text-gray-700 mb-1'>
                <span className='font-medium'>Mail:</span> {patient.email}
              </p>
              <p className='text-gray-700'>
                <span className='font-medium'>Address:</span> {patient.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
