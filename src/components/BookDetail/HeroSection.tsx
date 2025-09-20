import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImageWithFallback from './ImageWithFallback';
import BookMeta from './BookMeta';
import { Novel } from '../../types/novel';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface HeroSectionProps {
  novel: Novel;
}

const HeroSection: React.FC<HeroSectionProps> = ({ novel }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.heroContainer}>
      {/* 背景模糊层 */}
      <ImageBackground
        source={{ uri: novel.cover }}
        style={styles.backgroundImage}
        blurRadius={20}
      >
        <View style={styles.backgroundOverlay} />
      </ImageBackground>

      {/* 内容 */}
      <View style={styles.heroContent}>
        <View style={styles.bookInfoContainer}>
          {/* 封面 */}
          <View style={styles.coverContainer}>
            <ImageWithFallback
              src={novel.cover}
              alt={novel.title}
              style={styles.coverImage}
            />
            {/* Glow 效果 */}
            <LinearGradient
              colors={['rgba(0,0,0,0.2)', 'transparent']}
              style={styles.coverGlow}
            />
          </View>

          {/* Meta 信息 */}
          <BookMeta novel={novel} />
        </View>
      </View>
    </View>
  );
};

export default HeroSection;