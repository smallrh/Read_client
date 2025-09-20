import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { SwitchItem } from '../../shared';
import { createDownloadSettingsStyles } from './styles/DownloadSettingsStyles';

interface DownloadSettingsProps {
  wifiOnlyDownload: boolean;
  onWifiOnlyDownloadChange: (value: boolean) => void;
  autoDownload: boolean;
  onAutoDownloadChange: (value: boolean) => void;
  downloadNotification: boolean;
  onDownloadNotificationChange: (value: boolean) => void;
}

export const DownloadSettings: React.FC<DownloadSettingsProps> = ({
  wifiOnlyDownload,
  onWifiOnlyDownloadChange,
  autoDownload,
  onAutoDownloadChange,
  downloadNotification,
  onDownloadNotificationChange
}) => {
  const { theme } = useTheme();
  const styles = createDownloadSettingsStyles(theme);

  return (
    <View style={styles.settingsCard}>
      <View style={styles.settingsHeader}>
        <MaterialIcon name="settings" size={20} color={theme.primary} />
        <Text style={styles.settingsTitle}>下载设置</Text>
      </View>
      
      <View style={styles.settingsContent}>
        <SwitchItem
          title="仅WiFi下载"
          description="只在WiFi环境下进行下载，节省流量"
          value={wifiOnlyDownload}
          onValueChange={onWifiOnlyDownloadChange}
        />
        
        <SwitchItem
          title="自动下载更新"
          description="收藏的小说有新章节时自动下载"
          value={autoDownload}
          onValueChange={onAutoDownloadChange}
        />
        
        <SwitchItem
          title="下载完成通知"
          description="下载完成后发送通知提醒"
          value={downloadNotification}
          onValueChange={onDownloadNotificationChange}
        />
      </View>
    </View>
  );
};