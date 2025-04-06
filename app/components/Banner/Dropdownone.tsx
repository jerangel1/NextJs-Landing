import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export type LotteryProductType = {
  id: string;
  name: string;
};

export const LotteryProducts: LotteryProductType[] = [
  { id: 'nica', name: 'Lotería Nica' },
  { id: 'tica', name: 'Lotería Tica' },
  { id: 'nacional', name: 'Lotería Nacional' },
  { id: 'pick3', name: 'Pick 3' },
  { id: 'florida', name: 'Lotería Florida' },
  { id: '3monazos', name: '3 Monazos' }
];

interface DropdownoneProps {
  selectedProduct: LotteryProductType;
  onProductChange: (product: LotteryProductType) => void;
}

const Dropdownone = ({ selectedProduct, onProductChange }: DropdownoneProps) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="w-full">
        <Listbox value={selectedProduct} onChange={onProductChange}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate text-xl font-semibold">{selectedProduct.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {LotteryProducts.map((product) => (
                  <Listbox.Option
                    key={product.id}
                    value={product}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {product.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  )
}

export default Dropdownone
