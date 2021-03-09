import Head from "next/head";
import Navbar from "../components/Navbar";
import TwoColumn from "../components/TwoColumn";
import ThreeColumn from "../components/ThreeColumn";
import styles from "../styles/Home.module.css";
import { IoFastFoodSharp } from "react-icons/io5";

export default function Home() {
  const LandingBoldText = "Comida Libanesa a Domicilio";
  const LandingNormalText =
    "Bienvenido a Nuestro Restaurante Libanés en Valencia, Donde por fin puedes comer bien, Pagar Menos, y Cuidar Tu Salud.";

  const LandingButtonLabel = "Pedido Online";

  const ThreeColumnSrcs = [
    "undraw_conference_call_b0w6.svg",
    "undraw_Chatting_re_j55r.svg",
    "undraw_contact_us_15o2.svg",
  ];
  const ThreeColumnBolds = ["Sobre Nesma", "Nuestra App", "Contactanos"];
  const ThreeColumnNormals = [
    "En April del 2016 mientras se acercaba el verano, la familia Nesma decidió abrir las puertas del restaurante Nesma.",
    "Pedir comida libanesa a tu domicilio es más fácil que nunca!",
    "Restaurantenesma00@gmail.com 963 06 72 65",
  ];
  const ThreeColumnButtons = ["Click", "Click", "Click"];

  return (
    <>
      <Head>
        <title>Nesma</title>
      </Head>

      <div>
        <Navbar />

        <h1 className={styles.logo}>
          {" "}
          <IoFastFoodSharp /> Nesma
        </h1>

        <TwoColumn
          BoldText={LandingBoldText}
          NormalText={LandingNormalText}
          ButtonLabel={LandingButtonLabel}
          src="undraw_healthy_options_sdo3.svg"
        />

        <ThreeColumn
          srcs={ThreeColumnSrcs}
          BoldTexts={ThreeColumnBolds}
          NormalTexts={ThreeColumnNormals}
          ButtonLabels={ThreeColumnButtons}
        />
      </div>
    </>
  );
}
