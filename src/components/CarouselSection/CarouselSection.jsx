import {SectionContainer, Title} from "./styles.js";
import {VerticalEventCard} from "../EventCard/VerticalEventCard/VerticalEventCard.jsx";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import {useQuery} from "@tanstack/react-query";


export function CarouselSection({title, apiService}) {

    const {data: eventos} = useQuery({
        queryKey: ["eventos", title],
        queryFn: () => apiService()
    })

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
                {eventos && eventos.map((evento, index) =>
                    <SwiperSlide key={index}>
                        <VerticalEventCard
                            id={evento.id}
                            nome={evento.nome}
                            imagemDestaque={evento.imagemDestaque}
                            data={evento.data}
                            valorAtual={evento.valorAtual}
                            local={evento.local}
                            horario={evento.horario}
                        />
                    </SwiperSlide>
                )}

            </Swiper>

        </SectionContainer>
    )
}