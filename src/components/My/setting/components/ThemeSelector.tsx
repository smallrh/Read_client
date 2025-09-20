import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme, ThemeType } from '../../../../context/ThemeContext';
import { createThemeSelectorStyles } from './styles/ThemeSelectorStyles';

interface ThemeOption {
  name: string;
  bg: string;
  text: string;
  preview: string;
  themeType: ThemeType;
}

interface ThemeSelectorProps {
  themes: ThemeOption[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  themes,
  selectedIndex,
  onSelect
}) => {
  const { theme } = useTheme();
  const styles = createThemeSelectorStyles(theme);

  return (
    <View style={styles.themesGrid}>
      {themes.map((themeOption, index) => (
        <TouchableOpacity
          key={themeOption.name}
          style={[
            styles.themeButton,
            selectedIndex === index && styles.themeButtonActive
          ]}
          onPress={() => onSelect(index)}
        >
          <View 
            style={[
              styles.themePreview,
              { backgroundColor: themeOption.preview }
            ]}
          >
            <View style={styles.themePreviewContent}>
              <View style={[
                styles.themeLine, 
                { backgroundColor: themeOption.text, opacity: 0.3 }
              ]} />
              <View style={[
                styles.themeLine, 
                styles.themeLineShort, 
                { backgroundColor: themeOption.text, opacity: 0.3 }
              ]} />
              <View style={[
                styles.themeLine, 
                styles.themeLineVeryShort, 
                { backgroundColor: themeOption.text, opacity: 0.3 }
              ]} />
            </View>
          </View>
          <Text style={styles.themeName}>{themeOption.name}</Text>
          {selectedIndex === index && (
            <View style={styles.themeActiveIndicator} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};