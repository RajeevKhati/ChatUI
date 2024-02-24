import { IChat } from "../shared/models/chat-model";
import { ActionType, AddChat, ChatActions, SelectContact } from "./actions";
import { IChatState } from "./chat-state";

export const chatReducer = (
  state: IChatState,
  action: ChatActions
): IChatState => {
  switch (action.type) {
    case ActionType.SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    case ActionType.ADD_CHAT:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [state.selectedContact]: [
            ...state.conversations[state.selectedContact],
            action.payload,
          ],
        },
      };
  }
};

export const selectContact = (contact: string): SelectContact => {
  return {
    type: ActionType.SELECT_CONTACT,
    payload: contact,
  };
};

export const addChat = (chat: IChat): AddChat => {
  return {
    type: ActionType.ADD_CHAT,
    payload: chat,
  };
};
