"use client";

import { useState } from "react";
import { getDb } from "@/lib/db";

interface Props {
  onSubmitSuccess: () => void;
}

export default function PatientForm({ onSubmitSuccess }: Props) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    gender: "",
    contact: "",
    DOB: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const db = await getDb();

    const today = new Date();
    const dob = new Date(form.DOB);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    await db.exec(`
      INSERT INTO patients (firstname, lastname, DOB, age, address, email, gender, contact)
      VALUES ('${form.firstname}', '${form.lastname}', '${form.DOB}','${age}', '${form.address}', '${form.email}', '${form.gender}', '${form.contact}');
    `);
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      gender: "",
      contact: "",
      DOB: "",
      address: "",
    });

    const channel = new BroadcastChannel("patient-updated");
    channel.postMessage("refresh");
    channel.close();
    onSubmitSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-5 space-y-6 border border-gray-200'
    >
      <h2 className='text-2xl font-bold text-blue-700 text-center'>
        Register New Patient
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* First Name */}
        <div>
          <label className='block text-sm font-medium mb-1'>First Name</label>
          <input
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='John'
            required
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
        </div>

        {/* Last Name */}
        <div>
          <label className='block text-sm font-medium mb-1'>Last Name</label>
          <input
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='Doe'
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
        </div>

        {/* DOB */}
        <div>
          <label className='block text-sm font-medium mb-1'>
            Date of Birth
          </label>
          <input
            type='date'
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            required
            value={form.DOB}
            onChange={(e) => setForm({ ...form, DOB: e.target.value })}
          />
        </div>

        {/* Age */}
        <div>
          <label className='block text-sm font-medium mb-1'>Age</label>
          <input
            type='number'
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100'
            placeholder='Age'
            value={
              form.DOB
                ? (() => {
                    const today = new Date();
                    const dob = new Date(form.DOB);
                    let age = today.getFullYear() - dob.getFullYear();
                    const m = today.getMonth() - dob.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                      age--;
                    }
                    return age > 0 ? age : "";
                  })()
                : ""
            }
            readOnly
            tabIndex={-1}
          />
        </div>

        {/* Gender */}
        <div>
          <label className='block text-sm font-medium mb-1'>Gender</label>
          <select
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            required
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value='' disabled>
              Select Gender
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        {/* Contact */}
        <div>
          <label className='block text-sm font-medium mb-1'>Contact</label>
          <input
            type='number'
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='9876543210'
            required
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
        </div>

        {/* Email */}
        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='john@example.com'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Address */}
        <div className='md:col-span-2'>
          <label className='block text-sm font-medium mb-1'>Address</label>
          <textarea
            rows={2}
            required
            className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='123 Main St, Springfield'
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition-colors'
      >
        Register Patient
      </button>
    </form>
  );
}
