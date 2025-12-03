export type Client = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const clients: Client[] = [
  {
    id: 1,
    src: '/36.6.png',
    alt: 'Аптека 36.6',
    width: 220,
    height: 60,
  },
  {
    id: 2,
    src: '/нф.png',
    alt: 'Надежда Фарм',
    width: 220,
    height: 60,
  },
  {
    id: 3,
    src: '/айркрафт.png',
    alt: 'Айркрафт',
    width: 220,
    height: 60,
  },
  {
    id: 4,
    src: '/покупочка.png',
    alt: 'Покупочка',
    width: 220,
    height: 60,
  },
  {
    id: 5,
    src: '/ортк.png',
    alt: 'ОРТК',
    width: 220,
    height: 60,
  },
  {
    id: 6,
    src: '/аленка.png',
    alt: 'Алёнка',
    width: 220,
    height: 60,
  },
  {
    id: 7,
    src: '/яр.png',
    alt: 'Красный Яр',
    width: 220,
    height: 60,
  },
] as const;
