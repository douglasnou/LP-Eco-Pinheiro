import { InstagramEmbed } from "react-social-media-embed";
import styled from "./style.module.scss";

export const VideoSection = () => {
    return (
        <section className={styled.videoSection}>
            <div className={styled.container}>
                <InstagramEmbed url="https://www.instagram.com/reel/C02Dcb2P0tg/" captioned className={styled.video} />
            </div>
        </section>
    )
}