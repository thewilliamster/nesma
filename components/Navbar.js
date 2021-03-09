import Button from "./Button";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Button>Inicio</Button>

      <Button>Menu</Button>

      <Button>Sobre Nesma</Button>

      <Button>Pedir Online</Button>

      <Button>Contactanos</Button>
    </div>
  );
};

export default Navbar;
