"use client";

import { useState } from "react";
import { residents as initialResidents } from "@/lib/data";
import { Resident } from "@/lib/types";

function formatTime(iso: string) {
  return new Date(iso).toLocaleString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CheckinPage() {
  const [residents, setResidents] = useState<Resident[]>(initialResidents);

  function toggleCheckedIn(id: string) {
    setResidents((prev) =>
      prev.map((resident) =>
        resident.id === id
          ? {
              ...resident,
              checkedIn: !resident.checkedIn,
              checkedInAt: !resident.checkedIn
                ? new Date().toISOString()
                : null,
            }
          : resident
      )
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">방문 대상자 체크인</h1>
        <p className="text-sm text-gray-600">
          방문 확인 후 이름 옆 체크박스를 눌러주세요.
        </p>
      </div>
      <ul className="divide-y rounded-lg border bg-white">
        {residents.map((resident) => (
          <li
            key={resident.id}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={resident.checkedIn}
                onChange={() => toggleCheckedIn(resident.id)}
                className="h-5 w-5"
              />
              <span>
                <span className="font-medium">{resident.name}</span>
                <span className="ml-2 text-sm text-gray-500">
                  {resident.address}
                </span>
              </span>
            </label>
            <span className="text-sm text-gray-500">
              {resident.checkedIn && resident.checkedInAt
                ? `확인 완료 · ${formatTime(resident.checkedInAt)}`
                : "미확인"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
