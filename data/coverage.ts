export type City = {
  id: number;
  name: string;
  phone: string;
  phoneDisplay: string;
  position: {
    left: string;
    bottom: string;
  };
  dotAtStart: boolean;
};

export const cities: City[] = [
  {
    id: 1,
    name: 'Санкт-Петербург',
    phone: '89313944611',
    phoneDisplay: '8 931 394 46 11',
    position: { left: '15.5%', bottom: '63.5%' },
    dotAtStart: false,
  },
  {
    id: 2,
    name: 'Краснодар',
    phone: '89933070177',
    phoneDisplay: '8 993 307 01 77',
    position: { left: '4%', bottom: '35%' },
    dotAtStart: false,
  },
  {
    id: 3,
    name: 'Екатеринбург',
    phone: '89026352239',
    phoneDisplay: '8 902 635 22 39',
    position: { left: '27.5%', bottom: '35.5%' },
    dotAtStart: false,
  },
  {
    id: 4,
    name: 'Казань',
    phone: '89047699654',
    phoneDisplay: '8 904 769 96 54',
    position: { left: '20%', bottom: '42.5%' },
    dotAtStart: false,
  },
  {
    id: 5,
    name: 'Москва',
    phone: '88006003538',
    phoneDisplay: '8 800 600 35 38',
    position: { left: '14%', bottom: '53%' },
    dotAtStart: false,
  },
  {
    id: 6,
    name: 'Челябинск',
    phone: '89226368606',
    phoneDisplay: '8 922 636 86 06',
    position: { left: '26.5%', bottom: '27.5%' },
    dotAtStart: true,
  },
  {
    id: 7,
    name: 'Новосибирск',
    phone: '89026352239',
    phoneDisplay: '8 902 635 22 39',
    position: { left: '41.5%', bottom: '21%' },
    dotAtStart: false,
  },
  {
    id: 8,
    name: 'Владивосток',
    phone: '89026352239',
    phoneDisplay: '8 902 635 22 39',
    position: { left: '85%', bottom: '10%' },
    dotAtStart: false,
  },
];
