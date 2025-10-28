import Banner02 from "../../assets/banner-02.png";
import Banner02Sm from "../../assets/banner-02-sm.png";
import styled from "./style.module.scss";
import { useWindowSize } from "react-use";

export const BannerTwoSection = () => {

    const { width } = useWindowSize();

    return (
        <section className={styled.bannerSection}>
            {
                width <= 800 ?
                    <img src={Banner02Sm} alt="banner do ecoville pinheiro" />
                    :
                    <img src={Banner02} alt="banner do ecoville pinheiro" />
            }
        </section>
    )
}