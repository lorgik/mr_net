'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from '@/icons/ArrowLeft';
import { ArrowRight } from '@/icons/ArrowRight';

const reviews = [
  {
    id: 1,
    client: 'Шоколадница',
    name: 'Чистяков Марк',
    position: 'Начальник управления',
    department: 'Управление эксплуатации и развития ИТ-сервисов',
    text: 'Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают...',
  },
  {
    id: 2,
    client: 'Ермолино',
    name: 'Тараканов Михаил',
    position: 'Руководитель',
    department: 'СИТ АО «Подмосковья»',
    text: 'У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!',
  },
  {
    id: 3,
    client: 'Аптеки 36,6',
    name: 'Константин Старцев',
    position: 'Руководитель',
    department: '',
    text: 'Когда бизнес расширяется, особое внимание уделяется партнерам и готовность помочь. Когда в Великом Новгороде случилась муниципальная авария, за несколько часов доставили мультироутер, настроили соединение в 8 из 12 новых точек, настроили удалённое управление точек из одного кабинета, и реакция в telegram — важные преимущества.',
  },
  {
    id: 4,
    client: 'ТЕСТ',
    name: 'Тараканов Михаил',
    position: 'Руководитель',
    department: 'СИТ АО «Подмосковья»',
    text: 'У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняла ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!',
  },
];

export default function ReviewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(563); // ширина по умолчанию
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (slidesRef.current && slidesRef.current.children.length > 0) {
        const firstSlide = slidesRef.current.children[0] as HTMLElement;
        const newWidth = firstSlide.offsetWidth;
        setSlideWidth(newWidth);
      }
    };

    // Обновляем ширину при монтировании
    updateSlideWidth();

    // Обновляем при изменении размера окна
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative mt-[34px]">
      <div ref={sliderRef} className="">
        <div
          ref={slidesRef}
          className="flex gap-[12px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (slideWidth + 12)}px)`,
          }}
        >
          {reviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full max-w-[90vw] sm:max-w-[90vw] md:max-w-[600px] lg:max-w-[563px] h-[360px] bg-gradient-2 rounded-[8px] p-[20px] text-white border border-[var(--accent-2)] flex flex-col gap-[24px] justify-between overflow-hidden"
            >
              <div className="flex justify-between gap-[24px] items-start mb-[12px] text-[14px]">
                <div className="text-[var(--accent-2)]">
                  <h3 className="font-medium">{testimonial.client}</h3>
                  <p>{testimonial.name}</p>
                </div>
                <div>
                  <p>{testimonial.position}</p>
                  <p>{testimonial.department}</p>
                </div>
              </div>
              <p className="text-[16px] overflow-hidden overflow-ellipsis line-clamp-6">
                {testimonial.text}
              </p>
              <div className="mt-auto flex justify-end">
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-[34px]">
        <button
          onClick={prevSlide}
          className="transition flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px] hover:shadow-[0px_0px_5px_3px_rgba(0,228,240,0.6)]"
        >
          <ArrowLeft />
        </button>

        <div className="flex gap-[16px]">
          {reviews.map(
            (_, index) =>
              index !== reviews.length && (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[11px] h-[11px] rounded-full border border-[var(--accent-2)]  ${
                    index === activeIndex ? 'bg-[var(--accent-2)]' : 'bg-black'
                  }`}
                />
              )
          )}
        </div>

        <button
          onClick={nextSlide}
          className="transition flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px] hover:shadow-[0px_0px_5px_3px_rgba(0,228,240,0.6)]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
