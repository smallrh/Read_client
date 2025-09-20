import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface TagsSectionProps {
  tags: string[];
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.tagsContainer}>
      <View style={styles.tagsHeader}>
        <MaterialIcon name="local-offer" size={16} color={theme.textSecondary} />
        <Text style={styles.tagsLabel}>标签</Text>
      </View>
      <View style={styles.tagsWrapper}>
        {tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default TagsSection;