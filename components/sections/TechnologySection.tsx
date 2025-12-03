import Container from '@/components/Container';
import Button from '@/ui/Button';
import Title from '@/ui/Title';

export default function TechnologySection() {
  return (
    <section>
      <Container className="pt-[75px]">
        <Title>технология</Title>
        <div className="flex gap-[12px] mt-[34px] max-lg:flex-col">
          <div className="flex-[793] bg-[url(/tech-bg.jpg)] bg-no-repeat bg-center bg-cover w-full rounded-[8px] max-lg:min-h-[250px]"></div>

          <div className="flex flex-col gap-[20px] flex-[563] bg-gradient-1 rounded-[8px] bg-custom-gradient border border-[var(--accent-1)] p-[20px]">
            <p className="text-[24px] text-balance">
              Прокачайте свой интернет с высокоскоростными технологиями{' '}
              <span className="font-medium">mrnet</span>. Наш мультироутер
              суммирует несколько каналов связи в один (технология бондинг),
              значительно повышая устойчивость и скорость соединения!
            </p>
            <Button href="#" className="mt-[20px]">
              узнать больше
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
