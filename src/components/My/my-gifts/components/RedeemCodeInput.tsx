import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createRedeemCodeInputStyles } from './styles/RedeemCodeInputStyles';

interface RedeemCodeInputProps {
  visible: boolean;
  code: string;
  onCodeChange: (code: string) => void;
  onRedeem: () => void;
  onClose: () => void;
}

export const RedeemCodeInput: React.FC<RedeemCodeInputProps> = ({
  visible,
  code,
  onCodeChange,
  onRedeem,
  onClose
}) => {
  const { theme } = useTheme();
  const styles = createRedeemCodeInputStyles(theme);

  if (!visible) return null;

  return (
    <View style={styles.redeemCard}>
      <View style={styles.redeemHeader}>
        <Text style={styles.redeemTitle}>兑换礼品码</Text>
        <TouchableOpacity 
          onPress={onClose}
          style={styles.redeemCloseButton}
        >
          <MaterialIcon name="close" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.redeemInputContainer}>
        <TextInput
          style={styles.redeemInput}
          placeholder="请输入礼品兑换码"
          placeholderTextColor={theme.textMuted}
          value={code}
          onChangeText={onCodeChange}
          autoCapitalize="characters"
        />
        <TouchableOpacity 
          style={styles.redeemButton}
          onPress={onRedeem}
        >
          <Text style={styles.redeemButtonText}>兑换</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};