"use client";

interface ConfirmModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message: string;
}

export default function ConfirmModal({
  open,
  onCancel,
  onConfirm,
  message,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className='fixed inset-0 flex items-center bg-blue-100/50 justify-center shadow-sky-300 z-50 bg-opacity-30'>
      <div className='bg-white rounded-lg shadow-xl p-6 max-w-sm w-full'>
        <h2 className='text-lg font-semibold mb-4 text-gray-800'>{message}</h2>
        <div className='flex justify-end gap-3'>
          <button
            onClick={onCancel}
            className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
