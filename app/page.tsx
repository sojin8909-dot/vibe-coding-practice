"use client";

import { useState } from "react";
import { findNearestShelter } from "@/lib/shelters";

function openWalkingDirections(from: GeolocationCoordinates) {
  const nearest = findNearestShelter({ lat: from.latitude, lng: from.longitude });
  const name = encodeURIComponent(nearest.name);

  const appUrl =
    `nmap://route/walk?slat=${from.latitude}&slng=${from.longitude}&sname=${encodeURIComponent("현위치")}` +
    `&dlat=${nearest.lat}&dlng=${nearest.lng}&dname=${name}&appname=heatwave-guardian`;

  const webFallbackUrl = `https://map.naver.com/p/search/${name}?c=${nearest.lng},${nearest.lat},17,0,0,0,dh`;

  let appOpened = false;
  const onVisibilityChange = () => {
    if (document.hidden) appOpened = true;
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = appUrl;
  document.body.appendChild(iframe);

  setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange);
    document.body.removeChild(iframe);
    if (!appOpened) {
      window.open(webFallbackUrl, "_blank");
    }
  }, 1200);
}

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "locating" | "error">("idle");

  function handleFindShelter() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus("idle");
        openWalkingDirections(position.coords);
      },
      () => {
        setStatus("error");
      }
    );
  }

  return (
    <div className="space-y-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">폭염지킴이</h1>
        <p className="text-sm text-gray-600">
          버튼을 누르면 현재 위치에서 가장 가까운 무더위쉼터까지 도보 길찾기를
          바로 열어드려요.
        </p>
      </div>
      <button
        onClick={handleFindShelter}
        className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700"
      >
        근처 무더위쉼터 도보 길찾기
      </button>
      {status === "locating" && (
        <p className="text-sm text-gray-500">위치를 확인하는 중...</p>
      )}
      {status === "error" && (
        <p className="text-sm text-gray-500">
          위치 확인 권한을 허용해야 길찾기를 열 수 있어요.
        </p>
      )}
    </div>
  );
}
