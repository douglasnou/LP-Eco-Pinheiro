import { FormSection } from "../FormSection/FormSection";
import styled from "./style.module.scss";

export const BannerSection = () =>{
    return(
        <section className={styled.bannerSection}>
            <div className={styled.nothing}></div>
            <div className={styled.form}>
                <FormSection />
            </div>
        </section>
    )
}