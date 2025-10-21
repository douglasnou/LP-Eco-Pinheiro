import { YouTubeEmbed } from "react-social-media-embed";
import Whatsapp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export const YoutubeSection = () => {
    const { width } = useWindowSize();
    return (
        <section className={styled.youtubeSection}>
            <div className={styled.container}>
                <div className={styled.videoContainer}>
                    {
                        width > 800 ?
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=gWLlnOEJ7SY" className={styled.video} width={700} height={500} />
                            :
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=gWLlnOEJ7SY" className={styled.video} width={350} />
                    }
                </div>

                <div className={styled.textContainer}>
                    <p>
                        As obras do Ecoville Pinheiro estão a todo vapor!
                    </p>
                    <p>
                        O 1º bairro planejado de Pinheiro segue crescendo e se tornando o lugar ideal para viver com conforto, lazer e segurança.
                    </p>
                    <p>
                        <strong>
                            E a 2ª Etapa está chegando com ainda mais novidades!
                        </strong>
                    </p>
                    <p>
                        Ecoville Pinheiro — o futuro está sendo construído agora.
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
            </div>
        </section>
    )
}