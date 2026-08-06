export interface Shelter {
  id: string;
  name: string;
  type: "경로당" | "동주민센터";
  address: string;
  lat: number;
  lng: number;
}

export interface Resident {
  id: string;
  name: string;
  address: string;
  checkedIn: boolean;
  checkedInAt: string | null;
}
