import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Appearance, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// 定义颜色主题接口
export interface Theme {
  // 基础颜色
  background: string;
  surface: string;
  card: string;
  
  // 文字颜色
  text: string;
  textSecondary: string;
  textMuted: string;
  
  // 主色调
  primary: string;
  primaryLight: string;
  
  // 边框和分割线
  border: string;
  divider: string;
  
  // 状态颜色
  success: string;
  warning: string;
  error: string;
  
  // 特殊颜色
  shadow: string;
  overlay: string;
}

// 浅色主题
const lightTheme: Theme = {
  background: '#f8fafc',
  surface: '#ffffff',
  card: 'rgba(255, 255, 255, 0.8)',
  
  text: '#1a1a1a',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  
  primary: '#3b82f6',
  primaryLight: 'rgba(59, 130, 246, 0.1)',
  
  border: 'rgba(0, 0, 0, 0.08)',
  divider: 'rgba(0, 0, 0, 0.05)',
  
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  
  shadow: 'rgba(0, 0, 0, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

// 深色主题
const darkTheme: Theme = {
  background: '#0f172a',
  surface: '#1e293b',
  card: 'rgba(30, 41, 59, 0.8)',
  
  text: '#f1f5f9',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',
  
  primary: '#60a5fa',
  primaryLight: 'rgba(96, 165, 250, 0.2)',
  
  border: 'rgba(255, 255, 255, 0.1)',
  divider: 'rgba(255, 255, 255, 0.05)',
  
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.7)',
};

// 护眼绿主题
const eyeCareGreenTheme: Theme = {
  background: '#c7e9c0',
  surface: '#e8f5e8',
  card: 'rgba(232, 245, 232, 0.9)',
  
  text: '#2d5a27',
  textSecondary: '#3d6b37',
  textMuted: '#5a7a54',
  
  primary: '#22c55e',
  primaryLight: 'rgba(34, 197, 94, 0.15)',
  
  border: 'rgba(45, 90, 39, 0.15)',
  divider: 'rgba(45, 90, 39, 0.1)',
  
  success: '#16a34a',
  warning: '#ca8a04',
  error: '#dc2626',
  
  shadow: 'rgba(45, 90, 39, 0.2)',
  overlay: 'rgba(45, 90, 39, 0.5)',
};

// 羊皮纸主题
const parchmentTheme: Theme = {
  background: '#f4f1e8',
  surface: '#f9f6f0',
  card: 'rgba(249, 246, 240, 0.9)',
  
  text: '#5c4b37',
  textSecondary: '#6b5a46',
  textMuted: '#8a7a66',
  
  primary: '#a16207',
  primaryLight: 'rgba(161, 98, 7, 0.15)',
  
  border: 'rgba(92, 75, 55, 0.15)',
  divider: 'rgba(92, 75, 55, 0.1)',
  
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
  
  shadow: 'rgba(92, 75, 55, 0.2)',
  overlay: 'rgba(92, 75, 55, 0.5)',
};

// 主题类型
export type ThemeType = 'light' | 'dark' | 'eyeCareGreen' | 'parchment';

// 主题映射
const themes: Record<ThemeType, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  eyeCareGreen: eyeCareGreenTheme,
  parchment: parchmentTheme,
};

// 主题上下文接口
interface ThemeContextType {
  theme: Theme;
  currentThemeType: ThemeType;
  isDarkMode: boolean;
  setTheme: (themeType: ThemeType) => void;
  toggleTheme: () => void;
}

// 创建上下文
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 主题提供者组件
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeType, setCurrentThemeType] = useState<ThemeType>('light');

  // 初始化主题
  useEffect(() => {
    loadTheme();
  }, []);

  // 监听系统主题变化
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // 可以根据需要自动跟随系统主题
      // if (currentThemeType === 'light' || currentThemeType === 'dark') {
      //   setCurrentThemeType(colorScheme === 'dark' ? 'dark' : 'light');
      // }
    });

    return () => subscription?.remove();
  }, []);

  // 更新状态栏
  useEffect(() => {
    StatusBar.setBarStyle(currentThemeType === 'dark' ? 'light-content' : 'dark-content');
  }, [currentThemeType]);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themeType');
      if (savedTheme !== null && ['light', 'dark', 'eyeCareGreen', 'parchment'].includes(savedTheme)) {
        setCurrentThemeType(savedTheme as ThemeType);
      } else {
        // 默认跟随系统主题
        const systemTheme = Appearance.getColorScheme();
        setCurrentThemeType(systemTheme === 'dark' ? 'dark' : 'light');
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };

  const setTheme = async (themeType: ThemeType) => {
    setCurrentThemeType(themeType);
    
    try {
      await AsyncStorage.setItem('themeType', themeType);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = currentThemeType === 'dark' ? 'light' : 'dark';
    setCurrentThemeType(newTheme);
    
    try {
      await AsyncStorage.setItem('themeType', newTheme);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  const currentTheme = themes[currentThemeType];
  const isDarkMode = currentThemeType === 'dark';

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme,
      currentThemeType,
      isDarkMode,
      setTheme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义Hook使用主题
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};