// My组件子路由配置
export interface MyRouteConfig {
  key: string;
  routeName: keyof MyStackParamList;
  icon: string;
  label: string;
  description: string;
  hasNew?: boolean;
}

// My组件堆栈导航参数列表
export type MyStackParamList = {
  ReadingSettings: undefined;
  Notifications: undefined;
  ReadingHistory: undefined;
  OfflineDownloads: undefined;
  DailyCheckin: undefined;
  MyGifts: undefined;
};

// My组件路由映射配置
export const myRoutes: MyRouteConfig[] = [
  {
    key: 'reading-settings',
    routeName: 'ReadingSettings',
    icon: 'settings',
    label: '阅读设置',
    description: '字体、亮度、翻页方式等',
    hasNew: false,
  },
  {
    key: 'notifications',
    routeName: 'Notifications',
    icon: 'notifications',
    label: '消息通知',
    description: '更新提醒、活动通知',
    hasNew: true,
  },
  {
    key: 'reading-history',
    routeName: 'ReadingHistory',
    icon: 'history',
    label: '阅读历史',
    description: '查看最近阅读记录',
    hasNew: false,
  },
  {
    key: 'offline-downloads',
    routeName: 'OfflineDownloads',
    icon: 'file-download',
    label: '离线下载',
    description: '管理已下载的小说',
    hasNew: false,
  },
  {
    key: 'daily-checkin',
    routeName: 'DailyCheckin',
    icon: 'event-available',
    label: '每日签到',
    description: '签到获得阅读券和积分',
    hasNew: false,
  },
  {
    key: 'my-gifts',
    routeName: 'MyGifts',
    icon: 'card-giftcard',
    label: '我的礼品',
    description: '礼品码兑换、奖励领取',
    hasNew: false,
  },
];

// 根据key查找路由配置
export const getRouteByKey = (key: string): MyRouteConfig | undefined => {
  return myRoutes.find(route => route.key === key);
};

// 根据routeName查找路由配置
export const getRouteByName = (routeName: keyof MyStackParamList): MyRouteConfig | undefined => {
  return myRoutes.find(route => route.routeName === routeName);
};