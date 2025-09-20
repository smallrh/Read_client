import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Chapter } from '../../types/novel';
import { getChapterTitle } from '../../utils';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface ChaptersListProps {
  novelId: string;
  totalChapters: number;
  chapters: Chapter[];
  onViewAllChapters: () => void;
  onChapterPress: (chapterIndex: number) => void;
}

const ChaptersList: React.FC<ChaptersListProps> = ({
  novelId,
  totalChapters,
  chapters,
  onViewAllChapters,
  onChapterPress
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.chaptersCard}>
        <View style={styles.chaptersHeader}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>目录</Text>
            <Text style={styles.chaptersCount}>共{totalChapters}章</Text>
          </View>
        </View>

        <View style={styles.chaptersList}>
          {Array.from({ length: Math.min(5, totalChapters) }, (_, i) => {
            const chapter = chapters[i];
            const chapterTitle = chapter ? chapter.title : `第${i + 1}章：${getChapterTitle(i, novelId)}`;

            return (
              <TouchableOpacity
                key={i}
                style={styles.chapterItem}
                onPress={() => onChapterPress(i)}
              >
                <View style={styles.chapterContent}>
                  <Text style={styles.chapterTitle} numberOfLines={1}>
                    {chapterTitle}
                  </Text>
                </View>
                <View style={styles.chapterMeta}>
                  <View style={styles.chapterDate}>
                    <MaterialIcon name="schedule" size={12} color={theme.textMuted} />
                    <Text style={styles.chapterDateText}>
                      {new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </Text>
                  </View>
                  {i < 2 && (
                    <View style={styles.freeTag}>
                      <Text style={styles.freeTagText}>免费</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.allChaptersButton}
          onPress={onViewAllChapters}
        >
          <Text style={styles.allChaptersButtonText}>
            查看全部章节 ({totalChapters}章) →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChaptersList;