import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import Header from './Header';
import HeroSection from './HeroSection';
import TagsSection from './TagsSection';
import DescriptionSection from './DescriptionSection';
import ActionButtons from './ActionButtons';
import ChaptersList from './ChaptersList';
import { BookDetailProps } from '../../types/novel';
import { chapters } from '../../data/novels';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

const BookDetail: React.FC<BookDetailProps> = ({ route, navigation }) => {
  const { novel } = route.params;
  const [isInBookshelf, setIsInBookshelf] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { theme, isDarkMode } = useTheme();
  const styles = createStyles(theme);

  // 获取当前小说的章节列表
  const novelChapters = chapters.filter(ch => ch.novelId === novel.id).slice(0, 5);

  const handleAddToBookshelf = () => {
    setIsInBookshelf(!isInBookshelf);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleStartReading = () => {
    console.log('开始阅读:', novel.title);
  };

  const handleShare = () => {
    console.log('分享小说');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDownload = () => {
    console.log('离线下载');
  };

  const handleViewAllChapters = () => {
    navigation.navigate('ChapterList', {
      novelId: novel.id,
      novelTitle: novel.title,
      totalChapters: novel.chapters
    });
  };

  const handleChapterPress = (chapterIndex: number) => {
    console.log('打开章节:', chapterIndex + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor="transparent" translucent />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Header
          title="小说详情"
          isLiked={isLiked}
          onBack={handleBack}
          onShare={handleShare}
          onLike={handleLike}
        />

        <HeroSection novel={novel} />

        <View style={styles.contentContainer}>
          <TagsSection tags={novel.tags} />
          <DescriptionSection 
            description={novel.description} 
            novel={{ title: novel.title, author: novel.author }}
          />
          <ActionButtons
            isInBookshelf={isInBookshelf}
            onStartReading={handleStartReading}
            onAddToBookshelf={handleAddToBookshelf}
            onDownload={handleDownload}
          />
          <ChaptersList
            novelId={novel.id}
            totalChapters={novel.chapters}
            chapters={novelChapters}
            onViewAllChapters={handleViewAllChapters}
            onChapterPress={handleChapterPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetail;