import { IConversation } from "../shared/models/chat-model";
import { chatsDB } from "../shared/utils";

export interface IChatState {
  selectedContact: string;
  conversations: IConversation;
}

export const initialState: IChatState = {
  selectedContact: "Tushar",
  conversations: chatsDB,
};
