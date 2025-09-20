import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../../context/ThemeContext';
import { createTipsCardStyles } from './styles/TipsCardStyles';

interface TipsCardProps {
  title?: string;
  content?: string;
}

export const TipsCard: React.FC<TipsCardProps> = ({
  title = '签到小贴士',
  content = '每日签到可获得阅读券和积分，连续签到奖励更丰富。错过一天重新开始计数，记得每天来签到哦！'
}) => {
  const { theme } = useTheme();
  const styles = createTipsCardStyles(theme);

  return (
    <View style={styles.tipsCard}>
      <View style={styles.tipsIndicator} />
      <View style={styles.tipsContent}>
        <Text style={styles.tipsTitle}>{title}</Text>
        <Text style={styles.tipsText}>{content}</Text>
      </View>
    </View>
  );
};