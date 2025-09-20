import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTheme } from '../../../../context/ThemeContext';
import { createSliderItemStyles } from './styles/SliderItemStyles';

interface SliderItemProps {
  title: string;
  description?: string;
  value: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
  unit?: string;
  decimalPlaces?: number;
}

export const SliderItem: React.FC<SliderItemProps> = ({
  title,
  description,
  value,
  minimumValue,
  maximumValue,
  onValueChange,
  unit = '',
  decimalPlaces = 1
}) => {
  const { theme } = useTheme();
  const styles = createSliderItemStyles(theme);

  const formatValue = (val: number) => {
    return val.toFixed(decimalPlaces) + unit;
  };

  return (
    <View style={styles.sliderItem}>
      <View style={styles.sliderHeader}>
        <View style={styles.sliderItemContent}>
          <Text style={styles.sliderItemTitle}>{title}</Text>
          {description && (
            <Text style={styles.sliderItemDescription}>{description}</Text>
          )}
        </View>
        <Text style={styles.sliderValue}>{formatValue(value)}</Text>
      </View>
      
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={theme.primary}
        maximumTrackTintColor={theme.border}
        thumbTintColor={theme.primary}
      />
    </View>
  );
};