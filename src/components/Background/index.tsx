import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { tertiary100, tertiary30 } = theme.colors

  return(
    <LinearGradient
      style={styles.container}
      colors={[tertiary100, tertiary30]}
    >
      {children}
    </LinearGradient>
  );
}