export interface ReadingRecord {
  id: string;
  novel: {
    id: string;
    title: string;
    author: string;
    cover: string;
  };
  lastChapter: string;
  progress: number;
  lastReadTime: string;
  readTime: string;
  date: string;
}

export const mockReadingHistory: ReadingRecord[] = [
  {
    id: '1',
    novel: {
      id: '1',
      title: '修仙从养鸡开始',
      author: '养鸡大师',
      cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=400&fit=crop'
    },
    lastChapter: '第2847章：鸡蛋的终极奥秘',
    progress: 85,
    lastReadTime: '2小时前',
    readTime: '3小时20分',
    date: '2025-01-20'
  },
  {
    id: '2',
    novel: {
      id: '2',
      title: '霸道总裁的替身新娘',
      author: '言情女王',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
    },
    lastChapter: '第1586章：大结局',
    progress: 100,
    lastReadTime: '1天前',
    readTime: '2小时45分',
    date: '2025-01-19'
  },
  {
    id: '3',
    novel: {
      id: '3',
      title: '末世重生之女王归来',
      author: '末世生存者',
      cover: 'https://images.unsplash.com/photo-1609902726285-00668009f004?w=300&h=400&fit=crop'
    },
    lastChapter: '第1234章：末世女王的威严',
    progress: 57,
    lastReadTime: '2天前',
    readTime: '4小时15分',
    date: '2025-01-18'
  },
  {
    id: '4',
    novel: {
      id: '4',
      title: '星际机甲战神',
      author: '机甲狂人',
      cover: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop'
    },
    lastChapter: '第890章：战神觉醒',
    progress: 27,
    lastReadTime: '3天前',
    readTime: '1小时30分',
    date: '2025-01-17'
  },
  {
    id: '5',
    novel: {
      id: '5',
      title: '重生之都市仙尊',
      author: '都市修仙者',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop'
    },
    lastChapter: '第567章：仙尊归来',
    progress: 16,
    lastReadTime: '1周前',
    readTime: '45分钟',
    date: '2025-01-13'
  }
];

export const mockStats = [
  { label: '总阅读时长', value: '156小时', icon: 'access-time' },
  { label: '阅读天数', value: '89天', icon: 'calendar-today' },
  { label: '阅读书籍', value: '23本', icon: 'menu-book' }
];