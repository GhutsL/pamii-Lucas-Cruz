// /screens/StatusScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Status } from '../types';

// Dados estáticos de exemplo
const statusList: Status[] = [
  { id: '1', name: 'João', time: 'Hoje 08:17', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '2', name: 'Maria', time: 'Ontem 23:33', avatar: 'https://i.pravatar.cc/150?img=4' },
];

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      {/* Lista de status */}
      
      <FlatList
        data={statusList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.statusItem}>

            {/* Avatar com borda para indicar novo status */}
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            {/* Nome e tempo */}
            <View style={styles.textContainer}> 
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  statusItem: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 0.5, borderBottomColor: '#ccc' },
  avatar: { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#25D366' },
  textContainer: { marginLeft: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
  time: { color: 'gray' },
});