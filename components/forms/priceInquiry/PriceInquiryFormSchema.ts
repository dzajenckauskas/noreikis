import * as yup from "yup";

export const getPriceInquiryFormSchema = () => {
    const priceInquiryFormSchema = yup.object({
        name: yup.string().required(`${'Įveskite savo vardą'}`),
        phone: yup.string().required(`${'Įveskite savo telefono numerį'}`),
        email: yup.string().nullable().email(`${'Įveskite teisingą el. paštą'}`).required(`${'El. pašto adresas yra privalomas'}`),
        city: yup.string().required(`${'Įveskite NT objekto miestą'}`),
        address: yup.string().required(`${'Įveskite NT objekto adresą'}`),
        category: yup.object().required(`${'Pasirinkite objekto kategoriją'}`),
        objectPurpose: yup.object().nullable().when("category.attributes.value", {
            is: (value: string) => {
                return (value == "land" || value == 'house')
            },
            then: () => yup.object()
                .required(`${'Pasirinkite objekto paskirtį'}`)
                .typeError(`${'Pasirinkite objekto paskirtį'}`),
        }),
        houseType: yup.object().nullable().when("category.attributes.value", {
            is: (value: string) => (value !== "land"),
            then: () => yup.object().required(`${'Pasirinkite namo tipą'}`)
                .typeError(`${'Pasirinkite namo tipą'}`),
        }),
        objectState: yup.object().nullable().when("category.attributes.value", {
            is: (value: string) => {
                return (value == "flats" || value == "house")
            },
            then: () => yup.object()
                .required(`${'Pasirinkite objekto būseną'}`)
                .typeError(`${'Pasirinkite objekto būseną'}`),
        }),
        comment: yup.string().nullable(),
        floorNumber: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value === "flats"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite buto aukštą'}`),
            }),
        floorsTotal: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value !== "land"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite namo aukštų skaičių'}`),
            }),
        roomsNumber: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value !== "land"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite kambarių skaičių'}`),
            }),
        areaSqM: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value !== "land"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite objeto plotą'}`),
            }),
        landArea: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value !== "flats"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite sklypo plotą'}`),
            }),
        houseBuildYear: yup.string().when("category.attributes.value", {
            is: (value: string) => (value !== "land"),
            then: () => yup.string()
                .required(`${'Nurodykite pastato statybos metus'}`)
                .typeError(`${'Nurodykite pastato statybos metus'}`),
        }),
        renovatedHouse: yup.boolean().nullable()

    }).required();
    return priceInquiryFormSchema
}