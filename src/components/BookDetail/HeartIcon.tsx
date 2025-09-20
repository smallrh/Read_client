import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface HeartIconProps {
  isLiked: boolean;
  size?: number;
}

const HeartIcon: React.FC<HeartIconProps> = ({ isLiked, size = 20 }) => {
  return isLiked ? (
    <MaterialIcon name="favorite" size={size} color="#ff4757" />
  ) : (
    <MaterialIcon name="favorite-border" size={size} color="#666" />
  );
};

export default HeartIcon;