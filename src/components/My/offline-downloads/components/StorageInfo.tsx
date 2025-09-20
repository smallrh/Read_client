import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createStorageInfoStyles } from './styles/StorageInfoStyles';

interface StorageInfoProps {
  storageInfo: {
    used: number;
    available: number;
    total: number;
    usedFormatted: string;
    totalFormatted: string;
  };
  onManageStorage?: () => void;
}

export const StorageInfo: React.FC<StorageInfoProps> = ({
  storageInfo,
  onManageStorage
}) => {
  const { theme } = useTheme();
  const styles = createStorageInfoStyles(theme);

  const usagePercentage = (storageInfo.used / storageInfo.total) * 100;

  return (
    <View style={styles.storageCard}>
      <View style={styles.storageHeader}>
        <View style={styles.storageIconContainer}>
          <MaterialIcon name="storage" size={20} color={theme.primary} />
        </View>
        <View style={styles.storageHeaderText}>
          <Text style={styles.storageTitle}>存储空间</Text>
          <Text style={styles.storageSubtitle}>
            已使用 {storageInfo.usedFormatted} / {storageInfo.totalFormatted}
          </Text>
        </View>
        {onManageStorage && (
          <TouchableOpacity onPress={onManageStorage} style={styles.manageButton}>
            <Text style={styles.manageButtonText}>管理</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.storageProgressContainer}>
        <View style={styles.storageProgressBar}>
          <View 
            style={[
              styles.storageProgressFill, 
              { 
                width: `${Math.min(usagePercentage, 100)}%`,
                backgroundColor: usagePercentage > 80 ? theme.error : theme.primary
              }
            ]} 
          />
        </View>
        <Text style={styles.storagePercentage}>{usagePercentage.toFixed(1)}%</Text>
      </View>
    </View>
  );
};