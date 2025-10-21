import Etapa02 from "../../assets/etapa-2.png";
import Whatsapp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";

export const EtapaSection = () => {
    return (
        <section className={styled.etapaSection}>
            <div className={styled.container}>
                <div className={styled.textContainer}>
                    <h2 className={styled.title}>O sucesso continua!</h2>
                    <p className={styled.text}>
                        Depois da 1ª Etapa completamente vendida, o <strong>Ecoville Pinheiro</strong> lança sua <strong>2ª Etapa</strong>, com novas áreas de lazer, infraestrutura completa e o mesmo padrão de qualidade que conquistou centenas de famílias.
                    </p>
                    <p className={styled.textStyled}>
                        A oportunidade de viver no melhor bairro planejado da cidade está de volta!
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5598985243214&text=Gostaria+de+saber+tudo+sobre+a+nova+Etapa+do+Ecoville+Pinheiro%EF%BF%BD%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0"
                        target="_blank"
                        className={styled.btnWhatsapp}
                    >
                        <div className={styled.btnContainer}>
                            <img src={Whatsapp} alt="logo do whatsapp" />
                            <p>
                                QUERO MAIS INFORMAÇÕES SOBRE O <span>ECOVILLE PINHEIRO</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styled.imgContainer}>
                    <img src={Etapa02} alt="planta do ecoville pinheiro" />
                </div>
            </div>
        </section>
    )
}