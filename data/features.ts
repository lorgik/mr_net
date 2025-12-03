interface Feature {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

export const features: Feature[] = [
  {
    id: 1,
    src: '/wifi.svg',
    alt: 'wifi',
    width: 82,
    height: 60,
    title: 'надежный и быстрый интернет, который не падает',
  },
  {
    id: 2,
    src: '/mr.svg',
    alt: 'mr',
    width: 106,
    height: 60,
    title: 'КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ',
  },
  {
    id: 3,
    src: '/arrows.svg',
    alt: 'arrows',
    width: 64,
    height: 60,
    title: 'Единый инструмент для масштабирования по всей стране',
  },
] as const;
