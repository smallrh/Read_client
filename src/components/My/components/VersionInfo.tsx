import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { createVersionInfoStyles } from './styles/VersionInfoStyles';

interface VersionInfoProps {
  appName?: string;
  version?: string;
  copyright?: string;
}

export const VersionInfo: React.FC<VersionInfoProps> = ({
  appName = '小说阅读器',
  version = 'v2.1.0',
  copyright = '© 2024 Novel Reader. All rights reserved.'
}) => {
  const { theme } = useTheme();
  const styles = createVersionInfoStyles(theme);

  return (
    <View style={styles.versionSection}>
      <View style={styles.versionCard}>
        <Text style={styles.versionText}>{appName} {version}</Text>
        <Text style={styles.copyrightText}>{copyright}</Text>
      </View>
    </View>
  );
};