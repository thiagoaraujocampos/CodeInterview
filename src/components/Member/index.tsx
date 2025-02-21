import { Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../Avatar';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps
}

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online'

  return (
    <View style={styles.container}>
      <Avatar 
        urlImage={data.avatar_url}
      />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>
        <View style={styles.status}>
          <View 
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary
              }
            ]}
          />
            

          <Text style={styles.nameStatus}>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </Text>
        </View>
      </View>
    </View>
  );
}
