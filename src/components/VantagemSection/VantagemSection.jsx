import Vantagens from "../../assets/vantagens.png";
import styled from "./style.module.scss";

export const VantagemSection = () => {
    return (
        <section className={styled.vantagemSection}>
            <img src={Vantagens} alt="banner de vantagens do Ecoville Pinheiro" />
        </section>
    )
}