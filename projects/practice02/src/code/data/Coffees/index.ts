import { CoffeeType } from './types'

export const Coffees: CoffeeType[] = [
  {
    id: 1,
    fileUrl: 'coffees/expresso-tradicional.svg',
    categories: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    fileUrl: 'coffees/expresso-americano.svg',
    categories: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 4,
  },
  {
    id: 3,
    fileUrl: 'coffees/expresso-cremoso.svg',
    categories: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 7.5,
  },
  {
    id: 4,
    fileUrl: 'coffees/expresso-gelado.svg',
    categories: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7,
  },
]
