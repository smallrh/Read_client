import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { createCommonHeaderStyles } from './styles/CommonHeaderStyles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface CommonHeaderProps {
  title: string;
  onBack?: () => void;
  rightAction?: {
    icon?: string;
    text?: string;
    onPress: () => void;
  };
  showStatusBar?: boolean;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  onBack,
  rightAction,
  showStatusBar = true
}) => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createCommonHeaderStyles(theme);

  const handleBackPress = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      {showStatusBar && (
        <StatusBar 
          barStyle={isDarkMode ? "light-content" : "dark-content"} 
          backgroundColor={theme.background} 
        />
      )}
      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBackPress} 
          style={styles.backButton}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>{title}</Text>
        
        <View style={styles.rightAction}>
          {rightAction ? (
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={rightAction.onPress}
            >
              {rightAction.icon ? (
                <MaterialIcon name={rightAction.icon} size={20} color={theme.textSecondary} />
              ) : (
                <Text style={styles.actionText}>{rightAction.text}</Text>
              )}
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </View>
    </>
  );
};