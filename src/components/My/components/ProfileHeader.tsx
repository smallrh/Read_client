import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { createProfileHeaderStyles } from './styles/ProfileHeaderStyles';
import { UserStats, StatItem } from './UserStats';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface ProfileHeaderProps {
  username?: string;
  avatarUri?: string;
  isVip?: boolean;
  levelText?: string;
  stats?: StatItem[];
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username = '阅读爱好者',
  avatarUri = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=facearea&facepad=4&h=256&w=256&q=80',
  isVip = true,
  levelText = 'VIP会员',
  stats
}) => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createProfileHeaderStyles(theme);

  return (
    <View style={styles.headerSection}>
      <View style={styles.backgroundGradient} />
      <View style={styles.profileContainer}>
        <TouchableOpacity 
          style={styles.avatarContainer}
          onPress={() => navigation.navigate('ProfileDetail')}
          activeOpacity={0.8}
        >
          <View style={styles.avatarGlow} />
          <Image
            source={{ uri: avatarUri }}
            style={styles.avatar}
          />
          {isVip && (
            <View style={styles.vipBadge}>
              <MaterialIcon name="diamond" size={16} color="#ffffff" />
            </View>
          )}
        </TouchableOpacity>
        
        <View style={styles.profileInfo}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.userLevel}>
            <MaterialIcon name="diamond" size={16} color="#f59e0b" />
            <Text style={styles.levelText}>{levelText}</Text>
          </View>
          {/* 功能的修改，将编辑资料的功能移到下一级 */}
          {/* <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
            activeOpacity={0.7}
          >
            <MaterialIcon name="edit" size={16} color="#3b82f6" />
            <Text style={styles.editButtonText}>编辑资料</Text>
            <MaterialIcon name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity> */}
        </View>

        {/* User Statistics - Include in header if provided */}
        {stats && <UserStats stats={stats} />}
      </View>
    </View>
  );
};