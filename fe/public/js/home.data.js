/* 도파민 공작소 홈 - shared data and pure helpers */
(function initHomeData(global) {
  const SERVICES = [
    { id: 'hoxy-number', name: 'HOXY', emoji: '🎱', url: '/dunsmile/hoxy-number/', desc: '무료 로또 번호 생성기 - 행운의 번호를 추천받고 당첨 확인까지', fullName: 'HOXY NUMBER', category: 'luck' },
    { id: 'rich-face', name: '부자상?', emoji: '👤', url: '/dunsmile/rich-face/', desc: 'AI 관상 분석으로 알아보는 나의 부자 확률', fullName: '부자가 될 상인가?', category: 'fortune' },
    { id: 'daily-fortune', name: '운세', emoji: '🔮', url: '/dunsmile/daily-fortune/', desc: '별자리, 띠, 사주로 보는 오늘의 종합 운세', fullName: '오늘의 운세', category: 'fortune' },
    { id: 'balance-game', name: '밸런스', emoji: '⚖️', url: '/dunsmile/balance-game/', desc: '두 선택 중 하나를 고르고, 전체 선택 비율을 확인해보세요', fullName: '오늘의 밸런스 게임', category: 'fun' },
    { id: 'name-compatibility', name: '이름궁합', emoji: '💞', url: '/dunsmile/name-compatibility/', desc: '두 이름을 입력하면 케미 점수와 궁합 키워드를 확인할 수 있어요', fullName: '이름 궁합 테스트', category: 'fortune' },
    { id: 'market-sentiment', name: '시장감성', emoji: '📈', url: '/dunsmile/market-sentiment/', desc: '펨코·디씨 게시글 기반 주식/코인 커뮤니티 감성 분석', fullName: '시장 감성 레이더', category: 'finance' },
    { id: 'tarot-reading', name: '타로', emoji: '🃏', url: '/dunsmile/tarot-reading/', desc: '78장 타로 카드가 전하는 오늘의 메시지, 무료 타로 리딩', fullName: 'ONE DAY MY CARD', category: 'fortune' },
    { id: 'dopamine-lab', name: '실험실', emoji: '🧪', url: '/dunsmile/about/', desc: '신규 실험형 서비스를 가장 먼저 만나보는 프리뷰 라운지', fullName: '도파민 랩 프리뷰', category: 'fun' },
  ];

  const FORTUNE_SERVICES = SERVICES.filter((s) => s.category === 'fortune');

  const SERVICE_BANNERS = {
    'hoxy-number': '/assets/banners/banner-hoxy-number.svg',
    'rich-face': '/assets/banners/banner-rich-face.svg',
    'daily-fortune': '/assets/banners/banner-daily-fortune.svg',
    'balance-game': '/assets/banners/banner-balance-game.svg',
    'name-compatibility': '/assets/banners/banner-name-compatibility.svg',
    'market-sentiment': '/assets/banners/banner-market-sentiment.svg',
    'tarot-reading': '/assets/banners/banner-tarot-reading.svg',
    'dopamine-lab': '/assets/banners/banner-dopamine-lab.svg',
  };

  function makeDummyArt(title, tone = 'blue') {
    const palette = {
      blue: ['#0f172a', '#172554', '#2563eb'],
      violet: ['#180f2f', '#312e81', '#7c3aed'],
      emerald: ['#06231a', '#064e3b', '#10b981'],
      amber: ['#261507', '#78350f', '#f59e0b'],
    };
    const [base, mid, accent] = palette[tone] || palette.blue;
    const safeTitle = encodeURIComponent(title);
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 780'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='${encodeURIComponent(base)}'/%3E%3Cstop offset='55%25' stop-color='${encodeURIComponent(mid)}'/%3E%3Cstop offset='100%25' stop-color='${encodeURIComponent(accent)}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='780' fill='url(%23g)'/%3E%3Ccircle cx='982' cy='92' r='180' fill='white' fill-opacity='0.09'/%3E%3Ccircle cx='260' cy='670' r='240' fill='white' fill-opacity='0.05'/%3E%3Ctext x='72' y='660' fill='white' fill-opacity='0.88' font-size='74' font-family='Pretendard, Noto Sans KR, sans-serif' font-weight='700'%3E${safeTitle}%3C/text%3E%3C/svg%3E`;
  }

  function serviceBanner(service) {
    return SERVICE_BANNERS[service.id] || '/assets/banners/banner-hoxy-number.png';
  }

  function categoryPillLabel(category) {
    if (category === 'fortune') return '운세';
    if (category === 'finance') return '데이터';
    if (category === 'luck') return '유틸';
    return '플레이';
  }

  function latestServiceTags(service) {
    const tagMap = {
      'hoxy-number': ['유틸', '랜덤번호'],
      'rich-face': ['운세', 'AI관상'],
      'daily-fortune': ['운세', '오늘운세'],
      'balance-game': ['플레이', '밸런스'],
      'name-compatibility': ['운세', '이름궁합'],
      'market-sentiment': ['데이터', '시장감성'],
      'tarot-reading': ['운세', '타로'],
      'dopamine-lab': ['플레이', '프리뷰'],
    };

    return tagMap[service.id] || [categoryPillLabel(service.category)];
  }

  global.HomeData = {
    SERVICES,
    FORTUNE_SERVICES,
    SERVICE_BANNERS,
    makeDummyArt,
    serviceBanner,
    categoryPillLabel,
    latestServiceTags,
  };
})(window);
