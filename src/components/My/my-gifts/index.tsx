import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { createStyles } from './styles';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { mockGiftsData, Gift, GiftCategory } from './mockData';
import EmptyState from './EmptyState';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const MyGifts: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [gifts, setGifts] = useState<Gift[]>(mockGiftsData);
  const [activeCategory, setActiveCategory] = useState<GiftCategory>('all');
  const [redeemCode, setRedeemCode] = useState('');
  const [showRedeemInput, setShowRedeemInput] = useState(false);

  const categories = [
    { key: 'all', label: '全部', icon: 'apps' },
    { key: 'reading_coins', label: '阅读币', icon: 'monetization-on' },
    { key: 'vip_time', label: '会员时长', icon: 'star' },
    { key: 'physical_gifts', label: '实物礼品', icon: 'card-giftcard' },
    { key: 'other', label: '其他', icon: 'more-horiz' }
  ];

  const filteredGifts = gifts.filter(gift => 
    activeCategory === 'all' || gift.category === activeCategory
  );

  const handleRedeemCode = () => {
    if (!redeemCode.trim()) {
      Alert.alert('提示', '请输入兑换码');
      return;
    }

    // Mock redemption logic
    const newGift: Gift = {
      id: Date.now().toString(),
      name: '兑换奖励',
      description: '通过兑换码获得的奖励',
      type: '阅读币',
      value: '100',
      category: 'reading_coins',
      status: 'unused',
      obtainedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      source: '兑换码',
      image: ''
    };

    setGifts(prev => [newGift, ...prev]);
    setRedeemCode('');
    setShowRedeemInput(false);
    Alert.alert('兑换成功', '奖励已添加到您的礼品库');
  };

  const handleUseGift = (giftId: string) => {
    setGifts(prev => 
      prev.map(gift => 
        gift.id === giftId ? { ...gift, status: 'used' } : gift
      )
    );
    Alert.alert('使用成功', '礼品已使用');
  };

  const handleDeleteGift = (giftId: string) => {
    Alert.alert(
      '确认删除',
      '确定要删除这个礼品吗？',
      [
        { text: '取消', style: 'cancel' },
        { 
          text: '删除', 
          style: 'destructive',
          onPress: () => setGifts(prev => prev.filter(gift => gift.id !== giftId))
        }
      ]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unused': return theme.success;
      case 'used': return theme.textMuted;
      case 'expired': return theme.error;
      default: return theme.textSecondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'unused': return '未使用';
      case 'used': return '已使用';
      case 'expired': return '已过期';
      default: return '未知';
    }
  };

  if (gifts.length === 0) {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle={isDarkMode ? "light-content" : "dark-content"} 
          backgroundColor={theme.background} 
        />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}
          >
            <MaterialIcon name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>我的礼品</Text>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => setShowRedeemInput(true)}
          >
            <MaterialIcon name="redeem" size={20} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>

        <EmptyState onExploreGifts={() => {
          // Navigate to tasks or activities page
          Alert.alert('提示', '即将跳转到任务页面');
        }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的礼品</Text>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => setShowRedeemInput(true)}
        >
          <MaterialIcon name="redeem" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats Summary */}
        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <View style={styles.statsIconContainer}>
              <MaterialIcon name="card-giftcard" size={20} color={theme.primary} />
            </View>
            <View style={styles.statsHeaderText}>
              <Text style={styles.statsTitle}>礼品统计</Text>
              <Text style={styles.statsSubtitle}>查看您的礼品收藏</Text>
            </View>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{gifts.length}</Text>
              <Text style={styles.statLabel}>总礼品</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {gifts.filter(g => g.status === 'unused').length}
              </Text>
              <Text style={styles.statLabel}>未使用</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {gifts.filter(g => g.status === 'used').length}
              </Text>
              <Text style={styles.statLabel}>已使用</Text>
            </View>
          </View>
        </View>

        {/* Categories */}
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
                onPress={() => setActiveCategory(category.key as GiftCategory)}
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

        {/* Redeem Code Input */}
        {showRedeemInput && (
          <View style={styles.redeemCard}>
            <View style={styles.redeemHeader}>
              <Text style={styles.redeemTitle}>兑换礼品码</Text>
              <TouchableOpacity 
                onPress={() => setShowRedeemInput(false)}
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
                value={redeemCode}
                onChangeText={setRedeemCode}
                autoCapitalize="characters"
              />
              <TouchableOpacity 
                style={styles.redeemButton}
                onPress={handleRedeemCode}
              >
                <Text style={styles.redeemButtonText}>兑换</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Gifts List */}
        <View style={styles.giftsCard}>
          <View style={styles.giftsHeader}>
            <Text style={styles.giftsTitle}>
              {activeCategory === 'all' ? '全部礼品' : categories.find(c => c.key === activeCategory)?.label}
            </Text>
            <Text style={styles.giftsCount}>{filteredGifts.length} 个</Text>
          </View>

          <View style={styles.giftsList}>
            {filteredGifts.map((gift) => (
              <View key={gift.id} style={styles.giftItem}>
                <View style={styles.giftIconContainer}>
                  <MaterialIcon 
                    name={
                      gift.category === 'reading_coins' ? 'monetization-on' :
                      gift.category === 'vip_time' ? 'star' :
                      gift.category === 'physical_gifts' ? 'card-giftcard' :
                      'card-giftcard'
                    } 
                    size={24} 
                    color={theme.primary} 
                  />
                </View>
                
                <View style={styles.giftContent}>
                  <View style={styles.giftMainInfo}>
                    <Text style={styles.giftName}>{gift.name}</Text>
                    <View style={[styles.giftStatus, { backgroundColor: `${getStatusColor(gift.status)}20` }]}>
                      <Text style={[styles.giftStatusText, { color: getStatusColor(gift.status) }]}>
                        {getStatusText(gift.status)}
                      </Text>
                    </View>
                  </View>
                  
                  <Text style={styles.giftDescription}>{gift.description}</Text>
                  
                  <View style={styles.giftDetails}>
                    <Text style={styles.giftValue}>{gift.type}: {gift.value}</Text>
                    <Text style={styles.giftSource}>来源: {gift.source}</Text>
                  </View>
                  
                  <View style={styles.giftFooter}>
                    <Text style={styles.giftDate}>
                      获得时间: {new Date(gift.obtainedAt).toLocaleDateString()}
                    </Text>
                    
                    <View style={styles.giftActions}>
                      {gift.status === 'unused' && (
                        <TouchableOpacity 
                          style={styles.useButton}
                          onPress={() => handleUseGift(gift.id)}
                        >
                          <Text style={styles.useButtonText}>使用</Text>
                        </TouchableOpacity>
                      )}
                      
                      <TouchableOpacity 
                        style={styles.deleteButton}
                        onPress={() => handleDeleteGift(gift.id)}
                      >
                        <MaterialIcon name="delete" size={16} color={theme.error} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsIndicator} />
          <View style={styles.tipsContent}>
            <Text style={styles.tipsTitle}>使用说明</Text>
            <Text style={styles.tipsText}>
              • 部分礼品有使用期限，请及时使用{'\n'}
              • 实物礼品需要填写收货地址{'\n'}
              • 兑换码区分大小写，请仔细输入{'\n'}
              • 已使用的礼品不可退回或转让
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyGifts;