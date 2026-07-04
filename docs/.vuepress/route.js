import { defineCollections } from 'vuepress-theme-plume'

const enCollections = defineCollections([
    {
        type: 'post',
        dir: 'notes/documents',
        link: '/blog/',
    },
    {
        type: 'doc',
        dir: 'notes/get-started',
        linkPrefix: '/get-started/',
        sidebar: [
            { text: 'Introduction', link: 'introduction' },
            {
                text: 'Installation',
                prefix: 'installation',
                collapsed: true,
                items: [
                    'android',
                    'web',
                    'windows'
                ]
            },
            { text: 'Sign Up & Log In', link: 'login' },
        ]
    },
    {
        type: 'doc',
        dir: 'notes/features',
        linkPrefix: '/features/',
        sidebar: [
            {
                text: 'Dashboard',
                items: [
                    { text: 'Home', link: 'home' },
                    { text: 'Login', link: 'auth' },
                    { text: 'Settings', link: 'settings' },
                ]
            },
            {
                text: 'Live Info',
                items: [
                    { text: 'Trade Market', link: 'trade-market' },
                    { text: 'World Boss', link: 'world-boss' },
                    { text: 'News', link: 'news' },
                ]
            },
            {
                text: 'Calculators',
                items: [
                    { text: 'Ship Upgrading', link: 'ship-upgrading', icon: 'fa6-solid:ship' },
                    { text: 'Bartering', link: 'bartering' },
                    { text: 'Lightstone Combination', link: 'lightstone-combination' },
                    { text: 'Color Counter', link: 'color-counter' },
                ]
            },
            {
                text: 'Windows Only',
                items: [
                    { text: 'In-game Overlay', link: 'overlay' },
                    { text: 'Shutdown Scheduler', link: 'shutdown-scheduler' },
                ]
            },
            { text: 'Party Finder', link: 'party-finder' },
            { text: 'Broadcast Widgets', link: 'broadcast-widgets' },
        ]
    }
])

const koCollections = defineCollections([
    {
        type: 'post',
        dir: 'notes/documents',
        link: '/blog/',
    },
    {
        type: 'doc',
        dir: 'notes/get-started',
        linkPrefix: '/get-started/',
        sidebar: [
            { text: '서비스 소개', link: 'introduction' },
            {
                text: '설치 방법',
                prefix: 'installation',
                collapsed: true,
                items: [
                    'android',
                    'web',
                    'windows'
                ]
            },
            { text: '회원가입 & 로그인', link: 'login' },
        ]
    },
    {
        type: 'doc',
        dir: 'notes/features',
        linkPrefix: '/features/',
        sidebar: [
            {
                text: '대시보드',
                items: [
                    { text: '홈 화면', link: 'home' },
                    { text: '로그인', link: 'auth' },
                    { text: '설정', link: 'settings' },
                ]
            },
            {
                text: '실시간 정보',
                items: [
                    { text: '거래소 시세', link: 'trade-market' },
                    { text: '월드보스', link: 'world-boss' },
                    { text: '뉴스', link: 'news' },
                ]
            },
            {
                text: '계산기',
                items: [
                    { text: '배 강화', link: 'ship-upgrading', icon: 'fa6-solid:ship' },
                    { text: '물물교환', link: 'bartering' },
                    { text: '라이트스톤 조합', link: 'lightstone-combination' },
                    { text: '색 카운터', link: 'color-counter' },
                ]
            },
            {
                text: '데스크톱 전용',
                items: [
                    { text: '인게임 오버레이', link: 'overlay' },
                    { text: '예약 종료', link: 'shutdown-scheduler' },
                ]
            },
            { text: '파티 찾기', link: 'party-finder' },
            { text: '방송 위젯', link: 'broadcast-widgets' },
        ]
    }
])

export { enCollections, koCollections }
