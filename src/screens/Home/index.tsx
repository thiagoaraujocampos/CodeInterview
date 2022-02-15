import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')

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
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') :  setCategory(categoryId);
  }

  return(
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
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
            <Text>{item.guild.name}</Text>
            )}
          />

        </View>

      </View>
    </View>    
  );
}