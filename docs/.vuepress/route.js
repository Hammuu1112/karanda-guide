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
        dir: 'notes/guides',
        linkPrefix: '/guides/',
        sidebar: [
            { text: 'Ship Upgrading', link: 'ship-upgrading', icon: 'fa6-solid:ship' },
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
        dir: 'notes/guides',
        linkPrefix: '/guides/',
        sidebar: [
            { text: '선박 증축', link: 'ship-upgrading', icon: 'fa6-solid:ship' },
        ]
    }
])

export { enCollections, koCollections }
