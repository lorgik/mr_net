import Button from '@/ui/Button';
import { bannerData } from '@/data/banner';
import { BulletList } from '@/components/ui/BulletList';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { BackgroundImage } from '@/components/ui/BackgroundImage';

export default function Banner() {
  const { title, price, cta, benefits } = bannerData;

  return (
    <div className="flex gap-[12px] max-lg:flex-col">
      <div className="flex flex-col gap-[20px] flex-[793] rounded-[8px] bg-gradient-1 border border-[var(--accent-1)] p-[20px]">
        <h1 className="text-[50px] max-sm:text-[35px]">{title}</h1>

        <PriceDisplay amount={price.amount} />

        <Button href={cta.href} className="my-[20px]">
          {cta.text}
        </Button>

        <BulletList items={benefits} />

        <p className="text-[12px] text-balance text-[var(--neutral)]">
          {price.note}
        </p>
      </div>

      <BackgroundImage />
    </div>
  );
}
