// /types/index.ts
// Aqui definimos as interfaces (molde dos objetos) que serão usadas em todo o app.

// Exportamos a interface Chat para que outros arquivos possam importá-la com `import { Chat } from '../types'`.
export interface Chat {
  id: string;      // id: identificador único do chat (usado como key em listas, por exemplo).
  name: string;    // name: nome do contato ou do grupo mostrado na lista.
  message: string; // message: última mensagem exibida na pré-visualização do chat.
  time: string;    // time: hora/descrição do momento da última mensagem (ex: '10:30' ou 'Ontem').
  avatar: string;  // avatar: URL para a imagem do perfil.
}

// Exportamos a interface Status (usada na tela de Status)
export interface Status {
  id: string;      // id único do status.
  name: string;    // nome do usuário que postou o status.
  time: string;    // tempo do status (ex: 'Hoje 08:00').
  avatar: string;  // avatar: URL da imagem do usuário.
}

// Interface para chamadas (Calls)  
export interface Call { 
  id: string;                               // id único da chamada
  name: string;                             // nome do contato
  time: string;                             // quando a chamada ocorreu (texto livre como 'Hoje 09:00')
  type: 'incoming' | 'outgoing' | 'missed'; // tipo da chamada — uso de union type para segurança
  status: 'incoming' | 'outgoing' | 'missed'; // status da chamada (pode ser igual a type para simplicidade)
  avatar: string;                           // URL do avatar do contato
}