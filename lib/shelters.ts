export interface Shelter {
  name: string;
  lat: number;
  lng: number;
}

// 진주시 경로당·동주민센터 예시 좌표 (실제 공공데이터 연동 전까지 사용)
export const shelters: Shelter[] = [
  { name: "본성경로당", lat: 35.1962, lng: 128.0872 },
  { name: "중앙동주민센터", lat: 35.1901, lng: 128.0855 },
  { name: "평안경로당", lat: 35.1823, lng: 128.0791 },
  { name: "상봉동주민센터", lat: 35.1998, lng: 128.0937 },
  { name: "봉안경로당", lat: 35.1755, lng: 128.0803 },
  { name: "옥봉동주민센터", lat: 35.1934, lng: 128.0999 },
  { name: "판문경로당", lat: 35.1710, lng: 128.1042 },
  { name: "강남동주민센터", lat: 35.1869, lng: 128.0918 },
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function distanceMeters(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371000;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function findNearestShelter(from: { lat: number; lng: number }) {
  return shelters.reduce((nearest, shelter) =>
    distanceMeters(from, shelter) < distanceMeters(from, nearest) ? shelter : nearest
  );
}
