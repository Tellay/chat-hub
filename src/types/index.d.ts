export interface UserProps {
  username: string
  status: 'online' | 'dnd' | 'idle' | 'offline'
}

export interface MessageProps {
  author: string
  sentAt: string
  messages: string[]
}
