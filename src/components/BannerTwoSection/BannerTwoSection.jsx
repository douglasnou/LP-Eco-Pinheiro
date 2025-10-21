import Banner02 from "../../assets/banner-02.png";
import styled from "./style.module.scss";

export const BannerTwoSection = () => {
    return (
        <section className={styled.bannerSection}>
            <img src={Banner02} alt="banner do ecoville pinheiro" />
        </section>
    )
}