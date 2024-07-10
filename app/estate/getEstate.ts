import { TopbrokerType } from "../types/ObjectsType"

export const getActionTypeText = (topbroker: TopbrokerType | undefined) => {
    if (topbroker?.list?.[0].operation == 'sale') return 'Parduodama'
    if (topbroker?.list?.[0].operation == 'rent') return 'Nuomojama'
    else return null
}

export const getStatusTypeText = (topbroker: TopbrokerType | undefined) => {
    if (topbroker?.list?.[0].operation == 'reserved') return 'Rezervuota'
    else return null
}
export const getEstateTypeText = (topbroker: TopbrokerType | undefined) => {
    if (topbroker?.list?.[0].estate_type == 'house') return 'Namas'
    if (topbroker?.list?.[0].estate_type == 'flat') return 'Butas'
    if (topbroker?.list?.[0].estate_type == 'site') return 'Sklypas'
    else return null
}

export const transformTopbrokerData = (topbroker: TopbrokerType) => {
    // console.log(topbroker, "topbroker");
    const action = getActionTypeText(topbroker)
    const status = getStatusTypeText(topbroker)
    const estateType = getEstateTypeText(topbroker)

    let data = {
        images: topbroker.list?.[0].photos,
        action: action,
        status: status,
        estateType: estateType,
        formattedLocation: topbroker.list?.[0].location.formated_address,
        price: topbroker.list?.[0].main_parameters?.find((mp) => mp.title === 'estate.sale_price'),
        rentPrice: topbroker.list?.[0].main_parameters?.find((mp) => mp.title === 'estate.rent_price'),
        area: topbroker.list?.[0].main_parameters.find((p) => p.title === 'estate.area'),
        roomCount: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.room_count'),
        floor: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.floor'),
        floorCount: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.floor_count'),
        year: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.year'),
        equipment: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.building_equipment.title'),
        heating: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.building_heating.title'),
        features: topbroker.list?.[0].parameters.find((p) => p.title === 'estate.features.title'),

    }
    return data
}