import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from './HeartIcon';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  title: string;
  isLiked: boolean;
  onBack: () => void;
  onShare: () => void;
  onLike: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, isLiked, onBack, onShare, onLike }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.stickyHeader}>
      <View style={styles.headerContent}>
        {/* 返回按钮 */}
        <TouchableOpacity onPress={onBack} style={styles.headerButton}>
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>

        {/* 标题 - 绝对居中 */}
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>

        {/* 右侧按钮组 */}
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton} onPress={onShare}>
            <MaterialIcon name="share" size={20} color={theme.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton} onPress={onLike}>
            <HeartIcon isLiked={isLiked} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;