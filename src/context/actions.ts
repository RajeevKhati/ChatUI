import { IChat } from "../shared/models/chat-model";

export enum ActionType {
  ADD_CHAT = "ADD_CHAT",
  SELECT_CONTACT = "SELECT_CONTACT",
}

export interface AddChat {
  type: ActionType.ADD_CHAT;
  payload: IChat;
}

export interface SelectContact {
  type: ActionType.SELECT_CONTACT;
  payload: string;
}

export type ChatActions = AddChat | SelectContact;
