import { useContext } from "react";
import ContactCard from "../contact-card/contact-card";
import styles from "./contact-list.module.css";
import { ChatContext } from "../../context/chat-context";
import { selectContact } from "../../context/reducer";
import { contacts } from "../../shared/utils";

function ContactList() {
  const { dispatch } = useContext(ChatContext);

  const handleClick = (name: string) => {
    dispatch(selectContact(name));
  };

  return (
    <div className={styles.container}>
      {contacts.map((name) => {
        return <ContactCard key={name} name={name} onClick={handleClick} />;
      })}
    </div>
  );
}

export default ContactList;
