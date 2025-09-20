import React, { ComponentType } from 'react';

// Lazy import profile detail sub-components
const ChangePassword = React.lazy(() => import('./change-password'));
const MyHonors = React.lazy(() => import('./my-honors'));
const PointStore = React.lazy(() => import('./point-store'));
const MyReviews = React.lazy(() => import('./my-reviews'));

// Profile detail route parameter types
export type ProfileDetailRouteParams = {
  ChangePassword: undefined;
  MyHonors: undefined;
  PointStore: undefined;
  MyReviews: undefined;
};

// Route configuration interface
export interface ProfileDetailRoute {
  name: keyof ProfileDetailRouteParams;
  component: ComponentType<any>;
  title: string;
  icon: string;
  description: string;
  color: string;
  options?: {
    headerShown?: boolean;
    gestureEnabled?: boolean;
    presentation?: 'card' | 'modal';
  };
}

// Profile detail routes configuration
export const profileDetailRoutes: ProfileDetailRoute[] = [
  {
    name: 'MyHonors',
    component: MyHonors,
    title: '我的荣誉',
    icon: 'emoji-events',
    description: '查看获得的所有徽章和成就',
    color: '#F59E0B',
    options: {
      headerShown: false,
      gestureEnabled: true,
      presentation: 'card',
    }
  },
  {
    name: 'PointStore',
    component: PointStore,
    title: '积分商城',
    icon: 'card-giftcard',
    description: '用积分兑换精美礼品',
    color: '#10B981',
    options: {
      headerShown: false,
      gestureEnabled: true,
      presentation: 'card',
    }
  },
  {
    name: 'MyReviews',
    component: MyReviews,
    title: '我的评价',
    icon: 'star',
    description: '管理书籍评分和评论',
    color: '#3B82F6',
    options: {
      headerShown: false,
      gestureEnabled: true,
      presentation: 'card',
    }
  },
  {
    name: 'ChangePassword',
    component: ChangePassword,
    title: '修改密码',
    icon: 'lock',
    description: '更新账户安全密码',
    color: '#F97316',
    options: {
      headerShown: false,
      gestureEnabled: true,
      presentation: 'card',
    }
  },
];

// Helper functions for profile detail route management
export const getProfileDetailRouteByName = (name: keyof ProfileDetailRouteParams) => {
  return profileDetailRoutes.find(route => route.name === name);
};

export const getProfileDetailRouteInfo = (name: keyof ProfileDetailRouteParams) => {
  const route = getProfileDetailRouteByName(name);
  if (!route) return null;
  
  return {
    title: route.title,
    icon: route.icon,
    description: route.description,
    color: route.color,
  };
};

// Generate action buttons data for ProfileDetail component
export const generateActionButtons = (navigationCallback: (routeName: keyof ProfileDetailRouteParams) => void) => {
  return profileDetailRoutes.map(route => ({
    icon: route.icon,
    title: route.title,
    description: route.description,
    color: route.color,
    onPress: () => navigationCallback(route.name),
  }));
};

// Route validation
export const isValidProfileDetailRoute = (routeName: string): routeName is keyof ProfileDetailRouteParams => {
  return profileDetailRoutes.some(route => route.name === routeName);
};

export default profileDetailRoutes;