import { Resident, Shelter } from "./types";

export const shelters: Shelter[] = [
  { id: "s1", name: "본성경로당", type: "경로당", address: "경남 진주시 본성동 12-3", lat: 35.1962, lng: 128.0872 },
  { id: "s2", name: "중앙동주민센터", type: "동주민센터", address: "경남 진주시 중앙동 45", lat: 35.1901, lng: 128.0855 },
  { id: "s3", name: "평안경로당", type: "경로당", address: "경남 진주시 평안동 78-1", lat: 35.1823, lng: 128.0791 },
  { id: "s4", name: "상봉동주민센터", type: "동주민센터", address: "경남 진주시 상봉동 21", lat: 35.1998, lng: 128.0937 },
  { id: "s5", name: "봉안경로당", type: "경로당", address: "경남 진주시 봉안동 9", lat: 35.1755, lng: 128.0803 },
  { id: "s6", name: "옥봉동주민센터", type: "동주민센터", address: "경남 진주시 옥봉동 33-2", lat: 35.1934, lng: 128.0999 },
  { id: "s7", name: "판문경로당", type: "경로당", address: "경남 진주시 판문동 5-6", lat: 35.1710, lng: 128.1042 },
  { id: "s8", name: "강남동주민센터", type: "동주민센터", address: "경남 진주시 강남동 14", lat: 35.1869, lng: 128.0918 },
];

export const residents: Resident[] = [
  { id: "r1", name: "김순자", address: "경남 진주시 본성동 8", checkedIn: false, checkedInAt: null },
  { id: "r2", name: "이만수", address: "경남 진주시 중앙동 21", checkedIn: false, checkedInAt: null },
  { id: "r3", name: "박영희", address: "경남 진주시 평안동 3-1", checkedIn: false, checkedInAt: null },
  { id: "r4", name: "최용식", address: "경남 진주시 상봉동 9", checkedIn: false, checkedInAt: null },
  { id: "r5", name: "정말순", address: "경남 진주시 봉안동 15", checkedIn: false, checkedInAt: null },
  { id: "r6", name: "한기철", address: "경남 진주시 옥봉동 4", checkedIn: false, checkedInAt: null },
  { id: "r7", name: "오순희", address: "경남 진주시 판문동 22", checkedIn: false, checkedInAt: null },
  { id: "r8", name: "강덕수", address: "경남 진주시 강남동 6-2", checkedIn: false, checkedInAt: null },
];
