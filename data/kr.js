// 한국어 데이터 (kr.js)
// HTML 파일들에서 이 파일을 불러와서 동적으로 텍스트와 이미지를 렌더링합니다.
// 나중에 내용을 수정하고 싶을 때 복잡한 HTML 문서 대신 이 안의 따옴표(" ") 내용이나 이미지 링크만 바꾸면 됩니다.

window.XlabData = {
    // ----------------------------------------------------
    // 전역 설정 (Header, Footer, Meta 등)
    // ----------------------------------------------------
    "global": {
        "siteName": "Xlab",
        "description": "흔들림 없는 세상을 만드는 기술, Xlab 짐벌 카메라 및 솔루션",
        "footerCopyright": "© 2026 Xlab Inc. All rights reserved.",
        "contactEmail": "contact@xlab-corp.dev",
        "contactPhone": "02-1234-5678",
        "contactAddress": "서울특별시 강남구 테헤란로 123, Xlab 타워 10층"
    },

    // ----------------------------------------------------
    // 메인 홈 (index.html)
    // ----------------------------------------------------
    "home": {
        "heroTitle": "흔들림 없는 혁신,\n세상의 모든 움직임을 담다",
        "heroSubtitle": "Xlab의 고정밀 짐벌 카메라와 로보틱스 솔루션으로 한계 없는 비전을 경험하세요.",
        
        // 홈 슬라이더 이미지와 텍스트
        "slides": [
            {
                "category": "신제품 라인업",
                "title": "초경량 전문가용 항공 짐벌 X-Pro 1",
                "btnText": "제품 보기",
                "btnLink": "products.html",
                "image": "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=800&q=80"
            },
            {
                "category": "산업용 솔루션",
                "title": "드론 탑재형 산업 인프라 감시 솔루션",
                "btnText": "솔루션 보기",
                "btnLink": "solutions.html",
                "image": "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&q=80"
            },
            {
                "category": "핵심 기술",
                "title": "AI 기반 초안정화(Ultra-Stable) 알고리즘",
                "btnText": "기업 소개",
                "btnLink": "company.html",
                "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
            }
        ]
    },

    // ----------------------------------------------------
    // 제품 정보 (products.html)
    // ----------------------------------------------------
    "products": {
        "pageTitle": "제품 라인업 (Products)",
        "pageSubtitle": "압도적인 기술력이 집약된 Xlab의 고정밀 짐벌 시리즈",
        "items": [
            {
                "name": "X-Pro 1 (플래그십 항공 짐벌)",
                "spec": "무게: 250g | 호환성: 산업용 드론 전제품 | 배터리: 최대 12시간",
                "desc": "극한의 기상 환경에서도 완벽에 가까운 흔들림 보정을 제공하는 플래그십 모델. 방송 촬영 및 광역 정찰에 적합합니다.",
                "image": "https://images.unsplash.com/photo-1579891461421-aab28ee6d302?w=800&q=80",
                "storeLink": "#" // 추후 네이버 스마트스토어 링크 등으로 대체 가능
            },
            {
                "name": "X-Lite 3 (초소형 로보틱스 짐벌)",
                "spec": "무게: 150g | 호환성: 자율주행 배달 로봇 연동 | 전원: 상시 연동",
                "desc": "가장 작은 폼팩터에 핵심 보정 알고리즘을 담아, 불규칙한 지형을 달리는 4족 보행 로봇의 시야를 흔들림 없이 고정합니다.",
                "image": "https://images.unsplash.com/photo-1493225255756-d8de21b017f8?w=800&q=80",
                "storeLink": "#"
            }
        ]
    },

    // ----------------------------------------------------
    // 솔루션 정보 (solutions.html)
    // ----------------------------------------------------
    "solutions": {
         "pageTitle": "산업별 맞춤형 솔루션 (Solutions)",
         "pageSubtitle": "현장의 문제를 가장 직관적으로 해결하는 Xlab 통합 솔루션",
         "categories": [
             {
                 "title": "드론 카메라 통합 솔루션 (UAV Platform)",
                 "desc": "건설 현장 3D 매핑, 해상 인명 구조, 고압 송전탑 점검 시 흔들림 없는 초고해상도 시야(Vision)를 확보하는 턴키 솔루션.",
                 "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
             },
             {
                 "title": "자율주행/로봇 솔루션 (UGV Platform)",
                 "desc": "계단을 오르는 순찰 로봇이나 산악을 달리는 감시 차량이 악조건 속에서도 안정적으로 장애물을 인식할 수 있도록 카메라 센서 축을 제어합니다.",
                 "image": "https://images.unsplash.com/photo-1620712948343-005691111165?w=800&q=80"
             }
         ]
    },

    // ----------------------------------------------------
    // 기업 (company.html), IR (ir.html) 등 공통
    // ----------------------------------------------------
    "company": {
        "pageTitle": "Xlab 소개",
        "visionTitle": "Mission & Vision",
        "visionDesc": "우리는 흔들림(Instability)을 제거하여, 새로운 차원의 시각 데이터를 세상을 이끌어가는 기술을 만듭니다.",
        "historyTitle": "연혁 (History)",
        "historyDesc": "2024년 창립 이후 방산, 보안, 상업 방송 3대 핵심 분야 진출."
    },

    "ir": {
        "pageTitle": "투자자 정보 (IR)",
        "notice": "현재 상세 지표를 준비 중입니다. 자세한 기업 투자 정보는 아래 Contact 메뉴를 통해 문의 바랍니다."
    },
    "news": {
        "pageTitle": "뉴스 및 PR",
        "notice": "Xlab의 최신 소식이 곧 업데이트될 예정입니다."
    },
    "careers": {
        "pageTitle": "인재 채용",
        "notice": "Xlab과 함께 세상을 바꿀 인력을 찾습니다. (현재 각 직군별 세부 요강 준비 중)"
    }
};
