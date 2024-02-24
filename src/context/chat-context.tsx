import { createContext, useReducer } from "react";
import { IChatState, initialState } from "./chat-state";
import { ChatActions } from "./actions";
import { chatReducer } from "./reducer";

interface IChatContext {
  state: IChatState;
  dispatch: React.Dispatch<ChatActions>;
}

export const ChatContext = createContext<IChatContext>({
  state: initialState,
  dispatch: () => null,
});

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const value = { state, dispatch };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
