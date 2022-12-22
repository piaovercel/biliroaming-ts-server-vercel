//=============================类型定义区(不用改)=================================
type io = 0 | 1;
type _block_region = ["cn" | "hk" | "tw" | "th"];
//=============================================================================

//==============================API区(不用改)====================================
//搜索、信息查询等APP端功能
export const api_search: string = "https://app.bilibili.com";
//playurl等主要功能 api
export const api_playurl: string = "https://api.bilibili.com";
//==============================================================================

//===========================替换搜索 Fuck Search================================
//添加假番剧作公告板
//标题 <em class="keyword">标签可以重点标注
export const fs_title: string = '功能测试 <em class="keyword">xrz</em>';
//封面
export const fs_cover: string =
  "https://i0.hdslb.com/bfs/face/046974d6dde4af386f7eb4f231b84ec08bad693b.jpg";
//用处不明
export const fs_uri: string = "https://xrz.cool";
//标签-副标题1
export const fs_style: string = "标签1 | 测试";
//标签-副标题2
export const fs_label: string = "标签2 | test";
//番剧分数
export const fs_rating: number = 10;
//打分人数
export const fs_vote: number = 1;
//立即观看按钮-主选项标题
export const fs_watch_button_title: string = "立即观看";
//立即观看按钮-主选项链接
export const fs_watch_button_link: string = "https://cn.bing.com";
//追番按钮-追番
export const fs_follow_button_title: string = "别点";
//追番按钮-取消追番
export const fs_unfollow_button_title: string = "谢邀";
//番剧封面右上角标签
export const fs_badges: string = "萨日朗";
//番剧剧集显示方式 grid-单行方块 horizontal-列表长条
export const fs_selection_style: "grid" | "horizontal" = "horizontal";
//番剧剧集数据
export const fs_episodes = JSON.stringify([
  {
    title: "教程",
    uri: "https://github.com/yujincheng08/BiliRoaming/wiki#使用方法",
  },
  {
    title: "官方反馈群",
    uri: "https://t.me/biliroaming",
    badges: [
      {
        text: "官方",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
  },
  {
    title: "这里没东西",
    uri: "https://www.bilibili.com/video/av928861104",
    badges: [
      {
        text: "愿者上勾",
        text_color: "#FFFFFF",
        text_color_night: "#E5E5E5",
        bg_color: "#FB7299",
        bg_color_night: "#BB5B76",
        border_color: "#FB7299",
        border_color_night: "#BB5B76",
        bg_style: 1,
      },
    ],
  },
]);
//============================================================

//===================NOTION 数据库=============================
//NOTION KEY
export const NOTION_KEY =
  process.env.NOTION_KEY || "secret_***BUrz1***********eknk*****gm";
//NOTION DATABASES
//为空""且不添加环境变量即禁用该功能
export const NOTION_db_blacklist = process.env.NOTION_db_blacklist || "";
export const NOTION_db_log = process.env.NOTION_db_log || "";
//缓存时间 单位：分钟(min) 需打开缓存数据库
export const cache_time = 1000 * 60 * 15;

//======================黑白名单设置============================
//黑名单模式 1-开 0-关
export const blacklist_enabled: io = 1;
//白名单模式 1-开 0-关
export const whitelist_enabled: io = 0;
//验证vip与视频要求 1-开 0-关
export const check_vip_enabled: io = 1;
//禁忌设置-白名单调用vip access_key 1-开 0-关
export const whitelist_vip_enabled: io = 0;
//============================================================

//===================获取公共黑白名单============================
//功能开关 1-开 0-关
export const public_blacklist_enabled: io = 0;
//公共黑名单地址 要求：URL后需可以直接加 UID/mid
export const public_blacklist: string = "https://black.qimo.ink/api/users/";
//============================================================

//=====================限制API调用=============================
//要求登录 1-开 0-关
//TODO 目前要求必须登录，禁止修改，否则程序无法运行
export const need_login: io = 1;
//允许WEB版使用 1-开 0-关
export const web_on: io = 1;
//限制哔哩漫游最低版本(需设置 web_on = 0) 填写数字 0-不限制
//1049为1.6.7的版本号
export const ver_min: number = 1049;
//锁区，填写的是支持的地区 cn-中国大陆 hk-中国香港 tw-中国台湾 th-泰国/新加坡/东南亚地区
export const block_region: _block_region = ["hk"];
//============================================================

//===================封锁类型(不用改)===========================
export enum block_type {
  "web_on已关闭，请使用BiliRoaming" = 1,
  "BiliRoaming版本过低，请更新",
  "黑/白名单数据获取错误，请稍后再试",
  "宁已进入黑名单",
  "白名单模式已启用，您未在白名单中",
  "请登录",
  "缺少参数",
}
export const block = (code: number) => {
  return {
    code: Number(`-${code}`),
    message: `${block_type[code]}(E=${code})`,
  };
};
//============================================================
