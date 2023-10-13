
export type InputType = 'SELECT' | 'CARD' | 'RADIO' | 'TABLE'

export type VariantType = {
    label?: string
    id: string
}

export type DoctorType = {
    id: string
    fio: string
    photo: string
    price: number
}

export type RadioType = {
    id: string
    label: string
    description?: string
    price: number
}

export type StepType = {
    type: InputType
    variants: VariantType[]
    label: string
    description: string
    Component: JSX.Element
}