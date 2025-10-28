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
            link:"https://www.instagram.com/eco.urbanismo/",
        },
        {
            img: Whatsapp,
            link:"https://api.whatsapp.com/send/?phone=5598985243214&text=Gostaria+de+saber+tudo+sobre+a+nova+Etapa+do+Ecoville+Pinheiro%EF%BF%BD%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0",
        },
        {
            img: Facebook,
            link:"https://www.facebook.com/profile.php?id=61573350839593",
        },
        {
            img: Youtube,
            link:"https://www.youtube.com/@ecourbanismooficial",
        },
        {
            img: Linkedin,
            link:"https://www.linkedin.com/company/eco-urbanismo/?viewAsMember=true",
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