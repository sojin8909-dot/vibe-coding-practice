import dynamic from "next/dynamic";
import { shelters } from "@/lib/data";

const ShelterMap = dynamic(() => import("@/components/ShelterMap"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">쉼터 지도</h1>
        <p className="text-sm text-gray-600">
          진주시 경로당·동주민센터 위치입니다. 마커를 눌러 상세 정보를 확인하세요.
        </p>
      </div>
      <ShelterMap shelters={shelters} />
    </div>
  );
}
