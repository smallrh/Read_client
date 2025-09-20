import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { createThemeToggleStyles } from './styles/ThemeToggleStyles';

interface ThemeToggleProps {
  title?: string;
  lightModeText?: string;
  darkModeText?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  title = '深色模式',
  lightModeText = '切换到深色主题',
  darkModeText = '已启用深色主题'
}) => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const styles = createThemeToggleStyles(theme);

  return (
    <View style={styles.themeSection}>
      <View style={styles.themeCard}>
        <View style={styles.themeToggleContainer}>
          <View style={styles.themeInfo}>
            <MaterialIcon 
              name={isDarkMode ? "dark-mode" : "light-mode"} 
              size={24} 
              color={theme.primary} 
            />
            <View style={styles.themeTextContainer}>
              <Text style={styles.themeTitle}>{title}</Text>
              <Text style={styles.themeSubtitle}>
                {isDarkMode ? darkModeText : lightModeText}
              </Text>
            </View>
          </View>
          <TouchableOpacity 
            style={[
              styles.themeSwitch,
              isDarkMode && styles.themeSwitchActive
            ]}
            onPress={toggleTheme}
          >
            <View style={[
              styles.themeSwitchThumb,
              isDarkMode && styles.themeSwitchThumbActive
            ]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};