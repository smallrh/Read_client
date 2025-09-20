import React from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  TextInput,
  Image,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { createStyles } from './styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const EditProfile: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [profileData, setProfileData] = React.useState({
    username: '书虫小伙伴',
    nickname: '小书虫',
    phone: '138****8888',
    email: 'reader@example.com',
    birthday: '1995-06-15',
    location: '北京市朝阳区',
    bio: '热爱阅读，享受每一个精彩的故事时刻 📚',
    isPhonePublic: false,
    isEmailPublic: false,
    isBirthdayPublic: true,
    isLocationPublic: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('保存资料:', profileData);
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangeAvatar = () => {
    console.log('Change avatar pressed');
    // Add avatar change logic here
  };

  const FormInputWithIcon: React.FC<{
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    icon?: string;
    multiline?: boolean;
    maxLength?: number;
    showToggle?: boolean;
    toggleValue?: boolean;
    onToggleChange?: (value: boolean) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  }> = ({ 
    label, 
    value, 
    onChangeText, 
    placeholder, 
    icon, 
    multiline, 
    maxLength,
    showToggle,
    toggleValue,
    onToggleChange,
    keyboardType = 'default'
  }) => (
    <View style={styles.inputGroup}>
      <View style={styles.labelRow}>
        <Text style={styles.inputLabel}>{label}</Text>
        {showToggle && (
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>公开显示</Text>
            <Switch
              value={toggleValue}
              onValueChange={onToggleChange}
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={theme.card}
              style={styles.switch}
            />
          </View>
        )}
      </View>
      <View style={styles.inputContainer}>
        {icon && (
          <View style={styles.inputIcon}>
            <MaterialIcon name={icon} size={20} color={theme.textMuted} />
          </View>
        )}
        <TextInput
          style={[
            styles.textInput, 
            icon && styles.textInputWithIcon, 
            multiline && styles.textArea
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          multiline={multiline}
          maxLength={maxLength}
          keyboardType={keyboardType}
          textAlignVertical={multiline ? "top" : "center"}
        />
      </View>
      {maxLength && (
        <Text style={styles.characterCount}>
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor="#F8FAFC" 
      />
      
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>编辑资料</Text>
        <TouchableOpacity
          onPress={handleSave}
          style={styles.saveButton}
        >
          <MaterialIcon name="save" size={16} color="#FFFFFF" style={styles.saveIcon} />
          <Text style={styles.saveButtonText}>保存</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Background Gradient */}
        <View style={styles.backgroundGradient} />
        
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarGlow} />
            <View style={styles.avatar}>
              <MaterialIcon name="person" size={36} color={theme.surface} />
            </View>
            <TouchableOpacity 
              style={styles.cameraButton}
              onPress={handleChangeAvatar}
              activeOpacity={0.8}
            >
              <MaterialIcon name="camera-alt" size={14} color={theme.surface} />
            </TouchableOpacity>
          </View>
          <Text style={styles.avatarText}>点击更换头像</Text>
        </View>

        {/* Basic Info Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>基本信息</Text>
          
          <FormInputWithIcon
            label="用户名"
            value={profileData.username}
            onChangeText={(text) => handleInputChange('username', text)}
            icon="person"
          />

          <FormInputWithIcon
            label="昵称"
            value={profileData.nickname}
            onChangeText={(text) => handleInputChange('nickname', text)}
            icon="person"
          />

          <FormInputWithIcon
            label="个性签名"
            value={profileData.bio}
            onChangeText={(text) => handleInputChange('bio', text)}
            placeholder="写一句话介绍自己..."
            multiline
            maxLength={100}
          />
        </View>

        {/* Contact Info Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>联系方式</Text>
          
          <FormInputWithIcon
            label="手机号"
            value={profileData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            icon="phone"
            keyboardType="phone-pad"
            showToggle
            toggleValue={profileData.isPhonePublic}
            onToggleChange={(value) => handleInputChange('isPhonePublic', value)}
          />

          <FormInputWithIcon
            label="邮箱"
            value={profileData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            icon="email"
            keyboardType="email-address"
            showToggle
            toggleValue={profileData.isEmailPublic}
            onToggleChange={(value) => handleInputChange('isEmailPublic', value)}
          />
        </View>

        {/* Personal Info Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>个人信息</Text>
          
          <FormInputWithIcon
            label="生日"
            value={profileData.birthday}
            onChangeText={(text) => handleInputChange('birthday', text)}
            icon="event"
            showToggle
            toggleValue={profileData.isBirthdayPublic}
            onToggleChange={(value) => handleInputChange('isBirthdayPublic', value)}
          />

          <FormInputWithIcon
            label="所在地"
            value={profileData.location}
            onChangeText={(text) => handleInputChange('location', text)}
            icon="location-on"
            showToggle
            toggleValue={profileData.isLocationPublic}
            onToggleChange={(value) => handleInputChange('isLocationPublic', value)}
          />
        </View>

        {/* Privacy Notice Card */}
        <View style={styles.privacyCard}>
          <View style={styles.privacyContent}>
            <MaterialIcon 
              name="lock" 
              size={20} 
              color={theme.textSecondary} 
              style={styles.privacyIcon} 
            />
            <View style={styles.privacyText}>
              <Text style={styles.privacyTitle}>隐私保护</Text>
              <Text style={styles.privacyDescription}>
                我们严格保护您的个人信息，您可以选择哪些信息向其他用户公开显示。
                所有敏感信息都经过加密处理，不会被第三方获取。
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;