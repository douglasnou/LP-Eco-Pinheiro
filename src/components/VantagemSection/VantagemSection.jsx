import Vantagens from "../../assets/vantagens.png";
import VantagenSm from "../../assets/vantagens-sm.png";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export const VantagemSection = () => {

    const { width } = useWindowSize();

    return (
        <section className={styled.vantagemSection}>
            {
                width <= 800 ?
                    <img src={VantagenSm} alt="banner de vantagens do Ecoville Pinheiro" />
                    :
                    <img src={Vantagens} alt="banner de vantagens do Ecoville Pinheiro" />
            }
        </section>
    )
}