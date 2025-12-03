import Container from '@/components/Container';
import Title from '@/ui/Title';
import { clients } from '@/data/clients';
import { MarqueeTrack } from '@/components/MarqueeTrack';

export default function ClientsSection() {
  return (
    <section aria-labelledby="clients-title">
      <Container className="pt-[75px]">
        <Title>500+ клиентов уже с нами</Title>
      </Container>

      <div
        className="relative mt-[50px] overflow-hidden"
        role="region"
        aria-label="Бегущая строка логотипов клиентов"
      >
        <MarqueeTrack items={clients} />
      </div>
    </section>
  );
}
