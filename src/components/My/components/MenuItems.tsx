import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { MyRouteConfig, myRoutes, getRouteByKey } from '../routeConfig';
import { createMenuItemsStyles } from './styles/MenuItemsStyles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface MenuItemsProps {
  menuItems?: MyRouteConfig[];
  onMenuItemClick?: (item: string) => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({
  menuItems = myRoutes,
  onMenuItemClick
}) => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createMenuItemsStyles(theme);

  const handleMenuItemPress = (key: string) => {
    const routeConfig = getRouteByKey(key);
    if (routeConfig) {
      navigation.navigate(routeConfig.routeName);
    } else {
      onMenuItemClick?.(key);
    }
  };

  return (
    <View style={styles.menuSection}>
      <View style={styles.menuCard}>
        {menuItems.map((route, index) => (
          <TouchableOpacity
            key={route.key}
            style={[
              styles.menuItem,
              index !== menuItems.length - 1 && styles.menuItemBorder
            ]}
            onPress={() => handleMenuItemPress(route.key)}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemIcon}>
              <MaterialIcon name={route.icon} size={20} color="#3b82f6" />
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemLabel}>{route.label}</Text>
              <Text style={styles.menuItemDescription}>{route.description}</Text>
            </View>
            {route.hasNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>新</Text>
              </View>
            )}
            <MaterialIcon name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};