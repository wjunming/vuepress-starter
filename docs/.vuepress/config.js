const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
	base: '/docs/',
	locales: {
		'/': {
			// lang: 'en-US',
			title: 'VuePress',
			description: 'Vue-powered Static Site Generator'
		},
		'/zh/': {
			// lang: '简体中文',
			title: 'VuePress',
			description: 'Vue 驱动的静态网站生成器'
		}
	},
	theme: defaultTheme({
		logo: '/images/hero.png',
		repo: 'https://www.wjunming.cn',
		locales: {
			'/': {
				repoLabel: 'My Site',
				selectLanguageName: 'English',
				selectLanguageText: 'Languages',
				navbar: [
					{ text: 'Home', link: '/' },
					{ text: 'Ref', children: [
							{ text: 'Ref1', link: '/guide/about' },
							{ text: 'Ref2', link: '/guide/about2' }
						]
					},
				  { text: 'About', link: '/guide/about' }
				],
				sidebar: [
					{ text: 'Foo', link: '/foo', children: [
					  { text: 'linked-list-cycle', link: '/guide/linked-list-cycle' },
						{ text: 'github', link: 'https://github.com' },
					]},
					'/foo/bar.md'
				],
				notFound: [
					'Not Found'
				],
				backToHome: 'Back to home'
			},
			'/zh/': {
				repoLabel: '个人网站',
				selectLanguageName: '简体中文',
				selectLanguageText: '选择语言',
				toggleColorMode: '切换颜色模式',
				navbar: [
					{ text: '首页', link: '/' },
					{ text: '参考', children: [
							{ text: '参考1', link: '/zh/guide/about' },
							{ text: '参考2', link: '/zh/guide/linked-list-cycle' }
						]
					},
				  { text: '关于我', link: '/zh/guide/about' }
				],
				sidebar: [
					{ text: '测试Foo', link: '/foo', children: [
						{ text: '环形链表', link: '/zh/guide/linked-list-cycle' },
						{ text: 'github', link: 'https://github.com' },
					]},
					'/foo/bar.md'
				],
				notFound: [
	        '这里什么都没有',
	        '我们怎么到这来了？',
	        '这是一个 404 页面',
	        '看起来我们进入了错误的链接',
	      ],
	      backToHome: '回到首页'
			}
		}
	}),
	plugins: [
		searchPlugin({
			locales: {
				'/': {
					placeholder: 'Search'
				},
				'/zh/': {
					placeholder: '搜索'
				}
			}
		})
	]
}