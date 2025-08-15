import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Call } from '../types';

// Lista de chamadas de exemplo
const calls: Call[] = [
  {
    id: '1',
    name: 'Ana Clara',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    type: 'outgoing', // incoming, outgoing ou missed / ligando, atendida ou perdida
    status: 'missed', // para ícones de status (pode ser igual a type para simplicidade)
    time: 'Ontem, 14:32',
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    type: 'incoming',
    status: 'incoming',
    time: 'Hoje, 09:12',
  },
];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.callItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.callInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.subInfo}>
                <Ionicons
                  name={
                    item.status === 'missed'
                      ? 'arrow-down'
                      : item.status === 'incoming'
                      ? 'arrow-down'
                      : 'arrow-up'
                  }
                  size={16}
                  color={item.status === 'missed' ? 'red' : 'green'}
                />
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons
                name={item.type === 'outgoing' ? 'call' : 'videocam'}
                size={24}
                color="#25D366"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  callInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  subInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  time: { fontSize: 14, color: '#666', marginLeft: 5 },
});
