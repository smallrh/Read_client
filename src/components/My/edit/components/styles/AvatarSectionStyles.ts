import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createAvatarSectionStyles = (theme: Theme) => StyleSheet.create({
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  changeAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.surface,
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.border,
  },
  changeAvatarText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },
});