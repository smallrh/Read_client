import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { createSettingCardStyles } from './styles/SettingCardStyles';

interface SettingCardProps {
  title: string;
  subtitle?: string;
  icon: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export const SettingCard: React.FC<SettingCardProps> = ({
  title,
  subtitle,
  icon,
  children,
  isLast = false
}) => {
  const { theme } = useTheme();
  const styles = createSettingCardStyles(theme);

  return (
    <View style={[styles.settingCard, isLast && styles.lastCard]}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <MaterialIcon name={icon} size={20} color={theme.primary} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  );
};