// /screens/ChatsScreen.tsx
import React from 'react';

// Componentes do React Native que vamos usar
import { View, FlatList, StyleSheet } from 'react-native';

// Tipagem da interface Chat
import { Chat } from '../types';

// Componente que renderiza cada item de chat
import ChatItem from '../components/chatItem';

// Exemplo de dados estáticos para popular a lista (em um app real viria de uma API ou storage)
const chats: Chat[] = [
  { id: '1', name: 'Pedro', message: 'E aí, paga o que me deve moleque', time: '10:36', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Maia', message: 'Até amanhã!', time: 'Ontem', avatar: 'https://i.pravatar.cc/150?img=2' },
];

// Tela que mostra a lista de conversas
export default function ChatsScreen() {
  return (
    // Container principal
    <View style={styles.container}>
      {/* FlatList é otimizado para listas grandes. Tipado como Chat */}
      <FlatList
        data={chats} // array de dados
        keyExtractor={(item) => item.id} // extrai a key única de cada item
        renderItem={({ item }) => <ChatItem data={item} />} // renderiza cada item usando ChatItem
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});