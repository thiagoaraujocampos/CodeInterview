import { Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action}: Props) {
  const { tertiary100, tertiary30, heading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
    style={styles.container}
      colors={[tertiary100, tertiary30]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>
        { title }
      </Text>

    {
      action &&
      <View>
        { action }
      </View>
    }

    </LinearGradient>
  );
}
