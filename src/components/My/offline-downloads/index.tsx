import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar,
  Image,
  Platform 
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { createStyles } from './styles';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import EmptyState from './EmptyState';
import { 
  mockDownloadedBooks, 
  mockDownloadingBooks, 
  mockStorageInfo, 
  downloadSettings,
  DownloadedBook,
  StorageInfo 
} from './mockData';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const OfflineDownloads: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [downloadedBooks, setDownloadedBooks] = useState<DownloadedBook[]>(mockDownloadedBooks);
  const [downloadingBooks, setDownloadingBooks] = useState<DownloadedBook[]>(mockDownloadingBooks);
  const [storageInfo] = useState<StorageInfo>(mockStorageInfo);
  const [isWifiConnected] = useState(true);

  const totalBooks = downloadedBooks.length + downloadingBooks.length;

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
      case 'error':
        return { name: 'error', color: theme.error };
      default:
        return { name: 'file-download', color: theme.textMuted };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'downloading':
        return '下载中';
      case 'paused':
        return '已暂停';
      case 'completed':
        return '已完成';
      case 'waiting':
        return '等待中';
      case 'error':
        return '下载失败';
      default:
        return '未知';
    }
  };

  const handleNovelClick = (book: DownloadedBook) => {
    console.log('点击小说:', book.novel.title);
  };

  const handlePauseAll = () => {
    setDownloadingBooks(prev => 
      prev.map(book => ({ 
        ...book, 
        status: book.status === 'downloading' ? 'paused' : book.status 
      }))
    );
  };

  const handleDeleteBook = (bookId: string) => {
    setDownloadedBooks(prev => prev.filter(book => book.id !== bookId));
    setDownloadingBooks(prev => prev.filter(book => book.id !== bookId));
  };

  const handleStartDownload = () => {
    navigation.navigate('MainTabs');
  };

  if (totalBooks === 0) {
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
          <Text style={styles.headerTitle}>离线下载</Text>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcon name="wifi-off" size={20} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>

        <EmptyState onStartDownload={handleStartDownload} />
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
        <Text style={styles.headerTitle}>离线下载</Text>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcon 
            name={isWifiConnected ? "wifi" : "wifi-off"} 
            size={20} 
            color={theme.textSecondary} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Storage Info */}
        <View style={styles.storageCard}>
          <View style={styles.storageHeader}>
            <View style={styles.storageIconContainer}>
              <MaterialIcon name="storage" size={20} color={theme.primary} />
            </View>
            <View style={styles.storageHeaderText}>
              <Text style={styles.storageTitle}>存储空间</Text>
              <Text style={styles.storageSubtitle}>管理你的下载内容</Text>
            </View>
          </View>

          <View style={styles.storageInfo}>
            <View style={styles.storageStats}>
              <Text style={styles.storageStatsText}>
                已用空间: {storageInfo.used}MB / {storageInfo.total}GB
              </Text>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressBarFill,
                    { width: `${(storageInfo.used / (storageInfo.total * 1024)) * 100}%` }
                  ]}
                />
              </View>
            </View>

            <View style={styles.storageDetails}>
              <Text style={styles.storageDetailText}>可用: {storageInfo.available}GB</Text>
              <Text style={styles.storageDetailText}>下载文件: {totalBooks}个</Text>
            </View>
          </View>
        </View>

        {/* Network Status */}
        <View style={[styles.networkCard, isWifiConnected ? styles.networkConnected : styles.networkDisconnected]}>
          <MaterialIcon 
            name={isWifiConnected ? "wifi" : "wifi-off"} 
            size={20} 
            color={isWifiConnected ? theme.success : theme.error} 
          />
          <View style={styles.networkContent}>
            <Text style={[styles.networkTitle, { color: isWifiConnected ? theme.success : theme.error }]}>
              {isWifiConnected ? 'WiFi已连接' : 'WiFi未连接'}
            </Text>
            <Text style={[styles.networkSubtitle, { color: isWifiConnected ? theme.success : theme.error }]}>
              {isWifiConnected ? '建议在WiFi环境下载，节省流量' : '使用移动网络可能产生额外费用'}
            </Text>
          </View>
        </View>

        {/* Downloading Queue */}
        {downloadingBooks.length > 0 && (
          <View style={styles.downloadingCard}>
            <View style={styles.downloadingHeader}>
              <Text style={styles.downloadingTitle}>下载队列</Text>
              <TouchableOpacity 
                style={styles.pauseAllButton}
                onPress={handlePauseAll}
              >
                <MaterialIcon name="pause" size={16} color={theme.error} />
                <Text style={styles.pauseAllText}>暂停全部</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.downloadingList}>
              {downloadingBooks.map((item, index) => (
                <View
                  key={item.id}
                  style={[
                    styles.bookItem,
                    index !== downloadingBooks.length - 1 && styles.bookItemBorder
                  ]}
                >
                  <View style={styles.bookContent}>
                    <View style={styles.bookCoverContainer}>
                      <Image
                        source={{ uri: item.novel.cover }}
                        style={styles.bookCover}
                        onError={() => console.log('Image load error')}
                      />
                      <View style={styles.statusIndicator}>
                        <MaterialIcon 
                          name={getStatusIcon(item.status).name} 
                          size={12} 
                          color={getStatusIcon(item.status).color} 
                        />
                      </View>
                    </View>

                    <View style={styles.bookInfo}>
                      <Text style={styles.bookTitle} numberOfLines={1}>
                        {item.novel.title}
                      </Text>
                      <Text style={styles.bookChapters} numberOfLines={1}>
                        {item.downloadedChapters} / {item.chapters} 章节
                      </Text>
                      
                      {item.status === 'downloading' && item.progress && (
                        <View style={styles.downloadProgress}>
                          <View style={styles.progressContainer}>
                            <View style={styles.progressBar}>
                              <View 
                                style={[
                                  styles.progressBarFill,
                                  { width: `${item.progress}%` }
                                ]}
                              />
                            </View>
                          </View>
                          <View style={styles.progressStats}>
                            <Text style={styles.progressText}>{item.progress}%</Text>
                            <Text style={styles.speedText}>{item.speed}</Text>
                          </View>
                        </View>
                      )}

                      <View style={styles.bookMeta}>
                        <View style={styles.bookMetaLeft}>
                          <Text style={styles.statusText}>{getStatusText(item.status)}</Text>
                          <Text style={styles.metaText}>•</Text>
                          <Text style={styles.metaText}>{item.size}</Text>
                        </View>
                        <View style={styles.bookActions}>
                          {item.status === 'downloading' && (
                            <TouchableOpacity style={styles.actionButton}>
                              <MaterialIcon name="pause" size={14} color={theme.textMuted} />
                            </TouchableOpacity>
                          )}
                          {item.status === 'paused' && (
                            <TouchableOpacity style={styles.actionButton}>
                              <MaterialIcon name="play-arrow" size={14} color={theme.textMuted} />
                            </TouchableOpacity>
                          )}
                          <TouchableOpacity 
                            style={styles.actionButton}
                            onPress={() => handleDeleteBook(item.id)}
                          >
                            <MaterialIcon name="delete" size={14} color={theme.error} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Downloaded Books */}
        <View style={styles.downloadedCard}>
          <View style={styles.downloadedHeader}>
            <Text style={styles.downloadedTitle}>已下载 ({downloadedBooks.length})</Text>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageText}>管理</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downloadedList}>
            {downloadedBooks.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.bookItem,
                  index !== downloadedBooks.length - 1 && styles.bookItemBorder
                ]}
                onPress={() => handleNovelClick(item)}
                activeOpacity={0.7}
              >
                <View style={styles.bookContent}>
                  <View style={styles.bookCoverContainer}>
                    <Image
                      source={{ uri: item.novel.cover }}
                      style={styles.bookCover}
                      onError={() => console.log('Image load error')}
                    />
                    <View style={[styles.statusIndicator, styles.completedIndicator]}>
                      <MaterialIcon name="check" size={12} color={theme.surface} />
                    </View>
                  </View>

                  <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle} numberOfLines={1}>
                      {item.novel.title}
                    </Text>
                    <Text style={styles.bookChapters} numberOfLines={1}>
                      全{item.chapters}章节 已完成
                    </Text>
                    
                    <View style={styles.bookMeta}>
                      <View style={styles.bookMetaLeft}>
                        <Text style={styles.metaText}>{item.size}</Text>
                        <Text style={styles.metaText}>•</Text>
                        <Text style={styles.metaText}>{item.downloadDate}</Text>
                      </View>
                      <TouchableOpacity 
                        style={styles.actionButton}
                        onPress={() => handleDeleteBook(item.id)}
                      >
                        <MaterialIcon name="delete" size={14} color={theme.error} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Settings */}
        <View style={styles.settingsCard}>
          <Text style={styles.settingsTitle}>下载设置</Text>
          <View style={styles.settingsList}>
            {downloadSettings.map((setting, index) => (
              <View key={index} style={styles.settingItem}>
                <Text style={styles.settingLabel}>{setting.label}</Text>
                <Text style={[
                  styles.settingValue,
                  setting.type === 'switch' && setting.enabled && styles.enabledValue
                ]}>
                  {setting.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OfflineDownloads;