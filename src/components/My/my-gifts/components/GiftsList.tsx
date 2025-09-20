import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { Gift } from '../mockData';
import { createGiftsListStyles } from './styles/GiftsListStyles';

interface GiftsListProps {
  gifts: Gift[];
  onUseGift: (giftId: string) => void;
  onDeleteGift: (giftId: string) => void;
}

export const GiftsList: React.FC<GiftsListProps> = ({
  gifts,
  onUseGift,
  onDeleteGift
}) => {
  const { theme } = useTheme();
  const styles = createGiftsListStyles(theme);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unused': return theme.success;
      case 'used': return theme.textMuted;
      case 'expired': return theme.error;
      default: return theme.textSecondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'unused': return '未使用';
      case 'used': return '已使用';
      case 'expired': return '已过期';
      default: return '未知';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'reading_coins': return 'monetization-on';
      case 'vip_time': return 'star';
      case 'physical_gifts': return 'card-giftcard';
      default: return 'card-giftcard';
    }
  };

  return (
    <View style={styles.giftsCard}>
      <View style={styles.giftsHeader}>
        <Text style={styles.giftsTitle}>礼品列表</Text>
        <Text style={styles.giftsCount}>{gifts.length} 个</Text>
      </View>

      <View style={styles.giftsList}>
        {gifts.map((gift) => (
          <View key={gift.id} style={styles.giftItem}>
            <View style={styles.giftIconContainer}>
              <MaterialIcon 
                name={getCategoryIcon(gift.category)} 
                size={24} 
                color={theme.primary} 
              />
            </View>
            
            <View style={styles.giftContent}>
              <View style={styles.giftMainInfo}>
                <Text style={styles.giftName}>{gift.name}</Text>
                <View style={[styles.giftStatus, { backgroundColor: `${getStatusColor(gift.status)}20` }]}>
                  <Text style={[styles.giftStatusText, { color: getStatusColor(gift.status) }]}>
                    {getStatusText(gift.status)}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.giftDescription}>{gift.description}</Text>
              
              <View style={styles.giftDetails}>
                <Text style={styles.giftValue}>{gift.type}: {gift.value}</Text>
                <Text style={styles.giftSource}>来源: {gift.source}</Text>
              </View>
              
              <View style={styles.giftFooter}>
                <Text style={styles.giftDate}>
                  获得时间: {new Date(gift.obtainedAt).toLocaleDateString()}
                </Text>
                
                <View style={styles.giftActions}>
                  {gift.status === 'unused' && (
                    <TouchableOpacity 
                      style={styles.useButton}
                      onPress={() => onUseGift(gift.id)}
                    >
                      <Text style={styles.useButtonText}>使用</Text>
                    </TouchableOpacity>
                  )}
                  
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => onDeleteGift(gift.id)}
                  >
                    <MaterialIcon name="delete" size={16} color={theme.error} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};