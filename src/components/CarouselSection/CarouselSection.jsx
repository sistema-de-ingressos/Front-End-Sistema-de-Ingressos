import {SectionContainer, Title} from "./styles.js";
import {VerticalEventCard} from "../EventCard/VerticalEventCard/VerticalEventCard.jsx";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';


export function CarouselSection({title, apiService}) {

    // Implementar requisição para api para receber eventos
    const [eventos, setEventos] = useState([])

    return (
        <SectionContainer>
            <Title>{title}</Title>
            <Swiper
                loop={true}
                navigation={true}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
            >
                {eventos.map((evento, index) =>
                    <SwiperSlide key={index}>
                        <VerticalEventCard data={evento.data} nome={evento.nome} id={evento.id} preco={evento.preco} local={evento.local} horario={evento.horario}/>
                    </SwiperSlide>
                )}

                {/* Exemplo */}
                <SwiperSlide>
                    <VerticalEventCard data={"12/04"} nome={"Evento 1"} id={1} preco={"12,00"} local={"Local do Evento"} horario={"12:00"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <VerticalEventCard data={"12/04"} nome={"Evento 2"} id={2} preco={"12,00"} local={"Local do Evento"} horario={"12:00"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <VerticalEventCard data={"12/04"} nome={"Evento 3"} id={3} preco={"12,00"} local={"Local do Evento"} horario={"12:00"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <VerticalEventCard data={"12/04"} nome={"Evento 4"} id={4} preco={"12,00"} local={"Local do Evento"} horario={"12:00"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <VerticalEventCard data={"12/04"} nome={"Evento 5"} id={5} preco={"12,00"} local={"Local do Evento"} horario={"12:00"}/>
                </SwiperSlide>

            </Swiper>

        </SectionContainer>
    )
}