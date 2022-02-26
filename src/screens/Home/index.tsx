import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
import { Background } from '../../components/Backgound';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Google Interview',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Como pesar um elefante sem balança? É possível encaixar uma pilha de moedas do tamanho de um arranha-céus numa sala?'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Google Interview',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Como pesar um elefante sem balança? É possível encaixar uma pilha de moedas do tamanho de um arranha-céus numa sala?'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') :  setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails' as never)
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate' as never)
  }


  return(
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect 
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.content}>
        <ListHeader title='Treinos agendados' subtitle='Total 6' />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item}
              onPress={handleAppointmentDetails} 
            />
          )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>    
  );
}