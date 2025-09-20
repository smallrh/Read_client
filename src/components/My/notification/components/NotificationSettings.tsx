import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { SwitchItem } from '../../shared';
import { createNotificationSettingsStyles } from './styles/NotificationSettingsStyles';

interface NotificationSettingsProps {
  updateNotifications: boolean;
  onUpdateNotificationsChange: (value: boolean) => void;
  activityNotifications: boolean;
  onActivityNotificationsChange: (value: boolean) => void;
  systemNotifications: boolean;
  onSystemNotificationsChange: (value: boolean) => void;
  soundEnabled: boolean;
  onSoundEnabledChange: (value: boolean) => void;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  updateNotifications,
  onUpdateNotificationsChange,
  activityNotifications,
  onActivityNotificationsChange,
  systemNotifications,
  onSystemNotificationsChange,
  soundEnabled,
  onSoundEnabledChange
}) => {
  const { theme } = useTheme();
  const styles = createNotificationSettingsStyles(theme);

  return (
    <View style={styles.settingsCard}>
      <View style={styles.settingsHeader}>
        <MaterialIcon name="settings" size={20} color={theme.primary} />
        <Text style={styles.settingsTitle}>通知设置</Text>
      </View>
      
      <View style={styles.settingsContent}>
        <SwitchItem
          title="更新通知"
          description="收藏的小说有更新时推送通知"
          value={updateNotifications}
          onValueChange={onUpdateNotificationsChange}
        />
        
        <SwitchItem
          title="活动通知"
          description="有新活动、签到奖励等消息时通知"
          value={activityNotifications}
          onValueChange={onActivityNotificationsChange}
        />
        
        <SwitchItem
          title="系统通知"
          description="系统维护、版本更新等重要消息"
          value={systemNotifications}
          onValueChange={onSystemNotificationsChange}
        />
        
        <SwitchItem
          title="声音提示"
          description="接收通知时播放提示音"
          value={soundEnabled}
          onValueChange={onSoundEnabledChange}
        />
      </View>
    </View>
  );
};