import Button from "../Button";
import { Section } from "./style";

const Landing = ({}): JSX.Element => {
  return (
    <Section>
      <div className="box description">
        <span className="main description">
          Velocidade e experiência em um lugar feito para você Typography
        </span>
        <span className="sub description">
          Um ambiente feito para você explorar o seu melhor
        </span>
        <div className="box select">
          <Button className="select">Carros</Button>
          <Button className="select">Motos</Button>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
