import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { StyleSheet } from 'react-native';

interface EmptyStateProps {
  onStartReading?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onStartReading }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcon name="history" size={40} color={theme.primary} />
      </View>
      
      <Text style={styles.title}>暂无阅读历史</Text>
      <Text style={styles.description}>
        开始阅读小说后，历史记录将显示在这里{'\n'}
        您可以随时查看阅读进度和记录
      </Text>
      
      {onStartReading && (
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={onStartReading}
          activeOpacity={0.8}
        >
          <MaterialIcon name="menu-book" size={20} color={theme.surface} />
          <Text style={styles.startButtonText}>开始阅读</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EmptyState;