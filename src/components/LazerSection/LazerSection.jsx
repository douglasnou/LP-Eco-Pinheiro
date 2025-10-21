import Check from "../../assets/check.png";
import styled from "./style.module.scss";

export const LazerSection = () => {

    const lazeres = [
        "Infraestrutura 100% planejada",
        "Bosque do Juçaral",
        "Praça Animaville",
        "Quadra Poliesportiva",
        "Espaço Pet Baby Park",
        "Academia ao Ar Livre e Academia do Idoso"
    ];

    return (
        <section className={styled.lazerSection}>
            <ul className={styled.container}>
                {
                    lazeres.map((item)=>(
                        <li className={styled.lazerCard}>
                            <img src={Check} alt="check" />
                            <p>{item}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}