import React, { useState } from 'react';
import { View, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  style: any;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, style }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <View style={[style, { backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' }]}>
        <MaterialIcon name="broken-image" size={24} color="#888" />
      </View>
    );
  }

  return (
    <Image
      source={{ uri: src }}
      style={style}
      onError={() => setError(true)}
      accessibilityLabel={alt}
    />
  );
};

export default ImageWithFallback;