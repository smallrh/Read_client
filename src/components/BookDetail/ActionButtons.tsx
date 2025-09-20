import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface ActionButtonsProps {
  isInBookshelf: boolean;
  onStartReading: () => void;
  onAddToBookshelf: () => void;
  onDownload: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isInBookshelf,
  onStartReading,
  onAddToBookshelf,
  onDownload
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.actionContainer}>
      <View style={styles.primaryActions}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={onStartReading}
        >
          <LinearGradient
            colors={[theme.primary, theme.primary]}
            style={styles.primaryButtonGradient}
          >
            <MaterialIcon name="menu-book" size={20} color="#fff" />
            <Text style={styles.primaryButtonText}>开始阅读</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.secondaryButton, isInBookshelf && styles.secondaryButtonActive]}
          onPress={onAddToBookshelf}
        >
          <MaterialIcon
            name={isInBookshelf ? "bookmark" : "bookmark-border"}
            size={20}
            color={isInBookshelf ? '#fff' : theme.primary}
          />
          <Text style={[styles.secondaryButtonText, isInBookshelf && styles.secondaryButtonTextActive]}>
            {isInBookshelf ? '已在书架' : '加入书架'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.downloadButton} onPress={onDownload}>
        <MaterialIcon name="file-download" size={20} color={theme.textSecondary} />
        <Text style={styles.downloadButtonText}>离线下载</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;