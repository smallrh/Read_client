import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../context/ThemeContext';
import { createFontSizeSelectorStyles } from './styles/FontSizeSelectorStyles';

interface FontSize {
  name: string;
  value: number;
}

interface FontSizeSelectorProps {
  fontSizes: FontSize[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({
  fontSizes,
  selectedIndex,
  onSelect
}) => {
  const { theme } = useTheme();
  const styles = createFontSizeSelectorStyles(theme);

  return (
    <View style={styles.fontSizeContainer}>
      <Text style={styles.settingLabel}>字体大小</Text>
      <View style={styles.fontSizeGrid}>
        {fontSizes.map((size, index) => (
          <TouchableOpacity
            key={size.name}
            style={[
              styles.fontSizeButton,
              selectedIndex === index && styles.fontSizeButtonActive
            ]}
            onPress={() => onSelect(index)}
          >
            <Text 
              style={[
                styles.fontSizePreview,
                { fontSize: size.value },
                selectedIndex === index && styles.fontSizePreviewActive
              ]}
            >
              A
            </Text>
            <Text style={[
              styles.fontSizeName,
              selectedIndex === index && styles.fontSizeNameActive
            ]}>
              {size.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};