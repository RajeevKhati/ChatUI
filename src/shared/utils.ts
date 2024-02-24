import { IConversation } from "./models/chat-model";

export const chatsDB: IConversation = {
  Tushar: [
    {
      message: "Hi bhai",
      date: new Date("2024-2-23"),
      sentByMe: true,
    },
    {
      message: "Hello",
      date: new Date("2024-2-22"),
      sentByMe: false,
    },
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam odit corrupti in sint quos? Veritatis dicta, aliquid velit molestias debitis minima ipsam minus ad culpa quisquam sequi modi ipsa!",
      date: new Date("2024-2-21"),
      sentByMe: true,
    },
    {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam odit corrupti in sint quos? Veritatis dicta, aliquid velit molestias debitis minima ipsam minus ad culpa quisquam sequi modi ipsa!",
      date: new Date("2024-2-20"),
      sentByMe: false,
    },
  ],
  Adarsh: [],
  Sanket: [],
  Keshav: [],
  Deepanshu: [],
};

export const contacts = ["Tushar", "Adarsh", "Sanket", "Keshav", "Deepanshu"];

export const API_KEY = "ckEVkhkqJLwUS+pLDrsY7g==au7UpAI56bSrSmfQ";
