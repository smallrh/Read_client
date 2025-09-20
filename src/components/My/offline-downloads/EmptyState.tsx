import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { StyleSheet } from 'react-native';

interface EmptyStateProps {
  onStartDownload?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onStartDownload }) => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 80,
      paddingHorizontal: 32,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.primaryLight,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
      textAlign: 'center',
    },
    description: {
      fontSize: 14,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 32,
    },
    tipsContainer: {
      backgroundColor: theme.primaryLight,
      borderRadius: 12,
      padding: 16,
      marginBottom: 24,
      width: '100%',
    },
    tipsTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tipsList: {
      gap: 8,
    },
    tipItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
    },
    tipDot: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.primary,
      marginTop: 8,
    },
    tipText: {
      fontSize: 12,
      color: theme.textSecondary,
      flex: 1,
      lineHeight: 18,
    },
    startButton: {
      backgroundColor: theme.primary,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    startButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.surface,
    },
  });

  const tips = [
    'WiFi环境下载更省流量',
    '支持后台下载和断点续传',
    '下载后可离线阅读',
    '自动清理过期文件'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcon name="file-download" size={40} color={theme.primary} />
      </View>
      
      <Text style={styles.title}>暂无离线下载</Text>
      <Text style={styles.description}>
        下载小说到本地，随时随地享受阅读{'\n'}
        无需网络，节省流量
      </Text>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>
          <MaterialIcon name="lightbulb" size={16} color={theme.primary} style={{ marginRight: 4 }} />
          下载小贴士
        </Text>
        <View style={styles.tipsList}>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <View style={styles.tipDot} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>
      
      {onStartDownload && (
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={onStartDownload}
          activeOpacity={0.8}
        >
          <MaterialIcon name="explore" size={20} color={theme.surface} />
          <Text style={styles.startButtonText}>去发现好书</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EmptyState;