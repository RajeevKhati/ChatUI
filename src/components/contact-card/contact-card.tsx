import { IconUser } from "../../icons/icon-user";
import styles from "./contact-card.module.css";

interface ContactCardProps {
  name: string;
  onClick: (name: string) => void;
}

function ContactCard({ name, onClick }: ContactCardProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => onClick(name)} className={styles.cardBtn}>
        <div className={styles.iconUser}>
          <IconUser />
        </div>
        <p className={styles.contactName}>{name}</p>
      </button>
    </div>
  );
}

export default ContactCard;
