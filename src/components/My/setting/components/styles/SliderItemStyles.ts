import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createSliderItemStyles = (theme: Theme) => StyleSheet.create({
  sliderItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  sliderHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sliderItemContent: {
    flex: 1,
    marginRight: 16,
  },
  sliderItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  sliderItemDescription: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.primary,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});