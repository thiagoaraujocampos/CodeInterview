import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return(
    <View style={styles.container}>
      
      <Avatar urlImage='https://instagram.fqsc1-1.fna.fbcdn.net/v/t51.2885-15/255398609_175441054797284_2062283905179635379_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fqsc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=qOhkm2qTV9cAX8k5R86&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjcwNDE4Mjg5MTkxODc0NTcwNw%3D%3D.2-ccb7-4&oh=00_AT_uk06dhNycIXUAk7fq5js-yJhlmFrfPRM9f9mD4b8LwQ&oe=62225AA8&_nc_sid=30a2ef' />
      
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Isabelle
          </Text>
        </View>

        <Text style={styles.message}>
          Grafeira de plantão
        </Text>
      </View>
   </View>
  );
}