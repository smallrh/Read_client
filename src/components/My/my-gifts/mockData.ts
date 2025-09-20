export type GiftCategory = 'all' | 'reading_coins' | 'vip_time' | 'physical_gifts' | 'other';

export interface Gift {
  id: string;
  name: string;
  description: string;
  type: string;
  value: string;
  category: GiftCategory;
  status: 'unused' | 'used' | 'expired';
  obtainedAt: string;
  expiresAt?: string;
  source: string;
  image?: string;
}

export const mockGiftsData: Gift[] = [
  {
    id: '1',
    name: '阅读币礼包',
    description: '可用于购买付费章节和书籍',
    type: '阅读币',
    value: '500',
    category: 'reading_coins',
    status: 'unused',
    obtainedAt: '2024-01-15T10:30:00Z',
    expiresAt: '2024-02-15T23:59:59Z',
    source: '每日签到',
    image: ''
  },
  {
    id: '2',
    name: 'VIP会员体验券',
    description: '享受7天VIP会员特权',
    type: '会员时长',
    value: '7天',
    category: 'vip_time',
    status: 'unused',
    obtainedAt: '2024-01-14T09:15:00Z',
    expiresAt: '2024-03-14T23:59:59Z',
    source: '新手任务',
    image: ''
  },
  {
    id: '3',
    name: '精美书签',
    description: '限量版金属书签，阅读必备',
    type: '实物礼品',
    value: '1个',
    category: 'physical_gifts',
    status: 'used',
    obtainedAt: '2024-01-10T14:20:00Z',
    source: '活动奖励',
    image: ''
  },
  {
    id: '4',
    name: '阅读积分',
    description: '可兑换其他奖励的积分',
    type: '积分',
    value: '1000',
    category: 'other',
    status: 'unused',
    obtainedAt: '2024-01-12T16:45:00Z',
    source: '完成任务',
    image: ''
  },
  {
    id: '5',
    name: '月度阅读券',
    description: '一个月内无限制阅读指定书籍',
    type: '阅读券',
    value: '30天',
    category: 'reading_coins',
    status: 'expired',
    obtainedAt: '2023-12-01T08:00:00Z',
    expiresAt: '2023-12-31T23:59:59Z',
    source: '充值赠送',
    image: ''
  },
  {
    id: '6',
    name: 'VIP月卡',
    description: '30天VIP会员权益',
    type: '会员时长',
    value: '30天',
    category: 'vip_time',
    status: 'used',
    obtainedAt: '2024-01-01T00:00:00Z',
    expiresAt: '2024-06-01T23:59:59Z',
    source: '购买获得',
    image: ''
  },
  {
    id: '7',
    name: '定制手机壳',
    description: '个性化定制手机保护壳',
    type: '实物礼品',
    value: '1个',
    category: 'physical_gifts',
    status: 'unused',
    obtainedAt: '2024-01-13T11:30:00Z',
    source: '抽奖获得',
    image: ''
  },
  {
    id: '8',
    name: '超值阅读币',
    description: '限时特惠阅读币礼包',
    type: '阅读币',
    value: '2000',
    category: 'reading_coins',
    status: 'unused',
    obtainedAt: '2024-01-16T15:20:00Z',
    expiresAt: '2024-04-16T23:59:59Z',
    source: '充值活动',
    image: ''
  }
];