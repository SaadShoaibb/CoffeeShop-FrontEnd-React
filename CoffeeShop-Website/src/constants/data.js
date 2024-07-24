import images from './images';

const hots = [
  {
    title: 'Hot Chocolate',
    price: '$24',
    tags: 'US | 300 ml',
  },
  {
    title: 'Americano',
    price: '$14',
    tags: 'US | 300 ml',
  },
  {
    title: 'Cappuccino',
    price: '$16',
    tags: 'US | 300 ml',
  },
  {
    title: 'Espresso',
    price: '$12',
    tags: 'ITA | 300 ml',
  },
  {
    title: 'Latte',
    price: '$15',
    tags: 'US | 300 ml',
  },
];

const colds = [
  {
    title: 'Frappe',
    price: '$20',
    tags: 'Chocolate | Caramel | Vanilla | 350 ml',
  },
  {
    title: "Ice Tea",
    price: '$16',
    tags: 'Lemon | Apple | Pineapple | 350 ml',
  },
  {
    title: 'Iced Mocha',
    price: '$23',
    tags: 'Caramel | Chocolate | 350 ml',
  },
  {
    title: 'Iced Latte',
    price: '$22',
    tags: 'Chocolate | Caramel | 350 ml',
  },
  {
    title: 'Frappucino',
    price: '$26',
    tags: 'Chocolate | Vanilla | Caramel | 350 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Top-Notch Hygiene',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: '5 Star Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Brewery',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { hots, colds, awards };
