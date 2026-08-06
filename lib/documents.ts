export interface DocumentGuide {
  name: string;
  needed: string;
  methods: string;
  counter: string;
}

// 국민이 자주 발급받는 공인문서 10종
export const documentGuides: DocumentGuide[] = [
  {
    name: "주민등록등본",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "읍·면·동 주민센터",
  },
  {
    name: "주민등록초본",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "읍·면·동 주민센터",
  },
  {
    name: "가족관계증명서",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "읍·면·동 주민센터, 시·군·구청",
  },
  {
    name: "기본증명서 (출생·사망 등 신고 내용 확인)",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "읍·면·동 주민센터, 시·군·구청",
  },
  {
    name: "혼인관계증명서",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "읍·면·동 주민센터, 시·군·구청",
  },
  {
    name: "토지대장",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "시·군·구청 지적과, 읍·면·동 주민센터",
  },
  {
    name: "건축물대장",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "시·군·구청 건축과, 읍·면·동 주민센터",
  },
  {
    name: "등기부등본 (부동산 등기사항전부증명서)",
    needed: "신분증, 부동산 주소",
    methods: "온라인 열람·발급 / 무인발급기 / 방문",
    counter: "전국 등기소",
  },
  {
    name: "인감증명서",
    needed: "신분증 (부동산·대출 관련 용도는 본인 방문 필수)",
    methods: "일반용만 온라인 발급 가능 / 재산 관련 용도는 방문 필수",
    counter: "읍·면·동 주민센터",
  },
  {
    name: "납세증명서",
    needed: "신분증",
    methods: "온라인 발급 / 무인발급기 / 방문",
    counter: "세무서, 읍·면·동 주민센터",
  },
];
