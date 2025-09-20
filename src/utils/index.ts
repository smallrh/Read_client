// 格式化阅读量
export const formatViews = (views: number): string => {
  if (views >= 10000) {
    return `${(views / 10000).toFixed(1)}万`;
  }
  return views.toString();
};

// 生成默认章节标题
export const getChapterTitle = (index: number, novelId: string): string => {
  const chapterTitles: { [key: string]: string[] } = {
    '1': ['穿越养鸡场', '神秘的养鸡系统', '第一只母鸡', '鸡蛋的秘密', '养鸡大师'],
    '2': ['生死抉择', '契约开始', '霸道总裁', '替身新娘', '爱恨纠葛'],
    '3': ['重生前夕', '未卜先知', '末世降临', '觉醒异能', '女王归来'],
    '4': ['废材觉醒', '系统觉醒', '机甲试炼', '星际战场', '战神崛起'],
    '5': ['仙尊陨落', '都市重生', '重新修炼', '弥补遗憾', '仙尊归来'],
    '8': ['明帝之死', '重生归来', '复仇开始', '实力觉醒', '神帝之路'],
    '14': ['被驱逐的高手', '网吧老板', '重新开始', '组建战队', '荣耀归来'],
    default: ['开篇', '初入江湖', '奇遇', '成长', '蜕变']
  };

  const titles = chapterTitles[novelId] || chapterTitles.default;
  return titles[index] || `第${index + 1}章`;
};