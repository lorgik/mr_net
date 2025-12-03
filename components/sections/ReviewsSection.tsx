import Container from '@/components/Container';
import ReviewsSlider from '../ReviewsSlider';
import Title from '@/ui/Title';

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden">
      <Container className="pt-[75px]">
        <Title>
          95% клиентов выбирают{' '}
          <span className="font-medium lowercase">mrnet</span> после тест-драйва
        </Title>
        <ReviewsSlider />
      </Container>
    </section>
  );
}
