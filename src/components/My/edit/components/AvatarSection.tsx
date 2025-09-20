import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createAvatarSectionStyles } from './styles/AvatarSectionStyles';

interface AvatarSectionProps {
  onChangeAvatar?: () => void;
}

export const AvatarSection: React.FC<AvatarSectionProps> = ({
  onChangeAvatar
}) => {
  const { theme } = useTheme();
  const styles = createAvatarSectionStyles(theme);

  const handleChangeAvatar = () => {
    if (onChangeAvatar) {
      onChangeAvatar();
    } else {
      console.log('Change avatar pressed');
    }
  };

  return (
    <View style={styles.avatarSection}>
      <View style={styles.avatarContainer}>
        <MaterialIcon name="account-circle" size={80} color={theme.textMuted} />
        <TouchableOpacity 
          style={styles.changeAvatarButton}
          onPress={handleChangeAvatar}
        >
          <MaterialIcon name="camera-alt" size={16} color={theme.primary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.changeAvatarText}>更换头像</Text>
    </View>
  );
};