import React from 'react';
import { Icon } from "@/components/ui/icon";
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Camera, MoreVertical, Search, Phone, Settings, MessageCircle } from "lucide-react-native";
import { Textarea, TextareaInput } from "@/components/ui/textarea"
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage,} from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { Button, ButtonIcon } from "@/components/ui/button";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-white">
      <Box className="bg-success-800 p-4">
        <Box className="flex-row items-center justify-between">
          <Heading className="text-white">Whatszapps</Heading>
          <Box className="flex-row items-center space-x-4">
            <Icon className="text-white" as={Camera} />
            <Icon className="text-white ml-4" as={MoreVertical} />
          </Box>
        </Box>

        <Box className="mt-4">
          <Textarea
            size="xl"
            isReadOnly={true}
            className="w-90% h-11 bg-white rounded-xl flex-row items-center justify-between">
            <Icon className="text-success-800 ml-3" as={Search} size='sm'/>
            <TextareaInput className="flex-1 pt-8" placeholder="Pesquisar"/>
          </Textarea>
        </Box>
      </Box>
          <Box className="flex-row items-center ">
            <Avatar size="lg" className="mt-3 ml-2" >
                  <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                />
                <AvatarBadge />
            </Avatar>
            <Box className="flex-column flex-1">
              <Text className="ml-4 mt-3 font-bold text-lg">Jane Doe</Text>
              <Box className="flex-row justify-between items-center w-full">
                <Text className="ml-4 mt-2 text-gray-500">Oi, tudo bem?</Text>
                <Text className="ml-10 mt-3 text-gray-300 text-sm mr-4" >12:00</Text>
              </Box>
            </Box>
          </Box>
          <Box className="h-0.5 bg-gray-400 opacity-20 my-2 rounded mt-3 mb-3 ml-20" />
          <Box className="mt-1 ml-2 flex-row items-center">
            <Avatar size="lg">
                <AvatarFallbackText>Manuel</AvatarFallbackText>
                  <AvatarImage
                  source={{
                    uri: 'https://images.pexels.com/photos/10163670/pexels-photo-10163670.jpeg',
                  }}
                />''
                  <AvatarBadge/>
            </Avatar>
              <Box className="flex-column flex-1">
                <Text className="ml-4 mt-3 font-bold text-lg">Manuel</Text>
                  <Box className="flex-row justify-between items-center w-full">
                    <Text className="ml-4 mt-2 text-gray-500">Ta de boa?</Text>
                    <Text className="ml-10 mt-3 text-gray-300 text-sm mr-4" >16:58</Text>
                  </Box>
              </Box>
          </Box>
        <Box className="h-0.5 bg-gray-400 opacity-20 my-2 rounded mt-3 mb-3 ml-20" />
        
  <Box className="absolute bottom-0 left-0 right-0 bg-white flex-row justify-around items-center h-16 border-t border-gray-200">
        <Button
          className="bg-white rounded-full"
          style={{ transition: 'background-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e6f9ec'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
        >
          <ButtonIcon as={MessageCircle} className="text-success-800" />
          <Text className="text-success-800 text-xs mt-1 ml-2"></Text>
        </Button>
        <Button
          className="bg-white rounded-full"
          style={{ transition: 'background-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e6f9ec'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
          onClick={() => router.push("/calls")}
        >
          <ButtonIcon as={Phone} className="text-success-800" />
          <Text className="text-success-800 text-xs mt-1 ml-2"></Text>
        </Button>
        <Button
          className="bg-white rounded-full"
          style={{ transition: 'background-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e6f9ec'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
        >
          <ButtonIcon as={Camera} className="text-success-800" />
          <Text className="text-success-800 text-xs mt-1 ml-2"></Text>
        </Button>
        <Button
          className="bg-white rounded-full"
          style={{ transition: 'background-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e6f9ec'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
          onClick={() => router.push("/settings")}
        >
          <ButtonIcon as={Settings} className="text-success-800" />
          <Text className="text-success-800 text-xs mt-1 ml-2"></Text>
        </Button>
      </Box>
    </Box>
  );
}