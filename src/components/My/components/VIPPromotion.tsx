import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { createVIPPromotionStyles } from './styles/VIPPromotionStyles';

interface VIPPromotionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  price?: string;
  onUpgradePress?: () => void;
}

export const VIPPromotion: React.FC<VIPPromotionProps> = ({
  title = '升级VIP会员',
  description = '享受无广告阅读、海量书库、离线下载等特权',
  buttonText = '立即升级',
  price = '首月仅需 ¥9.9',
  onUpgradePress
}) => {
  const { theme } = useTheme();
  const styles = createVIPPromotionStyles(theme);

  const handleUpgradePress = () => {
    if (onUpgradePress) {
      onUpgradePress();
    } else {
      // Default behavior
      console.log('Upgrade VIP pressed');
    }
  };

  return (
    <View style={styles.vipSection}>
      <View style={styles.vipCard}>
        <View style={styles.vipContent}>
          <View style={styles.vipHeader}>
            <View style={styles.vipIcon}>
              <MaterialIcon name="diamond" size={24} color="#f59e0b" />
              <Text style={styles.vipTitle}>{title}</Text>
            </View>
          </View>
          <Text style={styles.vipDescription}>
            {description}
          </Text>
          <View style={styles.vipActions}>
            <TouchableOpacity 
              style={styles.vipButton}
              onPress={handleUpgradePress}
            >
              <Text style={styles.vipButtonText}>{buttonText}</Text>
            </TouchableOpacity>
            <Text style={styles.vipPrice}>{price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};