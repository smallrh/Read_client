import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { createFormInputStyles } from './styles/FormInputStyles';

interface FormInputProps extends Omit<TextInputProps, 'style'> {
  label: string;
  isTextArea?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  isTextArea = false,
  ...textInputProps
}) => {
  const { theme } = useTheme();
  const styles = createFormInputStyles(theme);

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={[styles.textInput, isTextArea && styles.textArea]}
        placeholderTextColor={theme.textMuted}
        {...textInputProps}
        textAlignVertical={isTextArea ? "top" : "center"}
      />
    </View>
  );
};