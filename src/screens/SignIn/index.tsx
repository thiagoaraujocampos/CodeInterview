import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function SignIn() {
  const { loading, signIn } = useAuth();
  
  async function handleSignIn() {
    try {
      await signIn();
    } catch(error: any) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
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
        {
          loading ? <ActivityIndicator color={theme.colors.primary} /> :
          <ButtonIcon 
            title="Entrar com Discord"
            onPress={handleSignIn}
          />  
        }     
      </View>
    </View>
    </Background>
  )
}