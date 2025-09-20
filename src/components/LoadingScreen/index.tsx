import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './styles';

const { width } = Dimensions.get('window');

const LoadingScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();

    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.iconWrapper}>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <MaterialIcon name="auto-stories" size={64} color={theme.primary} />
          </Animated.View>
        </View>
        <Text style={styles.appName}>ReadDemo</Text>
        <Text style={styles.tagline}>沉浸阅读，智能推荐</Text>
      </Animated.View>
      
      <View style={styles.loadingIndicator}>
        <View style={styles.dotContainer}>
          {[0, 1, 2].map((index) => (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: fadeAnim,
                  transform: [
                    {
                      scale: rotateAnim.interpolate({
                        inputRange: [0, 0.33, 0.66, 1],
                        outputRange: index === 0 ? [1, 1.5, 1, 1] : 
                                   index === 1 ? [1, 1, 1.5, 1] : 
                                   [1, 1, 1, 1.5],
                      }),
                    },
                  ],
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default LoadingScreen;