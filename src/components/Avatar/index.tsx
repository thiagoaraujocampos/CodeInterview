import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme'; 

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary100, secondary30 } = theme.colors

  return(
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary30]}
    >
      <Image 
        source={{uri: urlImage}}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}