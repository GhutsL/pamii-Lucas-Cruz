import React from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarImage, AvatarBadge, AvatarFallbackText } from "@/components/ui/avatar";
import { Phone } from "lucide-react-native";

export default function Calls() {
  return (
    <Box className="flex-1 bg-white p-4">
      <Heading className="text-success-800 mb-4">Ligações</Heading>
      <Box className="flex-row items-center mb-4">
        <Avatar size="lg">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
          <AvatarImage source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80" }} />
          <AvatarBadge />
        </Avatar>
        <Box className="ml-4 flex-1">
          <Text className="font-bold text-lg">Jane Doe</Text>
          <Text className="text-gray-500">Hoje, 12:00</Text>
        </Box>
        <Phone className="text-success-800" size={24} />
      </Box>
      <Box className="flex-row items-center mb-4">
        <Avatar size="lg">
          <AvatarFallbackText>Manuel</AvatarFallbackText>
          <AvatarImage source={{ uri: "https://images.pexels.com/photos/10163670/pexels-photo-10163670.jpeg" }} />
          <AvatarBadge />
        </Avatar>
        <Box className="ml-4 flex-1">
          <Text className="font-bold text-lg">Manuel</Text>
          <Text className="text-gray-500">Ontem, 16:58</Text>
        </Box>
        <Phone className="text-success-800" size={24} />
      </Box>
      {/* Adicione mais itens conforme necessário */}
    </Box>
  );
}