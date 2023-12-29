export type VehiclesType = {
    data: VehicleType[];
    meta: MetaType;
}
export type VehicleType = {
    id: number;
    attributes?: VehicleAtributesType
}
export type VehicleAtributesType = {
    bodyType: string;
    color: string;
    createdAt: string;
    damage: string | null;
    description: any[];
    // [{…}]
    discountPrice: string;
    engineCapacityCC: string
    firstRegDate: string;
    fuelType: string;
    gearbox: string;
    images: any;
    // {data: Array(3)}
    instalmentPriceFrom: number;
    locale: string;
    make: string;
    mileageKM: string;
    model: string;
    numberOfDoors: string;
    powerKW: string;
    price: string;
    publishedAt: string;
    slug: string;
    steeringWheel: string;
    updatedAt: string;
    vin: string;
}
export type MetaType = {
    pagination: PaginationType;
}
export type PaginationType = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}