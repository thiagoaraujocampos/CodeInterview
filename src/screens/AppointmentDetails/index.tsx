import React from 'react';
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Background } from '../../components/Backgound';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Isabelle',
      avatar_url: 'https://scontent.fqsc1-1.fna.fbcdn.net/v/t39.30808-1/s200x200/272080786_465801678533468_3475554019920251202_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF1fHDcw3DsNqjhTv70VJqsxPqbGsgnORrE-psayCc5Gg4-WCzdMc84ou7VNhmDeKcxAK3JS-4lhrZDvmUSvZeI&_nc_ohc=jiMB2EU7djsAX_AMweJ&_nc_ht=scontent.fqsc1-1.fna&oh=00_AT-KOzHVfFURXkhGWg4bolUhRz5gdVQ42BRf3l8NPdJFIQ&oe=620E1E05',
      status: 'online'
    },
    {
      id: '2',
      username: 'Isabelle',
      avatar_url: 'https://scontent.fqsc1-1.fna.fbcdn.net/v/t39.30808-1/s200x200/272080786_465801678533468_3475554019920251202_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF1fHDcw3DsNqjhTv70VJqsxPqbGsgnORrE-psayCc5Gg4-WCzdMc84ou7VNhmDeKcxAK3JS-4lhrZDvmUSvZeI&_nc_ohc=jiMB2EU7djsAX_AMweJ&_nc_ht=scontent.fqsc1-1.fna&oh=00_AT-KOzHVfFURXkhGWg4bolUhRz5gdVQ42BRf3l8NPdJFIQ&oe=620E1E05',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> Google Interview </Text>
          <Text style={styles.subtitle}> Como pesar um elefante sem balança? É possível encaixar uma pilha de moedas do tamanho de um arranha-céus numa sala?  </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member 
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title="Entrar no servidor do Discord"
        />
      </View>

    </Background>
  );
}
