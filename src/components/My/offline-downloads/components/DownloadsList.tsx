import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createDownloadsListStyles } from './styles/DownloadsListStyles';

interface DownloadedBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  chapters: number;
  downloadedChapters: number;
  size: string;
  downloadDate: string;
  status: 'downloading' | 'paused' | 'completed' | 'waiting';
  progress: number;
}

interface DownloadsListProps {
  books: DownloadedBook[];
  onBookPress?: (book: DownloadedBook) => void;
  onDeleteBook?: (bookId: string) => void;
  onPauseResume?: (bookId: string) => void;
}

export const DownloadsList: React.FC<DownloadsListProps> = ({
  books,
  onBookPress,
  onDeleteBook,
  onPauseResume
}) => {
  const { theme } = useTheme();
  const styles = createDownloadsListStyles(theme);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'downloading':
        return { name: 'file-download', color: theme.primary };
      case 'paused':
        return { name: 'pause', color: theme.warning };
      case 'completed':
        return { name: 'check-circle', color: theme.success };
      case 'waiting':
        return { name: 'schedule', color: theme.textMuted };
      default:
        return { name: 'help', color: theme.textMuted };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'downloading': return '下载中';
      case 'paused': return '已暂停';
      case 'completed': return '已完成';
      case 'waiting': return '等待中';
      default: return '未知';
    }
  };

  const renderBook = ({ item }: { item: DownloadedBook }) => {
    const statusIcon = getStatusIcon(item.status);
    
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPress={() => onBookPress?.(item)}
        activeOpacity={0.8}
      >
        <Image source={{ uri: item.cover }} style={styles.bookCover} />
        
        <View style={styles.bookContent}>
          <View style={styles.bookHeader}>
            <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
            <View style={styles.bookStatus}>
              <MaterialIcon 
                name={statusIcon.name} 
                size={16} 
                color={statusIcon.color} 
              />
              <Text style={[styles.statusText, { color: statusIcon.color }]}>
                {getStatusText(item.status)}
              </Text>
            </View>
          </View>
          
          <Text style={styles.bookAuthor}>作者: {item.author}</Text>
          
          <View style={styles.bookDetails}>
            <Text style={styles.bookSize}>{item.size}</Text>
            <Text style={styles.bookChapters}>
              {item.downloadedChapters}/{item.chapters} 章
            </Text>
          </View>
          
          {item.status !== 'completed' && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${item.progress}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>{item.progress}%</Text>
            </View>
          )}
          
          <View style={styles.bookActions}>
            <Text style={styles.downloadDate}>
              下载时间: {new Date(item.downloadDate).toLocaleDateString()}
            </Text>
            
            <View style={styles.actionButtons}>
              {item.status === 'downloading' && onPauseResume && (
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => onPauseResume(item.id)}
                >
                  <MaterialIcon name="pause" size={16} color={theme.warning} />
                </TouchableOpacity>
              )}
              
              {item.status === 'paused' && onPauseResume && (
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => onPauseResume(item.id)}
                >
                  <MaterialIcon name="play-arrow" size={16} color={theme.primary} />
                </TouchableOpacity>
              )}
              
              {onDeleteBook && (
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => onDeleteBook(item.id)}
                >
                  <MaterialIcon name="delete" size={16} color={theme.error} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.downloadsCard}>
      <View style={styles.downloadsHeader}>
        <View style={styles.downloadsTitleContainer}>
          <MaterialIcon name="file-download" size={20} color={theme.primary} />
          <Text style={styles.downloadsTitle}>下载列表</Text>
        </View>
        <Text style={styles.booksCount}>{books.length} 本书</Text>
      </View>
      
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};