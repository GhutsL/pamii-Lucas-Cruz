import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#25D366',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'chatbubbles';

          if (route.name === 'ChatsScreen') iconName = 'chatbubbles';
          else if (route.name === 'StatusScreen') iconName = 'ellipse-outline';
          else if (route.name === 'CallsScreen') iconName = 'call';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Oculta a aba do index
        tabBarStyle: route.name === 'index' ? { display: 'none' } : {},
      })}
    />
  );
}