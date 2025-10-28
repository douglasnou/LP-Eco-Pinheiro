import { useWindowSize } from "react-use";
import { FormSection } from "../FormSection/FormSection";
import Banner from "../../assets/banner-sm.png";
import styled from "./style.module.scss";

export const BannerSection = () =>{

    const { width } = useWindowSize();

    return(
        <section className={styled.bannerSection}>
            <div className={styled.nothing}></div>
            {
                width <= 800 ?
                    <img src={Banner} style={{width:"100%"}} />
                :
                    ""
            }
            <div className={styled.form}>
                <FormSection />
            </div>
        </section>
    )
}