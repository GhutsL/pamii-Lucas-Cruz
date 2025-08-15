// /components/ChatItem.tsx
import React from 'react';

// Componentes básicos do React Native
import { View, Text, Image, StyleSheet } from 'react-native';

// Import da interface Chat para tipagem do prop `data`
import { Chat } from '../types';

// Props esperadas pelo componente: um objeto `data` do tipo Chat.
interface Props {
  data: Chat;
}

// Componente funcional que recebe `data` e renderiza o layout do item de chat.
export default function ChatItem({ data }: Props) {
  return (

    // View que contém toda a linha do item
    <View style={styles.chatItem}>

      {/* Avatar do usuário */}
      <Image source={{ uri: data.avatar }} style={styles.avatar} />

      {/* Container do texto com nome e mensagem */}
      <View style={styles.chatText}>

        {/* Nome em negrito */}
        <Text style={styles.name}>{data.name}</Text>

        {/* Pré-visualização da última mensagem */}
        <Text style={styles.message}>{data.message}</Text>
      </View>

      {/* Horário da última mensagem, alinhado à direita */}
      <Text style={styles.time}>{data.time}</Text>
    </View>
  );
}

// Estilos isolados com StyleSheet (melhor performance)
const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row', // organiza itens em linha (avatar | textos | horário)
    alignItems: 'center', // alinha verticalmente ao centro
    padding: 15, // espaçamento interno
    borderBottomWidth: 0.5, // linha de separação entre itens
    borderBottomColor: '#ccc',
  },
  
  avatar: { width: 50, height: 50, borderRadius: 25 }, // círculo 50x50
  chatText: { flex: 1, marginLeft: 10 }, // ocupa o espaço disponível entre avatar e horário
  name: { fontWeight: 'bold', fontSize: 16 },
  message: { color: 'gray' },
  time: { fontSize: 12, color: 'gray' },
});