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
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}