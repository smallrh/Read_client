export interface DownloadedBook {
  id: string;
  novel: {
    id: string;
    title: string;
    author: string;
    cover: string;
  };
  chapters: number;
  downloadedChapters: number;
  size: string;
  status: 'completed' | 'downloading' | 'paused' | 'waiting' | 'error';
  downloadDate: string;
  progress?: number;
  speed?: string;
}

export interface StorageInfo {
  used: number;
  total: number;
  available: number;
}

export const mockDownloadedBooks: DownloadedBook[] = [
  {
    id: '1',
    novel: {
      id: '1',
      title: '修仙从养鸡开始',
      author: '养鸡大师',
      cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=400&fit=crop'
    },
    chapters: 2847,
    downloadedChapters: 2847,
    size: '12.5MB',
    status: 'completed',
    downloadDate: '2025-01-20'
  },
  {
    id: '2',
    novel: {
      id: '2',
      title: '霸道总裁的替身新娘',
      author: '言情女王',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
    },
    chapters: 1586,
    downloadedChapters: 1586,
    size: '8.3MB',
    status: 'completed',
    downloadDate: '2025-01-19'
  },
  {
    id: '3',
    novel: {
      id: '3',
      title: '末世重生之女王归来',
      author: '末世生存者',
      cover: 'https://images.unsplash.com/photo-1609902726285-00668009f004?w=300&h=400&fit=crop'
    },
    chapters: 2156,
    downloadedChapters: 1234,
    size: '7.2MB',
    status: 'paused',
    downloadDate: '2025-01-18'
  }
];

export const mockDownloadingBooks: DownloadedBook[] = [
  {
    id: '4',
    novel: {
      id: '4',
      title: '星际机甲战神',
      author: '机甲狂人',
      cover: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop'
    },
    chapters: 3245,
    downloadedChapters: 1956,
    progress: 60,
    size: '15.8MB',
    status: 'downloading',
    speed: '2.3MB/s',
    downloadDate: '2025-01-21'
  },
  {
    id: '5',
    novel: {
      id: '5',
      title: '重生之都市仙尊',
      author: '都市修仙者',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop'
    },
    chapters: 3456,
    downloadedChapters: 345,
    progress: 10,
    size: '1.2MB',
    status: 'waiting',
    speed: '0KB/s',
    downloadDate: '2025-01-21'
  }
];

export const mockStorageInfo: StorageInfo = {
  used: 44.2,
  total: 128,
  available: 83.8
};

export const downloadSettings = [
  { 
    label: '仅WiFi下载', 
    value: '已开启', 
    type: 'switch',
    enabled: true 
  },
  { 
    label: '同时下载任务', 
    value: '3个', 
    type: 'select' 
  },
  { 
    label: '自动清理', 
    value: '30天后', 
    type: 'select' 
  }
];