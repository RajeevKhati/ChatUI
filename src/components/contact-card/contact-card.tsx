import styles from "./contact-card.module.css";

interface ContactCardProps {
  name: string;
  onClick: (name: string) => void;
}

function ContactCard({ name, onClick }: ContactCardProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => onClick(name)} className={styles.cardBtn}>
        {name}
      </button>
    </div>
  );
}

export default ContactCard;
