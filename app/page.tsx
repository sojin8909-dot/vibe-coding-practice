"use client";

import { useState } from "react";
import { documentGuides } from "@/lib/documents";

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
  const [showSortGuide, setShowSortGuide] = useState(false);
  const [showDocButtons, setShowDocButtons] = useState(false);
  const [openDoc, setOpenDoc] = useState<string | null>(null);

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
    <div className="space-y-6 text-center">
      <div>
        <h1 className="text-2xl font-bold">폭염지킴이</h1>
        <p className="mt-1 text-lg text-gray-700">
          버튼을 누르면 현재 위치 근처 장소를 네이버 지도에서 바로 찾아드려요.
          목록에서 원하는 곳을 눌러 도보 길찾기를 시작하세요.
        </p>
      </div>

      <div className="space-y-3">
        {PLACE_BUTTONS.map((button) => (
          <button
            key={button.query}
            onClick={() => handleFind(button.query)}
            className="w-full rounded-lg bg-blue-600 px-6 py-5 text-xl font-semibold text-white hover:bg-blue-700"
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="space-y-3 border-t-2 pt-6">
        <h2 className="text-xl font-bold">서류 발급</h2>
        <button
          onClick={() => setShowDocButtons((prev) => !prev)}
          className="w-full rounded-lg bg-blue-600 px-6 py-5 text-xl font-semibold text-white hover:bg-blue-700"
        >
          서류 발급 준비
        </button>
        {showDocButtons && (
          <div className="space-y-3">
            {documentGuides.map((doc) => (
              <div key={doc.name}>
                <button
                  onClick={() =>
                    setOpenDoc((prev) => (prev === doc.name ? null : doc.name))
                  }
                  className="w-full rounded-lg border-2 border-blue-600 px-4 py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50"
                >
                  {doc.name}
                </button>
                {openDoc === doc.name && (
                  <div className="mt-2 space-y-2 rounded-lg bg-blue-50 p-4 text-left text-lg text-gray-800">
                    <p>
                      <span className="font-semibold">필요한 것: </span>
                      {doc.needed}
                    </p>
                    <p>
                      <span className="font-semibold">발급 방법: </span>
                      {doc.methods}
                    </p>
                    <p>
                      <span className="font-semibold">발급 창구: </span>
                      {doc.counter}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <p className="text-base text-gray-500">
              수수료·절차는 바뀔 수 있으니 정확한 내용은 정부24(gov.kr) 또는
              해당 창구에서 다시 확인해주세요.
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setShowSortGuide((prev) => !prev)}
          className="text-lg text-blue-600 underline"
        >
          검색 결과를 거리순으로 보는 방법
        </button>
        {showSortGuide && (
          <div className="mt-2 rounded-lg bg-blue-50 p-4 text-left text-lg text-gray-700">
            <ol className="list-decimal space-y-1 pl-5">
              <li>위 버튼으로 네이버 지도를 열면 검색 결과 목록이 나와요.</li>
              <li>목록 위쪽에 있는 &quot;관련도순&quot; 글자를 눌러요.</li>
              <li>
                나오는 목록에서 &quot;거리순&quot;을 선택하면 가까운 곳부터
                순서대로 다시 정렬돼요.
              </li>
            </ol>
            <p className="mt-2 text-base text-gray-500">
              네이버 지도 앱 버전에 따라 위치나 표현이 조금 다를 수 있어요.
            </p>
          </div>
        )}
      </div>

      {status === "locating" && (
        <p className="text-lg text-gray-500">위치를 확인하는 중...</p>
      )}
      {status === "error" && (
        <p className="text-lg text-gray-500">
          위치 확인이 안 돼서 전체 지역으로 검색했어요.
        </p>
      )}

      <div className="space-y-2 border-t pt-6">
        <p className="text-lg text-gray-600">
          네이버 지도 앱이 없다면 먼저 설치해주세요.
        </p>
        <div className="flex gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.nhn.android.nmap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-4 text-lg font-medium text-gray-700 hover:bg-gray-100"
          >
            구글플레이에서 설치
          </a>
          <a
            href="https://apps.apple.com/kr/app/id311867728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-4 text-lg font-medium text-gray-700 hover:bg-gray-100"
          >
            앱스토어에서 설치
          </a>
        </div>
      </div>
    </div>
  );
}
