import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

const { height: screenHeight } = Dimensions.get('window');

interface DescriptionSectionProps {
  description: string;
  novel?: {
    title: string;
    author: string;
  };
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description, novel }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // 限制显示的字符数
  const maxPreviewLength = 120;
  const shouldShowMore = description.length > maxPreviewLength;
  const previewText = shouldShowMore 
    ? description.substring(0, maxPreviewLength) + '...' 
    : description;
  
  return (
    <View style={styles.sectionContainer}>
      {/* 标题和查看按钮在同一行 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>作品简介</Text>
        <TouchableOpacity 
          style={styles.viewFullButton} 
          onPress={openModal}
          activeOpacity={0.7}
        >
          <Text style={styles.viewFullButtonText}>查看全部</Text>
          <MaterialIcon name="chevron-right" size={14} color={theme.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.descriptionCard}>
        <Text style={styles.description}>
          {previewText}
        </Text>
      </View>

      {/* 完整简介弹窗 - 95%还原Web端设计 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1}
          onPress={closeModal}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Header - 完全还原Web端设计 */}
            <View style={styles.modalHeader}>
              <View style={styles.headerLeft}>
                <View style={styles.headerIconContainer}>
                  <MaterialIcon name="menu-book" size={20} color={theme.primary} />
                </View>
                <Text style={styles.modalTitle}>作品简介</Text>
              </View>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialIcon name="close" size={20} color={theme.textSecondary} />
              </TouchableOpacity>
            </View>

            {/* Content - 完全还原Web端布局 */}
            <View style={styles.modalContentContainer}>
              {/* Novel Info */}
              {novel && (
                <View style={styles.novelInfoSection}>
                  <Text style={styles.novelTitle}>{novel.title}</Text>
                  <Text style={styles.novelAuthor}>作者：{novel.author}</Text>
                </View>
              )}

              {/* Scrollable Description with styled container */}
              <View style={styles.descriptionScrollContainer}>
                <ScrollView 
                  style={styles.descriptionScrollArea}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.scrollContent}
                >
                  <Text style={styles.webStyleDescription}>
                    {description}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DescriptionSection;