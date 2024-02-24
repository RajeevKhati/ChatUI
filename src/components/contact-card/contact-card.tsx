import styles from "./contact-card.module.css";

interface ContactCardProps {
  name: string;
  onClick: (name: string) => void;
}

function ContactCard({ name, onClick }: ContactCardProps) {
  return (
    <button onClick={() => onClick(name)} className={styles.container}>
      {name}
    </button>
  );
}

export default ContactCard;
