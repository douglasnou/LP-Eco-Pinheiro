import Instagram from "../../assets/instagram.png";
import Whatsapp from "../../assets/whatsapp-2.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";
import Logo from "../../assets/logo-eco.png";
import styled from "./style.module.scss";

export const FooterSection = () => {

    const socialMedia = [
        {
            img: Instagram,
            link:"",
        },
        {
            img: Whatsapp,
            link:"",
        },
        {
            img: Facebook,
            link:"",
        },
        {
            img: Youtube,
            link:"",
        },
        {
            img: Linkedin,
            link:"",
        },
    ];

    return (
        <section className={styled.footerSection}>
            <div className={styled.container}>
                <img src={Logo} alt="Logo da Ecourbanismo" className={styled.logo} />
                <span className={styled.subtitle}>Siga nossas redes sociais</span>
                <ul className={styled.socialContainer}>
                    {
                        socialMedia.map((item)=>(
                            <li className={styled.socialCard}>
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt="rede social" />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}