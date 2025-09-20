import React, { useState } from 'react';
import { 
  View, 
  ScrollView
} from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { createStyles } from './styles';
import { CommonHeader } from '../shared';
import { NotificationSettings, NotificationList } from './components';

interface NotificationsProps {
  onBack?: () => void;
}

const NotificationScreen: React.FC<NotificationsProps> = ({ onBack }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // 通知设置状态
  const [updateNotifications, setUpdateNotifications] = useState(true);
  const [activityNotifications, setActivityNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const notifications = [
    {
      id: 1,
      type: 'update',
      icon: 'book',
      title: '《修仙从养鸡开始》更新了',
      content: '第2848章：鸡蛋的终极奥秘 已发布',
      time: '2分钟前',
      isNew: true,
      color: 'rgba(59, 130, 246, 0.1)'
    },
    {
      id: 2,
      type: 'gift',
      icon: 'card-giftcard',
      title: '签到奖励已到账',
      content: '获得阅读券×3，继续保持每日签到吧！',
      time: '1小时前',
      isNew: true,
      color: 'rgba(245, 158, 11, 0.1)'
    },
    {
      id: 3,
      type: 'like',
      icon: 'favorite',
      title: '收藏的小说有新评论',
      content: '《霸道总裁的替身新娘》获得了新的五星好评',
      time: '3小时前',
      isNew: false,
      color: 'rgba(236, 72, 153, 0.1)'
    },
    {
      id: 4,
      type: 'recommendation',
      icon: 'star',
      title: '为你推荐新书',
      content: '根据你的阅读喜好，推荐《末世重生之女王归来》',
      time: '1天前',
      isNew: false,
      color: 'rgba(139, 69, 193, 0.1)'
    },
    {
      id: 5,
      type: 'update',
      icon: 'book',
      title: '《星际机甲战神》更新了',
      content: '第3246章：最终决战 已发布',
      time: '2天前',
      isNew: false,
      color: 'rgba(16, 185, 129, 0.1)'
    }
  ];

  const settings = [
    { 
      label: '章节更新提醒', 
      description: '收藏的小说有新章节时通知', 
      enabled: true 
    },
    { 
      label: '签到提醒', 
      description: '每日签到时间提醒', 
      enabled: true 
    },
    { 
      label: '推荐通知', 
      description: '接收个性化书籍推荐', 
      enabled: false 
    },
    { 
      label: '活动通知', 
      description: '参与限时活动和福利', 
      enabled: true 
    },
    { 
      label: '评论互动', 
      description: '有人回复你的评论时通知', 
      enabled: false 
    }
  ];

  const [settingsState, setSettingsState] = React.useState(
    settings.reduce((acc, setting) => {
      acc[setting.label] = setting.enabled;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSetting = (label: string) => {
    setSettingsState(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleNotificationPress = (notification: any) => {
    console.log('Notification pressed:', notification);
  };

  const handleMarkAllRead = () => {
    console.log('Mark all as read');
  };

  return (
    <View style={styles.container}>
      <CommonHeader 
        title="消息通知" 
        onBack={onBack}
        rightAction={{
          icon: "delete",
          onPress: () => console.log('Delete all notifications')
        }}
      />

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Notification Settings */}
        <NotificationSettings
          updateNotifications={updateNotifications}
          onUpdateNotificationsChange={setUpdateNotifications}
          activityNotifications={activityNotifications}
          onActivityNotificationsChange={setActivityNotifications}
          systemNotifications={systemNotifications}
          onSystemNotificationsChange={setSystemNotifications}
          soundEnabled={soundEnabled}
          onSoundEnabledChange={setSoundEnabled}
        />

        {/* Notifications List */}
        <NotificationList
          notifications={notifications}
          onNotificationPress={handleNotificationPress}
          onMarkAllRead={handleMarkAllRead}
        />
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;