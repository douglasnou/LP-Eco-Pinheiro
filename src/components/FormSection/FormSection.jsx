import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import styled from "./style.module.scss";

export const FormSection = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const formatPhone = (value) => {
        const cleaned = value.replace(/\D/g, '');

        let formatted = '';
        if (cleaned.length > 0) {
            formatted = `(${cleaned.substring(0, 2)}`;
        }
        if (cleaned.length > 2) {
            formatted += `) ${cleaned.substring(2, 7)}`;
        }
        if (cleaned.length > 7) {
            formatted += `-${cleaned.substring(7, 11)}`;
        }

        return formatted;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setPhone(formatted);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);
        console.log('Dados do formulário:', data);

        try {
            const payload = {
                ...data,
                phone: data.phone.replace(/\D/g, '')
            };

            const response = await axios.post(import.meta.env.VITE_BACKEND_LINK, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Resposta do servidor:', response.data);

            if (response.status === 200 || response.status === 201) {
                setSubmitSuccess(true);
                reset();
                setPhone('');
            }
        } catch (error) {
            console.error('Erro completo:', error);
            let errorMessage = 'Erro ao enviar formulário';

            if (error.response) {
                if (error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else {
                    errorMessage = `Erro ${error.response.status}: ${error.response.statusText}`;
                }
            } else if (error.request) {
                errorMessage = 'Sem resposta do servidor - verifique sua conexão';
            }

            setSubmitError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className={styled.formSection}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>
                    Estamos prontos para te atender
                </h2>

                <div className={styled.inputContainer}>
                    <label htmlFor="nome">Seu nome</label>
                    <input
                        id="nome"
                        type="text"
                        {...register("nome", { required: true })}
                        placeholder="Nome Completo"
                    />
                </div>

                <div className={styled.inputContainer}>
                    <label htmlFor="phone">Seu contato</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        {...register("phone", { required: true })}
                        onChange={handlePhoneChange}
                        placeholder="(XX) XXXXX-XXXX"
                        maxLength={15}
                    />
                </div>

                
                <button className={styled.formBtn} type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
                {submitError && (
                    <div className={styled.errorMessage}>
                        ❌ {submitError}
                    </div>
                )}
                {submitSuccess && (
                    <div className={styled.successMessage}>
                        ✅ Formulário enviado com sucesso!
                    </div>
                )}
            </form>
        </section>
    )
}