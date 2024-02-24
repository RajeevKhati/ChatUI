import styles from "./App.module.css";
import ChatSection from "./components/chat-section/chat-section";
import ContactList from "./components/contact-list/contact-list";
import { ChatContextProvider } from "./context/chat-context";

function App() {
  return (
    <ChatContextProvider>
      <div className={styles.mainContainer}>
        <ContactList />
        <ChatSection />
      </div>
    </ChatContextProvider>
  );
}

export default App;
