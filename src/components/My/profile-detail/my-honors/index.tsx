import React from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../../context/ThemeContext';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import { createStyles } from '../shared/styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const MyHonors: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const honors = [
    { 
      icon: 'star', 
      title: '阅读达人', 
      description: '连续阅读30天', 
      date: '2024-01-15',
      color: '#F59E0B'
    },
    { 
      icon: 'emoji-events', 
      title: '评论之王', 
      description: '发表评论超过100条', 
      date: '2024-02-20',
      color: '#8B5CF6'
    },
    { 
      icon: 'favorite', 
      title: '收藏家', 
      description: '收藏书籍超过50本', 
      date: '2024-03-10',
      color: '#EF4444'
    },
    { 
      icon: 'school', 
      title: '知识探索者', 
      description: '阅读不同类型书籍15种', 
      date: '2024-03-25',
      color: '#10B981'
    }
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的荣誉</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>荣誉统计</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{honors.length}</Text>
              <Text style={styles.statLabel}>获得徽章</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>总积分</Text>
            </View>
          </View>
        </View>

        {/* Honors List */}
        <View style={styles.contentCard}>
          <Text style={styles.cardTitle}>荣誉徽章</Text>
          {honors.map((honor, index) => (
            <View key={index} style={styles.honorItem}>
              <View style={[styles.honorIcon, { backgroundColor: `${honor.color}15` }]}>
                <MaterialIcon name={honor.icon} size={24} color={honor.color} />
              </View>
              <View style={styles.honorContent}>
                <Text style={styles.honorTitle}>{honor.title}</Text>
                <Text style={styles.honorDescription}>{honor.description}</Text>
                <Text style={styles.honorDate}>获得时间: {honor.date}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyHonors;