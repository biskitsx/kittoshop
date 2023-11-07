export interface SizeDTO {
    S: boolean;
    M: boolean;
    L: boolean;
}
export interface AvailabilityDTO {
    inStock: boolean;
    outOfStock: boolean;
}
export interface PriceDTO {
    from: number | null;
    to: number | null;
}
export interface FilterProps {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    type: string
}