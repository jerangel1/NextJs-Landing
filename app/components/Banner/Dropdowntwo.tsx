import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

type Hourtype = {
  name: string;
};

type DrawType = {
  sorteo_id: number;
  sorteo_nombre: string;
  hora_sorteo: string;
};

const Hour: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const DrawsData: Record<string, DrawType[]> = {
  'nica': [
    { sorteo_id: 1, sorteo_nombre: 'Lotería Nica Mañana', hora_sorteo: '11:00 AM' },
    { sorteo_id: 2, sorteo_nombre: 'Lotería Nica Tarde', hora_sorteo: '04:00 PM' },
    { sorteo_id: 3, sorteo_nombre: 'Lotería Nica Noche', hora_sorteo: '08:00 PM' }
  ],
  'tica': [
    { sorteo_id: 4, sorteo_nombre: 'Lotería Tica Mañana', hora_sorteo: '10:30 AM' },
    { sorteo_id: 5, sorteo_nombre: 'Lotería Tica Tarde', hora_sorteo: '03:30 PM' }
  ],
  'nacional': [
    { sorteo_id: 6, sorteo_nombre: 'Lotería Nacional Mañana', hora_sorteo: '12:00 PM' },
    { sorteo_id: 7, sorteo_nombre: 'Lotería Nacional Noche', hora_sorteo: '07:00 PM' }
  ],
  'pick3': [
    { sorteo_id: 8, sorteo_nombre: 'Pick 3 Medio Día', hora_sorteo: '12:30 PM' },
    { sorteo_id: 9, sorteo_nombre: 'Pick 3 Noche', hora_sorteo: '09:00 PM' }
  ],
  'florida': [
    { sorteo_id: 10, sorteo_nombre: 'Lotería Florida Día', hora_sorteo: '01:00 PM' },
    { sorteo_id: 11, sorteo_nombre: 'Lotería Florida Noche', hora_sorteo: '11:15 PM' }
  ],
  '3monazos': [
    { sorteo_id: 12, sorteo_nombre: '3 Monazos Tarde', hora_sorteo: '05:00 PM' },
    { sorteo_id: 13, sorteo_nombre: '3 Monazos Noche', hora_sorteo: '10:00 PM' }
  ]
};

const Dropdowntwo = ({ selectedProduct }: { selectedProduct: string }) => {
  const [draws, setDraws] = useState<DrawType[]>([])
  const [selected, setSelected] = useState<DrawType | null>(null)

  useEffect(() => {
    const productDraws = DrawsData[selectedProduct] || []
    setDraws(productDraws)
    setSelected(productDraws.length > 0 ? productDraws[0] : null)
  }, [selectedProduct])

  if (!selectedProduct) return null

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-xl font-semibold">
              {selected ? `${selected.sorteo_nombre} - ${selected.hora_sorteo}` : 'Selecciona un sorteo'}
            </span>
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
              {draws.map((draw) => (
                <Listbox.Option
                  key={draw.sorteo_id}
                  value={draw}
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
                        {draw.sorteo_nombre} - {draw.hora_sorteo}
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
  )
}

const Dropdown = () => {
  const [selected, setSelected] = useState(Hour[0])

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
      <h3 className='text-lg text-lightgrey'>Hours you going to invest?</h3>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-xl font-semibold ">{selected.name}</span>
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
              {Hour.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
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
  )
}

export default Dropdowntwo;
