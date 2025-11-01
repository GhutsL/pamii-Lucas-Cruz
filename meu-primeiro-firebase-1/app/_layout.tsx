import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

function GradientHeaderTitle() {
  return (
    <View>
      <Svg height={36} width={260} viewBox="0 0 260 36">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#FFFF00" stopOpacity="1" />
            <Stop offset="1" stopColor="#FF0000" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize="22"
          fontWeight="700"
          x="130"
          y="22"
          textAnchor="middle"
        >
          Testando FireBase
        </SvgText>
      </Svg>
    </View>
  );
}

export default function RootLayout() {
  return (
    // Define opções de header padrão e título específico para a rota index
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#000000ff' }, // vermelho claro
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        // use a custom title component to render gradient text
        headerTitle: () => <GradientHeaderTitle />,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
