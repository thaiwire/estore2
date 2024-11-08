"use client";

import { DeleteIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import Link from "next/link";

const Um = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const um = [
    { id: 1, name: "Kg" },
    { id: 2, name: "Ton" },
    { id: 3, name: "Meter" },
  ];

  const handleDelete = () => {};
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl p-2">
          {" "}
          UM (หน่วยนับ) Management{" "}
        </h1>
        <button>
          <Link href="/ums/add" className="custom-primary-btn">
            Add หน่วยนับ
          </Link>
        </button>
      </div>

      <hr className="my-5" />

      <div className="mt-20">
        <table className="custom-table">
          <thead className="border-y-2 border-gray-400">
            <tr>
              <th> Sr. No.</th>
              <th>UM</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium text-lg text-center">
            {um.map((um, key) => (
              <tr key={um.id}>
                <td>{key + 1}</td>
                <td>{um.name}</td>
                <td className="flex items-center gap-x-3">
                  <Link href={`/users/edit/${um.id}`} className="w-fit">
                    <EditIcon />
                  </Link>
                  <Button
                    className="bg-transparent p-0 px-2 border-none text-red-500"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setSelectedId(um.id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            setIsOpen={setIsDeleteModalOpen}
            onCancel={() => setIsDeleteModalOpen(false)}
            handleConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Um;
