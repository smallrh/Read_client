import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createNotificationListStyles } from './styles/NotificationListStyles';

interface Notification {
  id: number;
  type: string;
  icon: string;
  title: string;
  content: string;
  time: string;
  isNew: boolean;
  color: string;
}

interface NotificationListProps {
  notifications: Notification[];
  onNotificationPress?: (notification: Notification) => void;
  onMarkAllRead?: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationPress,
  onMarkAllRead
}) => {
  const { theme } = useTheme();
  const styles = createNotificationListStyles(theme);

  const renderNotification = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[styles.notificationItem, item.isNew && styles.notificationItemNew]}
      onPress={() => onNotificationPress?.(item)}
      activeOpacity={0.8}
    >
      <View style={[styles.notificationIcon, { backgroundColor: item.color }]}>
        <MaterialIcon name={item.icon} size={20} color={theme.primary} />
      </View>
      
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          {item.isNew && <View style={styles.newBadge} />}
        </View>
        
        <Text style={styles.notificationText}>{item.content}</Text>
        
        <View style={styles.notificationFooter}>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
      
      <View style={styles.notificationActions}>
        <MaterialIcon name="chevron-right" size={20} color={theme.textMuted} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listCard}>
      <View style={styles.listHeader}>
        <View style={styles.listTitleContainer}>
          <MaterialIcon name="notifications" size={20} color={theme.primary} />
          <Text style={styles.listTitle}>通知消息</Text>
        </View>
        
        {onMarkAllRead && (
          <TouchableOpacity onPress={onMarkAllRead} style={styles.markAllReadButton}>
            <Text style={styles.markAllReadText}>全部已读</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View>
        {notifications.map((item, index) => (
          <View key={item.id.toString()}>
            {renderNotification({ item })}
            {index < notifications.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </View>
    </View>
  );
};