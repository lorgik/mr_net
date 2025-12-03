import Container from '../Container';
import Banner from '@/components/Banner';
import FeatureGrid from '@/components/FeatureGrid';

export default function MainSection() {
  return (
    <main>
      <Container className="pt-[var(--header-height)] flex flex-col gap-[12px]">
        <Banner />
        <FeatureGrid />
      </Container>
    </main>
  );
}
