import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "分类",
    icon: "type",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "标星文章",
    icon: "support",
    link: "/star/",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline/",
  },
  {
    text: "常用网站",
    icon: "page",
    children: [
      {
        text: "官方文档集合",
        link: "/official_set.md",
        icon: "book"
      },
    ]
  },

]);
