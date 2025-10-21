import { BannerSection } from "./components/BannerSection/BannerSection";
import { BannerTwoSection } from "./components/BannerTwoSection/BannerTwoSection";
import { EtapaSection } from "./components/EtapaSection/EtapaSection";
import { FooterSection } from "./components/FooterSection/FooterSection";
import { FormTwoSection } from "./components/FormTwoSection/FormTwoSection";
import { InstagramSection } from "./components/InstagramSection/InstagramSection";
import { LazerSection } from "./components/LazerSection/LazerSection";
import { PlaceSection } from "./components/PlaceSection/PlaceSection";
import { SlideSection } from "./components/SlideSection/SlideSection";
import { StandSection } from "./components/StandSection/StandSection";
import { VantagemSection } from "./components/VantagemSection/VantagemSection";
import { VideoSection } from "./components/VideoSection/VideoSection";
import { YoutubeSection } from "./components/YoutubeSection/YoutubeSection";
import "./style/index.scss";

function App() {
  return (
    <>
      <BannerSection />
      <LazerSection />
      <PlaceSection />
      <StandSection />
      <VideoSection />
      <VantagemSection />
      <EtapaSection />
      <BannerTwoSection />
      <YoutubeSection />
      <SlideSection />
      <FormTwoSection />
      <InstagramSection />
      <FooterSection />
    </>
  )
}

export default App
