import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();
  
  function handleSignIn() {
    navigation.navigate('Home' as never);
  }

  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize seus {'\n'}
          treinos
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para treinar suas skills {'\n'}
          com outras pessoas
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}