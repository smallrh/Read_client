import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { GiftCategory } from '../mockData';
import { createCategorySelectorStyles } from './styles/CategorySelectorStyles';

interface CategoryOption {
  key: GiftCategory;
  label: string;
  icon: string;
}

interface CategorySelectorProps {
  categories: CategoryOption[];
  activeCategory: GiftCategory;
  onCategorySelect: (category: GiftCategory) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  activeCategory,
  onCategorySelect
}) => {
  const { theme } = useTheme();
  const styles = createCategorySelectorStyles(theme);

  return (
    <View style={styles.categoriesCard}>
      <Text style={styles.categoriesTitle}>礼品分类</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.key}
            style={[
              styles.categoryItem,
              activeCategory === category.key && styles.categoryItemActive
            ]}
            onPress={() => onCategorySelect(category.key)}
          >
            <MaterialIcon 
              name={category.icon} 
              size={18} 
              color={
                activeCategory === category.key 
                  ? theme.surface 
                  : theme.textSecondary
              } 
            />
            <Text style={[
              styles.categoryText,
              activeCategory === category.key && styles.categoryTextActive
            ]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};