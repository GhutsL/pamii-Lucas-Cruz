import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDh3TO6IoUGrwMivWPjRtUnaDP6gR28TOA",
  authDomain: "meu-primeiro-firebase-a8460.firebaseapp.com",
  projectId: "meu-primeiro-firebase-a8460",
  storageBucket: "meu-primeiro-firebase-a8460.firebasestorage.app",
  messagingSenderId: "205878838955",
  appId: "1:205878838955:web:8cf13e7a1851f7a0bcd9ee"
}


firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Esconde a barra superior */}
      <StatusBar hidden />

      {/* Caixa envolvendo a lista */}
      <View style={styles.listBox}>
        {/* Cabeçalho dentro da caixa (preenche toda a largura interna) */}
        <View style={styles.boxHeader}>
          <Text style={styles.boxHeaderText}>Lista de nomes</Text>
        </View>

        {/* Conteúdo da caixa com o padding interno original */}
        <View style={styles.boxContent}>
          <FlatList
            data={nomes}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{item.Nome} {item.Sobrenome}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#f5f7fb',
  },

  listBox: {
    width: '50%',
    height: '40%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 0,
    // sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listContent: {
    paddingBottom: 16,
  },
  listItem: {
    paddingVertical: 12, // aumenta espaçamento entre os nomes
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  listText: {
    fontSize: 18,
    color: '#111',
  },
  boxHeader: {
    width: '100%',
    backgroundColor: '#ADD8E6', // azul claro
    paddingVertical: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 0,
    alignItems: 'center',
  },
  boxHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  boxContent: {
    padding: 12,
    // round bottom corners to match the outer box
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
    flex: 1,
  },
});