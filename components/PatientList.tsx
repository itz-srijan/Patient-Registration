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

export default function PatientLists({ patients }: { patients: Patient[] }) {
  // console.log(patients);
  return (
    <div className='bg-white p-6 rounded-xl shadow-md mt-8'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
        Recently Registered Patients
      </h2>
      {patients.length === 0 ? (
        <p className='text-gray-500 text-center py-4'>No patients found.</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden'>
            <thead className='bg-blue-50 text-left text-gray-600 text-sm font-semibold'>
              <tr>
                <th className='px-4 py-3 border'>ID</th>
                <th className='px-4 py-3 border'>Name</th>
                <th className='px-4 py-3 border'>Age</th>
                <th className='px-4 py-3 border'>Gender</th>
                <th className='px-4 py-3 border'>Contact</th>
                <th className='px-4 py-3 border'>Email</th>
                <th className='px-4 py-3 border'>Address</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {patients.map((p, i) => (
                <tr
                  key={p.id}
                  className={
                    i % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50 hover:bg-gray-100 transition"
                  }
                >
                  <td className='px-4 py-3 border'>{p.id}</td>
                  <td className='px-4 py-3 border'>
                    {p.firstname} {p.lastname || ""}
                  </td>
                  <td className='px-4 py-3 border'>{p.age}</td>
                  <td className='px-4 py-3 border'>{p.gender}</td>
                  <td className='px-4 py-3 border'>{p.contact}</td>
                  <td className='px-4 py-3 border truncate max-w-[200px]'>
                    {p.email || "-"}
                  </td>
                  <td className='px-4 py-3 border truncate max-w-[200px]'>
                    {p.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
