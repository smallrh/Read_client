import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../context/ThemeContext';
import { createReadingModeSelectorStyles } from './styles/ReadingModeSelectorStyles';

interface ReadingMode {
  name: string;
  description: string;
}

interface ReadingModeSelectorProps {
  readingModes: ReadingMode[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const ReadingModeSelector: React.FC<ReadingModeSelectorProps> = ({
  readingModes,
  selectedIndex,
  onSelect
}) => {
  const { theme } = useTheme();
  const styles = createReadingModeSelectorStyles(theme);

  return (
    <View style={styles.readingModeContainer}>
      {readingModes.map((mode, index) => (
        <TouchableOpacity
          key={mode.name}
          style={[
            styles.readingModeItem,
            selectedIndex === index && styles.readingModeItemActive
          ]}
          onPress={() => onSelect(index)}
        >
          <View style={styles.readingModeContent}>
            <Text style={styles.readingModeTitle}>{mode.name}</Text>
            <Text style={styles.readingModeDescription}>{mode.description}</Text>
          </View>
          <View style={[
            styles.radioButton,
            selectedIndex === index && styles.radioButtonActive
          ]}>
            {selectedIndex === index && (
              <View style={styles.radioButtonInner} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};