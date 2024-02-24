import { useContext } from "react";
import { API_KEY } from "./utils";
import { ChatContext } from "../context/chat-context";
import { addChat } from "../context/reducer";

export const useReply = () => {
  const { dispatch } = useContext(ChatContext);

  const fetchReply = async () => {
    const url = "https://api.api-ninjas.com/v1/jokes?limit=1";
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch(
        addChat({
          message: result[0].joke,
          sentByMe: false,
          date: new Date(),
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchReply };
};
