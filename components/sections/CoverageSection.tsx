import Container from '@/components/Container';
import { cities, City } from '@/data/coverage';
import Title from '@/ui/Title';
import Image from 'next/image';
import Link from 'next/link';

const CityPoint = ({ city, index }: { city: City; index: number }) => (
  <div className="bg-white h-[12px] aspect-square max-lg:h-[20px] flex items-center justify-center max-lg:bg-[var(--accent-2)]">
    <span className="hidden max-lg:block text-black">{index + 1}</span>
  </div>
);

const CityInfo = ({ city }: { city: City }) => (
  <div className="text-[16px] text-black flex flex-col items-start ml-[12px] max-lg:hidden">
    <span className="font-medium bg-[var(--accent-2)] px-[4px]">
      {city.name}
    </span>
    <a href={`tel:${city.phone}`} className="bg-[var(--accent-2)] px-[4px]">
      {city.phoneDisplay}
    </a>
  </div>
);

const MobileCityCard = ({ city, index }: { city: City; index: number }) => (
  <div className="text-[16px] text-white flex items-start gap-[10px] ml-[12px] font-medium">
    <div className="bg-white h-[12px] aspect-square max-lg:h-[20px] flex items-center justify-center max-lg:bg-[var(--accent-2)]">
      <span className="hidden max-lg:block text-black">{index + 1}</span>
    </div>
    <div className="flex flex-col gap-[5px]">
      <span>{city.name}</span>
      <a href={`tel:${city.phone}`}>{city.phoneDisplay}</a>
    </div>
  </div>
);

const SignItem = ({
  iconColor = 'white',
  iconRotate = false,
  text,
}: {
  iconColor?: 'white' | 'accent-1';
  iconRotate?: boolean;
  text: string;
}) => (
  <div className="flex items-center gap-[12px]">
    <div
      className={`${
        iconColor === 'white' ? 'bg-white' : 'bg-[var(--accent-1)]'
      } ${iconRotate ? 'rotate-45' : ''} w-[10px] h-[10px]`}
    />
    <span>{text}</span>
  </div>
);

export default function CoverageSection() {
  return (
    <section id="net">
      <Container className="pt-[75px] w-full">
        <Title>Подключаем к стабильному интернету по всей России</Title>

        <div className="relative flex items-center justify-center mt-[34px] pt-[32px] px-[40px] pb-[52px] border border-[var(--accent-1)] rounded-[8px] shadow-[0px_0px_7px_4px_rgba(255,76,0,0.6)] w-full max-lg:px-0 max-lg:pt-0 max-lg:pb-[30px]">
          {/* Карта */}
          <div className="inline-block w-[100%] h-auto">
            <Image
              src="/rus-map.png"
              alt=""
              width={1287}
              height={707}
              className="w-full object-cover"
            />
          </div>

          {/* Точки клиентов */}
          <div className="absolute bottom-[0.25%] right-[0.4%] left-[-1.3%] w-[101.7%] h-auto">
            <Image
              src="/clients-dots.png"
              alt=" "
              width={1391}
              height={628}
              className="object-cover w-full"
            />
          </div>

          {/* Метка для мобильных */}
          <div className="absolute left-[20px] top-[20px] max-lg:flex hidden">
            <SignItem iconColor="accent-1" iconRotate text="Наши клиенты" />
          </div>

          {/* Маркеры городов */}
          <div>
            {cities.map((city, index) => (
              <div key={city.name} className="absolute" style={city.position}>
                {city.dotAtStart ? (
                  <>
                    <CityPoint city={city} index={index} />
                    <CityInfo city={city} />
                  </>
                ) : (
                  <>
                    <CityInfo city={city} />
                    <CityPoint city={city} index={index} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Список городов для мобильных */}
        <div className="mt-[34px] flex justify-center gap-[48px] text-[18px] max-lg:justify-start">
          <div className="max-lg:hidden">
            <SignItem iconColor="accent-1" iconRotate text="Наши клиенты" />
          </div>

          <div className="flex items-center gap-[12px] max-lg:flex-col max-lg:mx-auto">
            <div className="max-lg:hidden">
              <SignItem text="Отделы продаж" />
            </div>

            <div className="hidden max-lg:grid grid-cols-2 gap-[12px]">
              {cities.map((city, index) => (
                <MobileCityCard key={index} city={city} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
