import React, { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { useTheme, ThemeType } from '../../../context/ThemeContext';
import { createSettingsStyles } from './styles';
import { CommonHeader, SettingCard, SwitchItem } from '../shared';
import { 
  FontSizeSelector, 
  ThemeSelector, 
  ReadingModeSelector, 
  SliderItem 
} from './components';

interface ReadingSettingsProps {
  onBack?: () => void;
}

const ReadingSettings: React.FC<ReadingSettingsProps> = ({ onBack }) => {
  const { theme, currentThemeType, setTheme } = useTheme();
  const styles = createSettingsStyles(theme);

  const [selectedFontSize, setSelectedFontSize] = useState(1);
  const [selectedReadingMode, setSelectedReadingMode] = useState(0);
  const [autoTurnPage, setAutoTurnPage] = useState(false);
  const [volumeKeyTurnPage, setVolumeKeyTurnPage] = useState(true);
  const [keepScreenOn, setKeepScreenOn] = useState(true);
  const [lineSpacing, setLineSpacing] = useState(1.5);

  // 使用简单的slider即可，不需要复杂的动画逻辑

  const fontSizes = [
    { name: '小', value: 14 },
    { name: '中', value: 16 },
    { name: '大', value: 18 },
    { name: '特大', value: 20 }
  ];

  const themes = [
    { name: '经典白', bg: '#ffffff', text: '#000000', preview: '#f8f9fa', themeType: 'light' as ThemeType },
    { name: '护眼绿', bg: '#c7e9c0', text: '#2d5a27', preview: '#e8f5e8', themeType: 'eyeCareGreen' as ThemeType },
    { name: '羊皮纸', bg: '#f4f1e8', text: '#5c4b37', preview: '#f9f6f0', themeType: 'parchment' as ThemeType },
    { name: '深邃黑', bg: '#1a1a1a', text: '#ffffff', preview: '#2a2a2a', themeType: 'dark' as ThemeType }
  ];

  // 根据当前主题类型获取选中的主题索引
  const selectedTheme = themes.findIndex(t => t.themeType === currentThemeType);

  const readingModes = [
    { name: '仿真翻页', description: '模拟真实翻书效果' },
    { name: '滑动翻页', description: '流畅的滑动体验' },
    { name: '上下滚动', description: '连续阅读模式' }
  ];

  const handleThemePress = (index: number) => {
    const selectedThemeData = themes[index];
    setTheme(selectedThemeData.themeType);
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="阅读设置" onBack={onBack} />

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 字体设置 */}
        <SettingCard 
          title="字体设置" 
          subtitle="调整阅读字体大小" 
          icon="text-fields"
        >
          <FontSizeSelector
            fontSizes={fontSizes}
            selectedIndex={selectedFontSize}
            onSelect={setSelectedFontSize}
          />
        </SettingCard>

        {/* 主题设置 */}
        <SettingCard 
          title="主题设置" 
          subtitle="选择阅读背景主题" 
          icon="palette"
        >
          <ThemeSelector
            themes={themes}
            selectedIndex={selectedTheme}
            onSelect={handleThemePress}
          />
        </SettingCard>

        {/* 翻页模式 */}
        <SettingCard 
          title="翻页模式" 
          subtitle="选择你喜欢的阅读方式" 
          icon="menu-book"
        >
          <ReadingModeSelector
            readingModes={readingModes}
            selectedIndex={selectedReadingMode}
            onSelect={setSelectedReadingMode}
          />
        </SettingCard>

        {/* 高级设置 */}
        <SettingCard 
          title="高级设置" 
          subtitle="个性化阅读体验" 
          icon="visibility"
          isLast={true}
        >
          <SwitchItem
            title="自动翻页"
            description="定时自动翻到下一页"
            value={autoTurnPage}
            onValueChange={setAutoTurnPage}
          />
          
          <SwitchItem
            title="音量键翻页"
            description="使用音量键控制翻页"
            value={volumeKeyTurnPage}
            onValueChange={setVolumeKeyTurnPage}
          />
          
          <SwitchItem
            title="屏幕常亮"
            description="阅读时保持屏幕常亮"
            value={keepScreenOn}
            onValueChange={setKeepScreenOn}
          />
          
          <SliderItem
            title="行间距"
            description="调整文本行间距"
            value={lineSpacing}
            minimumValue={1.0}
            maximumValue={3.0}
            onValueChange={setLineSpacing}
            unit="倍"
            decimalPlaces={1}
          />
        </SettingCard>
      </ScrollView>
    </View>
  );
};

export default ReadingSettings;