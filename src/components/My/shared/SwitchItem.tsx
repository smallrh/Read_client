import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { createSwitchItemStyles } from './styles/SwitchItemStyles';

interface SwitchItemProps {
  title: string;
  description?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const SwitchItem: React.FC<SwitchItemProps> = ({
  title,
  description,
  value,
  onValueChange
}) => {
  const { theme } = useTheme();
  const styles = createSwitchItemStyles(theme);

  return (
    <View style={styles.switchItem}>
      <View style={styles.switchItemContent}>
        <Text style={styles.switchItemTitle}>{title}</Text>
        {description && (
          <Text style={styles.switchItemDescription}>{description}</Text>
        )}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.border, true: theme.primary }}
        thumbColor={theme.card}
      />
    </View>
  );
};