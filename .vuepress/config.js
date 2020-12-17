module.exports = {
  "title": "HearLingの博客",
  "description": "不爱巧克力爱Chocolate",
  "dest": "public",
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "JS刷题之路",
        "icon": "reco-message",
        "items": [
          {
            "text": "JS刷题之路-栈",
            "link": "/docs/algorithm-stack/"
          }
        ]
      },
      {
        "text": "留言板",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Chocolate1999",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "超逸の博客",
        "desc": "Enjoy when you can, and endure when you must.",
        "avatar": "https://cdn.jsdelivr.net/gh/Chocolate1999/cdn/img/avatar.png",
        "link": "https://yangchaoyi.vip/"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "HearLing",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2020",
    "subSidebar": "auto" //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        clean: false,
        messages: {
          welcome: '我是HearLing欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
  ]
}