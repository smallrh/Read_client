import React from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { createStyles } from './styles';
import { generateActionButtons } from './routeConfig';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ProfileDetail: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const achievements = [
    { icon: 'star', label: '连续阅读', value: '7天', color: '#F59E0B' },
    { icon: 'emoji-events', label: '本月排名', value: '#12', color: '#8B5CF6' },
    { icon: 'card-giftcard', label: '积分余额', value: '2,560', color: '#10B981' },
    { icon: 'military-tech', label: '等级徽章', value: 'LV8', color: '#3B82F6' }
  ];

  const personalStats = [
    { label: '总阅读时长', value: '156小时', description: '超过90%的用户' },
    { label: '阅读书籍', value: '47本', description: '涵盖15个分类' },
    { label: '收藏小说', value: '23本', description: '等待阅读' },
    { label: '评论互动', value: '89条', description: '获得312个赞' }
  ];

  const recentActivity = [
    { action: '阅读了', book: '《霸道总裁的贴身保镖》', time: '2小时前', chapter: '第156章' },
    { action: '收藏了', book: '《重生之都市修仙》', time: '1天前', chapter: null },
    { action: '评论了', book: '《全职高手》', time: '2天前', chapter: '第89章' },
    { action: '签到获得', book: '积分奖励', time: '3天前', chapter: '+50积分' }
  ];

  // Generate action buttons using the route configuration
  const actionButtons = generateActionButtons((routeName) => {
    navigation.navigate(routeName as keyof RootStackParamList);
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleSettings = () => {
    console.log('Settings pressed');
  };

  const handleChangeAvatar = () => {
    console.log('Change avatar pressed');
  };

  // 确保页面聚焦时StatusBar配置正确
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content", true);
      if (StatusBar.setBackgroundColor) {
        StatusBar.setBackgroundColor('transparent', true);
      }
    }, [isDarkMode])
  );

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor="transparent"
        translucent={true}
        animated={true}
      />
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        overScrollMode="never"
      >
        {/* Header Background */}
        <View style={styles.headerBackground}>
          <View style={styles.backgroundGradient} />
          <View style={styles.backgroundOverlay} />
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
        </View>

        {/* Header Controls */}
        <View style={styles.headerControls}>
          <TouchableOpacity 
            onPress={handleBack}
            style={styles.headerButton}
            activeOpacity={0.7}
          >
            <MaterialIcon name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleSettings}
            style={styles.headerButton}
            activeOpacity={0.7}
          >
            <MaterialIcon name="settings" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Profile Avatar & Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarGlow} />
            <View style={styles.avatar}>
              <MaterialIcon name="person" size={36} color={theme.surface} />
            </View>
            <TouchableOpacity 
              style={styles.cameraButton}
              onPress={handleChangeAvatar}
              activeOpacity={0.8}
            >
              <MaterialIcon name="camera-alt" size={14} color={theme.surface} />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>书虫小伙伴</Text>
              <View style={styles.vipBadge}>
                <Text style={styles.vipText}>VIP</Text>
              </View>
            </View>
            <Text style={styles.userId}>ID: 1234567890</Text>
            <Text style={styles.userBio}>
              "热爱阅读，享受每一个精彩的故事时刻 📚"
            </Text>
            
            <TouchableOpacity 
              onPress={handleEditProfile}
              style={styles.editButton}
              activeOpacity={0.8}
            >
              <MaterialIcon name="edit" size={16} color={theme.text} />
              <Text style={styles.editButtonText}>编辑资料</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Achievement Cards */}
        <View style={styles.achievementsGrid}>
          <View style={styles.achievementRow}>
            {achievements.slice(0, 2).map(({ icon, label, value, color }) => (
              <View key={label} style={[styles.achievementCard, { borderLeftColor: color }]}>
                <View style={styles.achievementContent}>
                  <MaterialIcon name={icon} size={24} color={color} style={styles.achievementIcon} />
                  <View style={styles.achievementInfo}>
                    <Text style={styles.achievementValue}>{value}</Text>
                    <Text style={styles.achievementLabel}>{label}</Text>
                  </View>
                </View>
                <View style={[styles.achievementGlow, { backgroundColor: `${color}10` }]} />
              </View>
            ))}
          </View>
          <View style={styles.achievementRow}>
            {achievements.slice(2, 4).map(({ icon, label, value, color }) => (
              <View key={label} style={[styles.achievementCard, { borderLeftColor: color }]}>
                <View style={styles.achievementContent}>
                  <MaterialIcon name={icon} size={24} color={color} style={styles.achievementIcon} />
                  <View style={styles.achievementInfo}>
                    <Text style={styles.achievementValue}>{value}</Text>
                    <Text style={styles.achievementLabel}>{label}</Text>
                  </View>
                </View>
                <View style={[styles.achievementGlow, { backgroundColor: `${color}10` }]} />
              </View>
            ))}
          </View>
        </View>

        {/* Personal Stats */}
        <View style={styles.statsCard}>
          <View style={styles.cardHeader}>
            <MaterialIcon name="military-tech" size={20} color={theme.primary} />
            <Text style={styles.cardTitle}>我的成就</Text>
          </View>
          <View style={styles.statsGrid}>
            <View style={styles.statsRow}>
              {personalStats.slice(0, 2).map(({ label, value, description }) => (
                <View key={label} style={styles.statItem}>
                  <Text style={styles.statValue}>{value}</Text>
                  <Text style={styles.statLabel}>{label}</Text>
                  <Text style={styles.statDescription}>{description}</Text>
                </View>
              ))}
            </View>
            <View style={styles.statsRow}>
              {personalStats.slice(2, 4).map(({ label, value, description }) => (
                <View key={label} style={styles.statItem}>
                  <Text style={styles.statValue}>{value}</Text>
                  <Text style={styles.statLabel}>{label}</Text>
                  <Text style={styles.statDescription}>{description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activityCard}>
          <View style={styles.cardHeader}>
            <MaterialIcon name="event" size={20} color={theme.primary} />
            <Text style={styles.cardTitle}>最近动态</Text>
          </View>
          <View style={styles.activityList}>
            {recentActivity.map((activity, index) => (
              <View key={index} style={styles.activityItem}>
                <View style={styles.activityDot} />
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>
                    <Text style={styles.activityAction}>{activity.action}</Text>
                    <Text style={styles.activityBook}>{activity.book}</Text>
                    {activity.chapter && (
                      <Text style={styles.activityChapter}> {activity.chapter}</Text>
                    )}
                  </Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {actionButtons.map(({ icon, title, description, color, onPress }) => (
            <TouchableOpacity 
              key={title}
              onPress={onPress}
              style={styles.actionButton}
              activeOpacity={0.8}
            >
              <View style={styles.actionButtonContent}>
                <View style={[styles.actionButtonIcon, { backgroundColor: `${color}15` }]}>
                  <MaterialIcon name={icon} size={20} color={color} />
                </View>
                <View style={styles.actionButtonText}>
                  <Text style={styles.actionButtonTitle}>{title}</Text>
                  <Text style={styles.actionButtonDescription}>{description}</Text>
                </View>
              </View>
              <MaterialIcon name="chevron-right" size={16} color={theme.textMuted} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileDetail;