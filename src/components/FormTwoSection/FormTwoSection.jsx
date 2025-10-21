import Logo from "../../assets/eco-pinheiro-img.png";
import { FormSection } from "../FormSection/FormSection";
import styled from "./style.module.scss";

export const FormTwoSection = () => {
    return (
        <section className={styled.formSection}>
            <div className={styled.container}>
                <img src={Logo} alt="Logo Ecoville Pinheiro" />
                <div className={styled.formContainer}>
                    <FormSection />
                </div>
            </div>
        </section>
    )
}