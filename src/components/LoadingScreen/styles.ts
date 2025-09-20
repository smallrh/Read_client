import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../context/ThemeContext';

const { width, height } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },

  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },

  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
    textAlign: 'center',
  },

  tagline: {
    fontSize: 16,
    color: theme.textSecondary,
    textAlign: 'center',
  },

  loadingIndicator: {
    position: 'absolute',
    bottom: 120,
  },

  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginHorizontal: 4,
  },
});