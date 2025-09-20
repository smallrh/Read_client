import React, { useState } from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../../context/ThemeContext';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import { createStyles } from '../shared/styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const PointStore: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [currentPoints] = useState(2560);
  
  const categories = ['全部', '实物奖励', '虚拟商品', '优惠券'];
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const products = [
    {
      id: 1,
      name: '精美书签套装',
      points: 200,
      image: '📚',
      category: '实物奖励',
      stock: 25
    },
    {
      id: 2,
      name: 'VIP会员7天',
      points: 500,
      image: '👑',
      category: '虚拟商品',
      stock: 999
    },
    {
      id: 3,
      name: '咖啡优惠券',
      points: 150,
      image: '☕',
      category: '优惠券',
      stock: 50
    },
    {
      id: 4,
      name: '定制笔记本',
      points: 800,
      image: '📝',
      category: '实物奖励',
      stock: 10
    },
    {
      id: 5,
      name: 'VIP会员30天',
      points: 1500,
      image: '💎',
      category: '虚拟商品',
      stock: 999
    },
    {
      id: 6,
      name: '购书优惠券',
      points: 300,
      image: '🎫',
      category: '优惠券',
      stock: 100
    }
  ];

  const filteredProducts = selectedCategory === '全部' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRedeem = (product: any) => {
    if (currentPoints >= product.points) {
      console.log('兑换商品:', product.name);
      // 实际兑换逻辑
    }
  };

  const renderProduct = ({ item }: { item: any }) => (
    <View style={styles.productCard}>
      <View style={styles.productImage}>
        <Text style={styles.productEmoji}>{item.image}</Text>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productStock}>库存: {item.stock}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPoints}>{item.points} 积分</Text>
        <TouchableOpacity
          onPress={() => handleRedeem(item)}
          style={[
            styles.redeemButton,
            currentPoints < item.points && styles.redeemButtonDisabled
          ]}
          disabled={currentPoints < item.points}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.redeemButtonText,
            currentPoints < item.points && styles.redeemButtonTextDisabled
          ]}>
            {currentPoints >= item.points ? '兑换' : '积分不足'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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
        <Text style={styles.headerTitle}>积分商城</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Points Balance */}
        <View style={styles.pointsCard}>
          <MaterialIcon name="stars" size={24} color="#F59E0B" />
          <Text style={styles.pointsLabel}>当前积分</Text>
          <Text style={styles.pointsValue}>{currentPoints.toLocaleString()}</Text>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive
                ]}
                activeOpacity={0.8}
              >
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.categoryButtonTextActive
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Products Grid */}
        <View style={styles.productsContainer}>
          <FlatList
            data={filteredProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PointStore;