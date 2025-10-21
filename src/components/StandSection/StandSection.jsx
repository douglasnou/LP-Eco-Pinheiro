import Stand from "../../assets/stand.png";
import Whatsapp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";

export const StandSection = () => {
    return (
        <section className={styled.standSection}>
            <div className={styled.container}>
                <div className={styled.textContainer}>
                    <h2>
                        Um investimento seguro que cresce com você
                    </h2>
                    <p>
                        O Ecoville Pinheiro já <strong>valorizou +10% desde a 1ª etapa</strong>. Invista agora no bairro planejado que transformou Pinheiro.
                    </p>
                    <p>
                        <strong>
                            Mais valorização, mais qualidade de vida.
                        </strong>
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
                    <img src={Stand} alt="stand de vendas" />
                </div>
            </div>
        </section>
    )
}