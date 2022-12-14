import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import Cleave from 'cleave.js/react'
import { UfDatalist } from './datalist'
import { Div } from './styles'

export function AddressForm() {
  const { register } = useFormContext()
  const { ref: zipCodeRef, ...zipCodeConfigRest } = register('zipCode')

  return (
    <>
      <UfDatalist />
      <div className="flex gap-x-2">
        <MapPinLine size={22} className="text-Yellow-800" />
        <div className="flex flex-col">
          <span className="leading-tight">Endereço de Entrega</span>
          <span className="text-sm leading-tight text-Black-300">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <Div.form className="grid grid-cols-3 mt-8 gap-x-3 gap-y-4">
        <Cleave
          options={{
            blocks: [5, 3],
            delimiters: ['-'],
            numericOnly: true,
          }}
          className="default-input cep-mask"
          type="text"
          placeholder="CEP"
          htmlRef={zipCodeRef}
          {...zipCodeConfigRest}
          required
        />
        <div className="grid grid-cols-5 col-span-2 gap-x-3">
          <input
            type="text"
            className="col-span-3 sm:col-span-4 default-input"
            placeholder="Cidade"
            {...register('city')}
            required
          />
          <input
            type="text"
            placeholder="UF"
            className="default-input col-span-2 sm:col-span-1 input-state"
            list="ufs-datalist"
            {...register('state')}
            required
          />
        </div>
        <input
          type="text"
          className="default-input"
          placeholder="Bairro"
          {...register('district')}
          required
        />
        <input
          type="text"
          className="col-span-2 default-input"
          placeholder="Rua"
          {...register('road')}
          required
        />
        <div className="col-span-2 relative">
          <input
            type="text"
            className="w-full h-full pr-20 default-input"
            placeholder="Complemento"
            {...register('complement')}
          />
          <div className="flex absolute right-4 flex-col justify-center top-0 h-full">
            <span className="italic text-Black-100 top-4 text-xs">
              Opcional
            </span>
          </div>
        </div>
        <input
          type="text"
          placeholder="Número"
          className="default-input"
          {...register('number')}
          required
        />
      </Div.form>
    </>
  )
}
