import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface OnboardingProps {
  onComplete: () => void;
}

interface OnboardingPage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string[];
  features: Array<{
    icon: string;
    text: string;
    color: string;
  }>;
}

const onboardingData: OnboardingPage[] = [
  {
    id: 1,
    title: '欢迎来到阅读世界',
    subtitle: '海量好书，触手可及',
    description: '精选万本优质小说，涵盖玄幻、言情、都市、科幻等热门分类，让你畅游在文字的海洋中',
    icon: 'auto-stories',
    gradient: ['#667eea', '#764ba2'],
    features: [
      { icon: 'library-books', text: '万本精选', color: '#3b82f6' },
      { icon: 'star', text: '精品推荐', color: '#f59e0b' },
      { icon: 'trending-up', text: '实时更新', color: '#10b981' },
    ]
  },
  {
    id: 2,
    title: 'AI智能推荐',
    subtitle: '懂你所爱，精准推荐',
    description: '基于先进的AI算法，分析你的阅读偏好，为你推荐最符合口味的精彩小说',
    icon: 'auto-awesome',
    gradient: ['#f093fb', '#f5576c'],
    features: [
      { icon: 'psychology', text: 'AI分析', color: '#8b5cf6' },
      { icon: 'favorite', text: '个性推荐', color: '#ec4899' },
      { icon: 'insights', text: '智能匹配', color: '#06b6d4' },
    ]
  },
  {
    id: 3,
    title: '护眼阅读体验',
    subtitle: '舒适主题，呵护双眼',
    description: '提供护眼绿、羊皮纸等多种阅读主题，配合夜间模式，让长时间阅读更舒适',
    icon: 'visibility',
    gradient: ['#4facfe', '#00f2fe'],
    features: [
      { icon: 'palette', text: '多种主题', color: '#22c55e' },
      { icon: 'bedtime', text: '护眼模式', color: '#a16207' },
      { icon: 'dark-mode', text: '夜间模式', color: '#6366f1' },
    ]
  }
];

const OnboardingScreen: React.FC<OnboardingProps> = ({ onComplete }) => {
  const { theme, isDarkMode } = useTheme();
  const styles = createStyles(theme);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      
      Animated.timing(scrollX, {
        toValue: nextIndex * screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      
      Animated.timing(scrollX, {
        toValue: prevIndex * screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleComplete = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      onComplete();
    } catch (error) {
      console.log('Error saving onboarding status:', error);
      onComplete();
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.state === State.END) {
      const { translationX, velocityX } = event.nativeEvent;
      
      if (Math.abs(translationX) > screenWidth * 0.3 || Math.abs(velocityX) > 500) {
        if (translationX > 0 && currentIndex > 0) {
          handlePrev();
        } else if (translationX < 0 && currentIndex < onboardingData.length - 1) {
          handleNext();
        }
      }
      
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {onboardingData.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              opacity: scrollX.interpolate({
                inputRange: [
                  (index - 1) * screenWidth,
                  index * screenWidth,
                  (index + 1) * screenWidth,
                ],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  scale: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * screenWidth,
                      index * screenWidth,
                      (index + 1) * screenWidth,
                    ],
                    outputRange: [0.8, 1.2, 0.8],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );

  const renderPage = (item: OnboardingPage, index: number) => (
    <View key={item.id} style={styles.pageContainer}>
      {/* Background Gradient */}
      <View style={[styles.gradientBackground, { backgroundColor: item.gradient[0] }]}>
        <View style={[styles.gradientOverlay, { backgroundColor: item.gradient[1] }]} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Main Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <MaterialIcon name={item.icon} size={64} color={theme.surface} />
          </View>
          <View style={styles.iconGlow} />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          {item.features.map((feature, featureIndex) => (
            <Animated.View
              key={featureIndex}
              style={[
                styles.featureItem,
                {
                  opacity: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * screenWidth,
                      index * screenWidth,
                      (index + 1) * screenWidth,
                    ],
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp',
                  }),
                  transform: [
                    {
                      translateY: scrollX.interpolate({
                        inputRange: [
                          (index - 1) * screenWidth,
                          index * screenWidth,
                          (index + 1) * screenWidth,
                        ],
                        outputRange: [30, 0, 30],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={[styles.featureIcon, { backgroundColor: feature.color + '20' }]}>
                <MaterialIcon name={feature.icon} size={20} color={feature.color} />
              </View>
              <Text style={styles.featureText}>{feature.text}</Text>
            </Animated.View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>跳过</Text>
      </TouchableOpacity>

      {/* Pages Container */}
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.pagesContainer,
            {
              transform: [
                {
                  translateX: Animated.add(
                    Animated.multiply(scrollX, -1),
                    translateX
                  ),
                },
              ],
            },
          ]}
        >
          {onboardingData.map((item, index) => renderPage(item, index))}
        </Animated.View>
      </PanGestureHandler>

      {/* Bottom Controls */}
      <View style={styles.bottomContainer}>
        {renderDots()}
        
        <View style={styles.buttonsContainer}>
          {currentIndex > 0 && (
            <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
              <MaterialIcon name="chevron-left" size={24} color={theme.surface} />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={[styles.nextButton, currentIndex === onboardingData.length - 1 && styles.completeButton]}
            onPress={handleNext}
          >
            {currentIndex === onboardingData.length - 1 ? (
              <Text style={styles.completeText}>开始使用</Text>
            ) : (
              <MaterialIcon name="chevron-right" size={24} color={theme.surface} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Decorative Elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
    </View>
  );
};

export default OnboardingScreen;