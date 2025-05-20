// components/EditModal.tsx
"use client";
import { useState, useEffect } from "react";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedData: {
    contact: string;
    address: string;
    DOB: string;
  }) => void;
  existingData: {
    contact: string;
    address: string;
    DOB: string;
  };
}

export default function EditModal({
  open,
  onClose,
  onSave,
  existingData,
}: EditModalProps) {
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");

  useEffect(() => {
    if (open) {
      setContact(existingData.contact);
      setAddress(existingData.address);
      setDOB(existingData.DOB);
    }
  }, [open, existingData]);

  if (!open) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-xl w-full max-w-md shadow-lg'>
        <h2 className='text-xl font-semibold mb-4'>Edit Patient Details</h2>
        <div className='mb-3'>
          <label className='block font-medium mb-1'>Contact</label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className='w-full border rounded px-3 py-2'
          />
        </div>
        <div className='mb-3'>
          <label className='block font-medium mb-1'>Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='w-full border rounded px-3 py-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>Date of Birth</label>
          <input
            type='date'
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            className='w-full border rounded px-3 py-2'
          />
        </div>

        <div className='flex justify-end gap-2'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ contact, address, DOB })}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
