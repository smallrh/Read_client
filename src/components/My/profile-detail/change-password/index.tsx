import React, { useState } from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../../context/ThemeContext';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import { createStyles } from './styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ChangePassword: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password: string) => {
    const requirements = [
      { test: password.length >= 8, message: '至少8个字符' },
      { test: /[A-Z]/.test(password), message: '包含大写字母' },
      { test: /[a-z]/.test(password), message: '包含小写字母' },
      { test: /\d/.test(password), message: '包含数字' },
      { test: /[!@#$%^&*(),.?":{}|<>]/.test(password), message: '包含特殊字符' }
    ];
    
    return requirements;
  };

  const handleInputChange = (field: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = '请输入当前密码';
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = '请输入新密码';
    } else {
      const requirements = validatePassword(passwordData.newPassword);
      const failedRequirements = requirements.filter(req => !req.test);
      if (failedRequirements.length > 0) {
        newErrors.newPassword = `密码强度不足: ${failedRequirements.map(req => req.message).join('、')}`;
      }
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = '请确认新密码';
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      newErrors.newPassword = '新密码不能与当前密码相同';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success
      console.log('密码修改成功:', passwordData);
      navigation.goBack();
    } catch (error) {
      setErrors({ submit: '密码修改失败，请重试' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const passwordRequirements = validatePassword(passwordData.newPassword);

  const PasswordInput: React.FC<{
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    showPassword: boolean;
    onToggleVisibility: () => void;
    error?: string;
  }> = ({ label, value, onChangeText, placeholder, showPassword, onToggleVisibility, error }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <MaterialIcon name="lock" size={20} color={theme.textMuted} />
        </View>
        <TextInput
          style={[styles.textInput, styles.textInputWithIcon]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={onToggleVisibility}
          style={styles.eyeButton}
          activeOpacity={0.7}
        >
          <MaterialIcon 
            name={showPassword ? 'visibility-off' : 'visibility'} 
            size={18} 
            color={theme.textMuted} 
          />
        </TouchableOpacity>
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <MaterialIcon name="error" size={16} color={theme.error} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>修改密码</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Security Notice */}
        <View style={styles.securityNotice}>
          <View style={styles.noticeContent}>
            <MaterialIcon name="security" size={20} color={theme.primary} style={styles.noticeIcon} />
            <View style={styles.noticeText}>
              <Text style={styles.noticeTitle}>安全提醒</Text>
              <Text style={styles.noticeDescription}>
                为了保护您的账户安全，请定期更新密码并使用强密码。修改密码后，您需要重新登录。
              </Text>
            </View>
          </View>
        </View>

        {/* Password Form */}
        <View style={styles.formCard}>
          <PasswordInput
            label="当前密码"
            value={passwordData.currentPassword}
            onChangeText={(text) => handleInputChange('currentPassword', text)}
            placeholder="请输入当前密码"
            showPassword={showPasswords.current}
            onToggleVisibility={() => togglePasswordVisibility('current')}
            error={errors.currentPassword}
          />

          <PasswordInput
            label="新密码"
            value={passwordData.newPassword}
            onChangeText={(text) => handleInputChange('newPassword', text)}
            placeholder="请输入新密码"
            showPassword={showPasswords.new}
            onToggleVisibility={() => togglePasswordVisibility('new')}
            error={errors.newPassword}
          />

          {/* Password Requirements */}
          {passwordData.newPassword && (
            <View style={styles.requirementsContainer}>
              <Text style={styles.requirementsTitle}>密码强度要求：</Text>
              <View style={styles.requirementsList}>
                {passwordRequirements.map((req, index) => (
                  <View key={index} style={styles.requirementItem}>
                    <MaterialIcon 
                      name={req.test ? 'check-circle' : 'radio-button-unchecked'} 
                      size={14} 
                      color={req.test ? theme.success : theme.textMuted} 
                    />
                    <Text style={[
                      styles.requirementText,
                      { color: req.test ? theme.success : theme.textMuted }
                    ]}>
                      {req.message}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          <PasswordInput
            label="确认新密码"
            value={passwordData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            placeholder="请再次输入新密码"
            showPassword={showPasswords.confirm}
            onToggleVisibility={() => togglePasswordVisibility('confirm')}
            error={errors.confirmPassword}
          />

          {/* Submit Error */}
          {errors.submit && (
            <View style={styles.submitErrorContainer}>
              <MaterialIcon name="error" size={16} color={theme.error} />
              <Text style={styles.submitErrorText}>{errors.submit}</Text>
            </View>
          )}

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            style={[styles.submitButton, isLoading && styles.submitButtonDisabled]}
            activeOpacity={0.8}
          >
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={theme.surface} />
                <Text style={styles.submitButtonText}>修改中...</Text>
              </View>
            ) : (
              <Text style={styles.submitButtonText}>确认修改</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Security Tips */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>密码安全建议</Text>
          <View style={styles.tipsList}>
            {[
              '使用至少8个字符，包含大小写字母、数字和特殊字符',
              '避免使用个人信息作为密码，如生日、姓名等',
              '定期更换密码，不要重复使用旧密码',
              '不要在多个平台使用相同密码'
            ].map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <View style={styles.tipDot} />
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;