export interface WeeklyReward {
  day: number;
  reward: string;
  icon: string;
  claimed: boolean;
  isToday?: boolean;
  isSpecial?: boolean;
}

export interface MonthlyStats {
  consecutiveDays: number;
  totalDays: number;
  totalRewards: number;
  level: number;
}

export interface Achievement {
  title: string;
  description: string;
  progress: number;
  completed: boolean;
  reward: string;
}

export interface CheckinData {
  currentDay: number;
  checkedDays: number;
  isCheckedToday: boolean;
  weeklyRewards: WeeklyReward[];
  monthlyStats: MonthlyStats;
  achievements: Achievement[];
}

export const mockCheckinData: CheckinData = {
  currentDay: 5,
  checkedDays: 4,
  isCheckedToday: false,
  weeklyRewards: [
    { day: 1, reward: '阅读券×1', icon: 'menu-book', claimed: true },
    { day: 2, reward: '积分×10', icon: 'stars', claimed: true },
    { day: 3, reward: '阅读券×2', icon: 'menu-book', claimed: true },
    { day: 4, reward: '积分×20', icon: 'stars', claimed: true },
    { day: 5, reward: '阅读券×3', icon: 'menu-book', claimed: false, isToday: true },
    { day: 6, reward: '积分×30', icon: 'stars', claimed: false },
    { day: 7, reward: '豪华礼包', icon: 'card-giftcard', claimed: false, isSpecial: true }
  ],
  monthlyStats: {
    consecutiveDays: 4,
    totalDays: 18,
    totalRewards: 156,
    level: 3
  },
  achievements: [
    {
      title: '签到新手',
      description: '连续签到3天',
      progress: 100,
      completed: true,
      reward: '称号+积分×50'
    },
    {
      title: '坚持不懈',
      description: '连续签到7天',
      progress: 57,
      completed: false,
      reward: '阅读券×10'
    },
    {
      title: '月度达人',
      description: '单月签到25天',
      progress: 72,
      completed: false,
      reward: '豪华大礼包'
    }
  ]
};