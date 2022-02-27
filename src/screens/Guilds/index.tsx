import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Google Interview',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Google Interview',
      icon: 'image.png',
      owner: false
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64, paddingTop: 64 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}  
        ListHeaderComponent={() => <ListDivider isCentered />}  
        style={styles.guilds}
      />
    </View>
  );
}