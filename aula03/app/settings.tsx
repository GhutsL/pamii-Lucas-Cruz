import React from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarImage, AvatarBadge, AvatarFallbackText } from "@/components/ui/avatar";
import { Settings, User, Lock, Bell } from "lucide-react-native";

export default function SettingsScreen() {
  return (
    <Box className="flex-1 bg-white p-4">
      <Heading className="text-success-800 mb-4">Configurações</Heading>
      <Box className="flex-row items-center mb-6">
        <Avatar size="lg">
          <AvatarFallbackText>Seu Nome</AvatarFallbackText>
          <AvatarImage source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80" }} />
          <AvatarBadge />
        </Avatar>
        <Box className="ml-4">
          <Text className="font-bold text-lg">Seu Nome</Text>
          <Text className="text-gray-500">Olá, esse é seu perfil</Text>
        </Box>
      </Box>
      <Box className="mb-4 flex-row items-center">
        <User className="text-success-800 mr-3" size={22} />
        <Text className="text-base">Conta</Text>
      </Box>
      <Box className="mb-4 flex-row items-center">
        <Lock className="text-success-800 mr-3" size={22} />
        <Text className="text-base">Privacidade</Text>
      </Box>
      <Box className="mb-4 flex-row items-center">
        <Bell className="text-success-800 mr-3" size={22} />
        <Text className="text-base">Notificações</Text>
      </Box>
      <Box className="mb-4 flex-row items-center">
        <Settings className="text-success-800 mr-3" size={22} />
        <Text className="text-base">Configurações Gerais</Text>
      </Box>
    </Box>
  );
}