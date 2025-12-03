import Container from '@/components/Container';
import Title from '@/ui/Title';
import Image from 'next/image';
import Link from 'next/link';

export default function CoverageSection() {
  const cities = [
    {
      name: 'Санкт-Петербург',
      phone: '89313944611',
      phoneDisplay: '8 931 394 46 11',
      position: { left: '15.5%', bottom: '63.5%' },
    },
    {
      name: 'Краснодар',
      phone: '89933070177',
      phoneDisplay: '8 993 307 01 77',
      position: { left: '4%', bottom: '35%' },
    },
    {
      name: 'Екатеринбург',
      phone: '89026352239',
      phoneDisplay: '8 902 635 22 39',
      position: { left: '27.5%', bottom: '35.5%' },
    },
    {
      name: 'Казань',
      phone: '89047699654',
      phoneDisplay: '8 904 769 96 54',
      position: { left: '20%', bottom: '42.5%' },
    },
    {
      name: 'Москва',
      phone: '88006003538',
      phoneDisplay: '8 800 600 35 38',
      position: { left: '14%', bottom: '53%' },
    },
    {
      name: 'Челябинск',
      phone: '89226368606',
      phoneDisplay: '8 922 636 86 06',
      position: { left: '26.5%', bottom: '27.5%' },
      dotAtStart: true,
    },
    {
      name: 'Новосибирск',
      phone: '89026352239',
      phoneDisplay: '8 902 635 22 39',
      position: { left: '41.5%', bottom: '21%' },
    },
    {
      name: 'Владивосток',
      phone: '89026352239',
      phoneDisplay: '8 902 635 22 39',
      position: { left: '85%', bottom: '10%' },
    },
  ];

  return (
    <section id="net">
      <Container className="pt-[75px] w-full">
        <Title>Подключаем к стабильному интернету по всей России</Title>

        <div className="relative flex items-center justify-center mt-[34px] pt-[32px] px-[40px] pb-[52px] border border-[var(--accent-1)] rounded-[8px] shadow-[0px_0px_7px_4px_rgba(255,76,0,0.6)] w-full max-lg:px-0 max-lg:pt-0 max-lg:pb-[30px]">
          <div className="inline-block w-[100%] h-auto">
            <Image
              src={'/rus-map.png'}
              alt="Россия"
              width={1287}
              height={707}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[0.25%] right-[0.4%] left-[-1.3%] w-[101.7%] h-auto">
            <Image
              src={'/clients-dots.png'}
              alt="точки"
              width={1391}
              height={628}
              className="object-cover w-full"
            />
          </div>

          <div className="hidden absolute flex items-center gap-[12px] max-lg:flex left-[20px] top-[20px]">
            <div className="bg-[var(--accent-1)] rotate-45 w-[10px] h-[10px]"></div>
            <span>Наши клиенты</span>
          </div>

          <div>
            {cities.map((city, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: city.position.left,
                  bottom: city.position.bottom,
                }}
              >
                {city.dotAtStart ? (
                  <>
                    <div className="bg-white h-[12px] aspect-square max-lg:h-[20px] flex items-center justify-center max-lg:bg-[var(--accent-2)]">
                      <span className="hidden max-lg:block text-black">
                        {index + 1}
                      </span>
                    </div>
                    <div className="text-[16px] text-black flex flex-col items-start ml-[12px] max-lg:hidden">
                      <span className="font-medium bg-[var(--accent-2)] px-[4px]">
                        {city.name}
                      </span>
                      <Link
                        href={`tel:${city.phone}`}
                        className="bg-[var(--accent-2)] px-[4px]"
                      >
                        {city.phoneDisplay}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[16px] text-black flex flex-col items-start ml-[12px] max-lg:hidden">
                      <span className="font-medium bg-[var(--accent-2)] px-[4px]">
                        {city.name}
                      </span>
                      <Link
                        href={`tel:${city.phone}`}
                        className="bg-[var(--accent-2)] px-[4px]"
                      >
                        {city.phoneDisplay}
                      </Link>
                    </div>
                    <div className="bg-white h-[12px] aspect-square max-lg:h-[20px] flex items-center justify-center max-lg:bg-[var(--accent-2)]">
                      <span className="hidden max-lg:block text-black">
                        {index + 1}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[34px] flex justify-center gap-[48px] text-[18px] max-lg:justify-start">
          <div className="flex items-center gap-[12px] max-lg:hidden">
            <div className="bg-[var(--accent-1)] rotate-45 w-[10px] h-[10px]"></div>
            <span>Наши клиенты</span>
          </div>
          <div className="flex items-center gap-[12px] max-lg:flex-col max-lg:mx-auto">
            <div className="bg-white w-[10px] h-[10px] max-lg:hidden"></div>
            <span>Отделы продаж</span>
            <div className="hidden max-lg:grid grid-cols-2 gap-[12px]">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="text-[16px] text-white flex items-start gap-[10px] ml-[12px] font-medium"
                >
                  <div className="bg-white h-[12px] aspect-square max-lg:h-[20px] flex items-center justify-center max-lg:bg-[var(--accent-2)]">
                    <span className="hidden max-lg:block text-black">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <span>{city.name}</span>
                    <Link href={`tel:${city.phone}`}>{city.phoneDisplay}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
