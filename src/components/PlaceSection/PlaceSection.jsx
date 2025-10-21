import Place01 from "../../assets/place-01.png";
import Place02 from "../../assets/place-02.png";
import Place03 from "../../assets/place-03.png";
import styled from "./style.module.scss";

export const PlaceSection = () => {

    const places = [
        {
            img: Place01,
            title: "bosque do Juçaral",
            text: "Um refúgio verde para relaxar, respirar e se conectar com a natureza."
        },
        {
            img: Place02,
            title: "quadra poliesportiva",
            text: "Diversão, movimento e energia para todos os estilos de jogo!"
        },
        {
            img: Place03,
            title: "praça do animaville",
            text: "Cada cantinho é uma nova aventura! Um espaço lúdico pensado para despertar sorrisos e criar memórias inesquecíveis."
        },
    ];

    return (
        <section className={styled.placeSection}>
            <div className={styled.container}>
                <h2>
                    Viva cercado de natureza, lazer e bem-estar todos os dias.
                </h2>
                <ul className={styled.cardContainer}>
                    {
                        places.map((card)=>(
                            <li className={styled.card}>
                                <img src={card.img} alt="Local do Ecoville Pinheiro" />
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}