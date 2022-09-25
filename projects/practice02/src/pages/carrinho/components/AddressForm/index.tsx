import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import * as Input from '../../../../layouts/elements/Input'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <>
      <div className="flex gap-x-2">
        <MapPinLine size={22} className="text-Yellow-800" />
        <div className="flex flex-col">
          <span className="leading-tight">Endereço de Entrega</span>
          <span className="text-sm leading-tight text-Black-300">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-x-3 gap-y-4">
        <Input.form type="text" placeholder="CEP" {...register('zipCode')} />
        <div className="grid grid-cols-5 col-span-2 gap-x-3">
          <Input.form
            type="text"
            extraClasses="col-span-4"
            placeholder="Cidade"
            {...register('city')}
          />
          <Input.form
            type="text"
            placeholder="UF"
            {...register('state')}
            maxLength={2}
          />
        </div>
        <Input.form
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <Input.form
          type="text"
          extraClasses="col-span-2"
          placeholder="Rua"
          {...register('road')}
        />
        <div className="col-span-2 relative">
          <Input.form
            type="text"
            extraClasses="w-full h-full pr-20"
            placeholder="Complemento"
            {...register('complement')}
          />
          <div className="flex absolute right-4 flex-col justify-center top-0 h-full">
            <span className="italic text-Black-100 top-4 text-xs">
              Opcional
            </span>
          </div>
        </div>
        <Input.form type="text" placeholder="Número" {...register('number')} />
      </div>
    </>
  )
}
