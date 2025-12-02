"use client"

import { useState } from "react"
import Container from "@/components/Container"
import ContactForm from "@/components/ContactForm"

const ContactSection = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleFormSuccess = () => {
        setIsFormSubmitted(true)
    }

    return (
        <section id="contact">
            <Container className="pt-[75px] grid grid-cols-[448fr_909fr] gap-[12px] max-lg:flex max-lg:flex-col">
                <div className="p-[20px] rounded-[8px] bg-gradient-3">
                    <p className="font-medium text-[32px] max-sm:text-[30px] text-black uppercase">
                        Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?
                    </p>
                </div>

                <div
                    className="flex flex-col rounded-[8px] border border-[var(--accent-2)] p-[20px]"
                    style={{
                        background: "linear-gradient(223deg, var(--accent-2), #000000 44%)",
                    }}
                >
                    {isFormSubmitted ? (
                        <>
                            <h4 className="text-[45px] max-sm:text-[35px]">
                                Спасибо за заявку! Наши менеджеры уже взяли её в работу и скоро свяжутся с вами.
                            </h4>
                        </>
                    ) : (
                        <>
                            <h4 className="text-[20px]">Услуга доступна только для юридических лиц</h4>
                            <ContactForm onSuccess={handleFormSuccess} />
                        </>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default ContactSection
