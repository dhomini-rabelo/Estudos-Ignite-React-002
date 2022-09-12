import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react'
import { Div } from './styles'

export function Index() {
  return (
    <>
      <div className="mt-32 flex justify-between flex-wrap-reverse lg:flex-nowrap gap-y-8">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="baloo text-5xl font-extrabold leading-tight text-Black-800">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <span className="text-xl leading-tight text-Black-500 mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div className="grow mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-y-5 gap-x-10">
              <div className="ad-box flex items-center justify-start">
                <div className="p-2 bg-Yellow-800 text-Gray-100 rounded-full">
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span className="ml-3 text-Black-300">
                  Compra simples e segura
                </span>
              </div>
              <div className="ad-box flex items-center justify-start">
                <div className="p-2 bg-Black-300 text-Gray-100 rounded-full">
                  <Package size={16} weight="fill" />
                </div>
                <span className="ml-3 text-Black-300">
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div className="ad-box flex items-center justify-start">
                <div className="p-2 bg-Yellow-500 text-Gray-100 rounded-full">
                  <Timer size={16} weight="fill" />
                </div>
                <span className="ml-3 text-Black-300">
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className="ad-box flex items-center justify-start">
                <div className="p-2 bg-Purple-800 text-Gray-100 rounded-full">
                  <Coffee size={16} weight="fill" />
                </div>
                <span className="ml-3 text-Black-300">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/coffee.svg"
          alt="coffee-cup"
          className="mx-auto inline-block"
        />
      </div>
      <main className="mt-28 mb-40">
        <h2 className="baloo font-extrabold leading-tight text-3xl">
          Nossos cafés
        </h2>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-10 mx-auto justify-center items-center">
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
          <Div.coffee className="bg-Gray-200 flex flex-col items-center p-5 w-64 h-80 relative justify-end">
            <img
              src="coffees/expresso-tradicional.svg"
              alt="coffee-type"
              className="coffee-image-product absolute"
            />
            <span className="type py-1 px-2 bg-Yellow-100 text-xs leading-tight font-bold text-Yellow-800 mb-4 mt-3">
              TRADICIONAL
            </span>
            <h3 className="text-Black-500 font-bold text-xl leading-tight">
              Expresso Tradicional
            </h3>
            <span className="text-Black-100 text-sm mt-1 text-center">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="buy flex items-center justify-between mt-8 w-full">
              <div className="text-Black-300 leading-tight">
                <span className="text-sm">R$</span>{' '}
                <strong className="baloo font-extrabold text-2xl">9,90</strong>
              </div>
              <div className="flex items-center justify-between gap-x-2">
                <div className="gb-Gray-500 p-2 rounded-md bg-Gray-500 flex items-center justify-center">
                  <button className="text-Purple-500">
                    <Minus size={14} weight="fill" />
                  </button>
                  <span className="text-Black-800 mx-1">
                    <strong>0</strong>
                  </span>
                  <button className="text-Purple-500">
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button className="bg-Purple-800 text-Gray-200 p-2 rounded-md">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </div>
            </div>
          </Div.coffee>
        </div>
      </main>
    </>
  )
}
