"use client";

import { useState } from "react";

const PLACE_BUTTONS = [
  { label: "근처 무더위쉼터 찾기", query: "무더위쉼터" },
  { label: "근처 동사무소 찾기", query: "동사무소" },
  { label: "근처 면사무소 찾기", query: "면사무소" },
  { label: "근처 시청 찾기", query: "시청" },
];

function openNaverMapSearch(query: string, coords: GeolocationCoordinates | null) {
  const encoded = encodeURIComponent(query);
  const url =
    coords != null
      ? `https://map.naver.com/p/search/${encoded}?c=${coords.longitude},${coords.latitude},15,0,0,0,dh`
      : `https://map.naver.com/p/search/${encoded}`;
  window.open(url, "_blank");
}

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "locating" | "error">("idle");

  function handleFind(query: string) {
    if (!navigator.geolocation) {
      openNaverMapSearch(query, null);
      return;
    }

    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus("idle");
        openNaverMapSearch(query, position.coords);
      },
      () => {
        setStatus("error");
        openNaverMapSearch(query, null);
      }
    );
  }

  return (
    <div className="space-y-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">폭염지킴이</h1>
        <p className="text-sm text-gray-600">
          버튼을 누르면 현재 위치 근처 장소를 네이버 지도에서 바로 찾아드려요.
          목록에서 원하는 곳을 눌러 도보 길찾기를 시작하세요.
        </p>
      </div>
      <div className="space-y-3">
        {PLACE_BUTTONS.map((button) => (
          <button
            key={button.query}
            onClick={() => handleFind(button.query)}
            className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            {button.label}
          </button>
        ))}
      </div>
      {status === "locating" && (
        <p className="text-sm text-gray-500">위치를 확인하는 중...</p>
      )}
      {status === "error" && (
        <p className="text-sm text-gray-500">
          위치 확인이 안 돼서 전체 지역으로 검색했어요.
        </p>
      )}
    </div>
  );
}
