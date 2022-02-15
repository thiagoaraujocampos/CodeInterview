import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return(
    <View style={styles.container}>
      
      <Avatar urlImage='https://scontent.fqsc1-1.fna.fbcdn.net/v/t39.30808-1/s200x200/272080786_465801678533468_3475554019920251202_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF1fHDcw3DsNqjhTv70VJqsxPqbGsgnORrE-psayCc5Gg4-WCzdMc84ou7VNhmDeKcxAK3JS-4lhrZDvmUSvZeI&_nc_ohc=jiMB2EU7djsAX_AMweJ&_nc_ht=scontent.fqsc1-1.fna&oh=00_AT-KOzHVfFURXkhGWg4bolUhRz5gdVQ42BRf3l8NPdJFIQ&oe=620E1E05' />
      
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