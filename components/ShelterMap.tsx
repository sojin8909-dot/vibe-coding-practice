"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Shelter } from "@/lib/types";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function ShelterMap({ shelters }: { shelters: Shelter[] }) {
  const center: [number, number] = [35.1899, 128.0894];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shelters.map((shelter) => (
        <Marker key={shelter.id} position={[shelter.lat, shelter.lng]}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{shelter.name}</p>
              <p>{shelter.type}</p>
              <p>{shelter.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
