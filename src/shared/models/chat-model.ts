export interface IChat {
  message: string;
  date: Date;
  sentByMe: boolean;
}

export interface IConversation {
  [key: string]: IChat[];
}
