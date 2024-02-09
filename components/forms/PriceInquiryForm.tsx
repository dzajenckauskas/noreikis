import { ActionDataType } from "@/app/types/ActionType";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormControlLabel, FormHelperText, Grid } from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { AsyncAutocomplete } from "./AsyncAutocomplete";
import { FormTextField } from "./FormTextField";


type PriceInquiryFormInputType = {
    name: string;
    phone: string;
    email: string;
    city: string;
    address: string;
    floorNumber: string;
    floorsTotal: string;
    roomsNumber: string;
    areaSqM: string;
    houseBuildYear: string;
    landArea: string;
    category: ActionDataType;
    objectPurpose: ActionDataType;
    objectState: ActionDataType;
    houseType: ActionDataType;
    comment: string;
    contents: string;
    renovatedHouse: boolean;
}
const PriceInquiryForm = () => {



    const theme = useTheme()
    const [sent, setSent] = useState(false)
    // const [error, setError] = useState<string | undefined>()

    const submit: SubmitHandler<PriceInquiryFormInputType> = async (data) => {
        const inputData = {
            data: {
                ...data,
                contents: JSON.stringify(data),
            }
        }
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/price-inquiry-forms`
        await axios.post(url, inputData)
            .catch((error: any) => {
                console.log(error);
                if (error?.message) {
                }
            })
            .then((response: any) => {
                console.log(response);
                if (response?.data) {
                    setSent(true)
                    reset()
                }
            })
    }

    const priceInquiryFormSchema = yup.object({
        name: yup.string().required(`${'Įveskite savo vardą'}`),
        phone: yup.string().required(`${'Įveskite savo telefono numerį'}`),
        email: yup.string().nullable().email(`${'Įveskite teisingą el. paštą'}`).required(`${'El. pašto adresas yra privalomas'}`),
        city: yup.string().required(`${'Įveskite NT objekto miestą'}`),
        address: yup.string().required(`${'Įveskite NT objekto adresą'}`),
        category: yup.object()
            .required(`${'Pasirinkite objekto kategoriją'}`)
            .typeError(`${'Pasirinkite objekto kategoriją'}`),
        objectPurpose: yup.object().when("category.attributes.value", {
            is: (value: string) => (value !== "flats"),
            then: () => yup.object()
                .required(`${'Pasirinkite objekto paskirtį'}`)
                .typeError(`${'Pasirinkite objekto paskirtį'}`),
        }),
        houseType: yup.object().when("category.attributes.value", {
            is: (value: string) => (value !== "land"),
            then: () => yup.object().required(`${'Pasirinkite namo tipą'}`)
                .typeError(`${'Pasirinkite namo tipą'}`),
        }),
        objectState: yup.object().when("category.attributes.value", {
            is: (value: string) => (value !== "land"),
            then: () => yup.object()
                .required(`${'Pasirinkite objekto būseną'}`)
                .typeError(`${'Pasirinkite objekto būseną'}`),
        }),
        comment: yup.string(),
        // floorNumber: yup.string()
        //     .transform((value) => Number.isNaN(value) ? null : value)
        //     .when("category.attributes.value", {
        //         is: (value: string) => (value === "flat"),
        //         then: () => yup.string()
        //             .transform((value) => Number.isNaN(value) ? null : value)
        //             .required(`${'Nurodykite buto aukštą'}`),
        //     }),
        floorNumber: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value === "flats"),
                then: () => yup.string()
                    .transform((value) => Number.isNaN(value) ? null : value)
                    .required(`${'Nurodykite namo aukštų skaičių'}`),
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
        renovatedHouse: yup.boolean()

    }).required();

    const form = useForm<PriceInquiryFormInputType>({
        mode: 'all',
        resolver: yupResolver(priceInquiryFormSchema as any),
    });

    const { reset, register, handleSubmit, formState: { errors }, control } = form
    const onInvalid: SubmitErrorHandler<PriceInquiryFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }

    const category = useWatch({
        control,
        name: "category.attributes.value",
        defaultValue: undefined,
    })
    const renovatedHouse = useWatch({
        control,
        name: "renovatedHouse",
        defaultValue: undefined,
    })

    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} noValidate id={'contact-form'} style={{ width: '100%', scrollMarginTop: '400px', }}>
            {!sent && <Grid container spacing={2} pb={3} >
                <Grid item xs={12} sm={6} >
                    <FormTextField
                        disabled={sent}
                        name={"name"}
                        lable={"Vardas"}
                        fullWidth
                        required
                        form={form}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField
                        disabled={sent}
                        name={"email"}
                        lable={"El. paštas"}
                        fullWidth
                        required
                        form={form}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField
                        disabled={sent}
                        name={"phone"}
                        lable={"Tel. Nr."}
                        fullWidth
                        required
                        form={form}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormTextField
                        disabled={sent}
                        name={"city"}
                        lable={"Miestas"}
                        fullWidth
                        required
                        form={form}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField
                        disabled={sent}
                        name={"city"}
                        lable={"Tikslus adresas"}
                        fullWidth
                        required
                        form={form}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AsyncAutocomplete form={form} url={"categories"} name={"category"} label="Objekto tipas" required />
                </Grid>
                {category && category !== 'flats' &&
                    <Grid item xs={12} sm={6}>
                        <AsyncAutocomplete form={form} url={"object-purposes"} name={"objectPurpose"} label="Objekto paskirtis" required />
                    </Grid>}
                {category && category !== 'land' &&
                    <>
                        <Grid item xs={12} sm={6}>
                            <FormTextField
                                disabled={sent}
                                name={"areaSqM"}
                                lable={`Plotas, m2`}
                                type={"number"}
                                form={form}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormTextField
                                disabled={sent}
                                name={"areaSqM"}
                                lable={`Kambarių skaičius`}
                                type={"number"}
                                form={form}
                                fullWidth
                            />

                        </Grid>
                        {category === 'flats' &&
                            <Grid item xs={12} sm={6}>
                                <FormTextField
                                    disabled={sent}
                                    name={"floorNumber"}
                                    type={"number"}
                                    lable={"Buto aukštas"}
                                    required
                                    fullWidth
                                    form={form}
                                />
                            </Grid>}
                        <Grid item xs={12} sm={6}>
                            <FormTextField
                                disabled={sent}
                                name={"floorsTotal"}
                                type={"number"}
                                lable={" Namo aukštų skaičius"}
                                required
                                fullWidth
                                form={form}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormTextField
                                disabled={sent}
                                name={"houseBuildYear"}
                                lable={"Namo statybos metai"}
                                required
                                fullWidth
                                form={form}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <AsyncAutocomplete form={form} url={"house-types"} name={"houseType"} label="Pastato tipas" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AsyncAutocomplete form={form} url={"object-states"} name={"objectState"} label="Įrengimas" required />
                        </Grid>
                    </>}

                {category && category !== 'flats' &&
                    <Grid item xs={12} sm={6}>
                        <FormTextField
                            disabled={sent}
                            name={"landArea"}
                            lable={"Sklypo plotas, a"}
                            fullWidth
                            required
                            form={form}
                        />
                    </Grid>}
                {category === 'flats' && <Grid item xs={12} lg={12} >
                    <Stack position={'relative'} alignItems={'flex-start'} width={'100%'}>
                        <FormControlLabel
                            label={<Typography component={FormLabel} sx={{ cursor: 'pointer' }}
                                onClick={() => form.setValue('renovatedHouse', !renovatedHouse)}
                                textAlign={'left'} color={errors.renovatedHouse?.message ? 'error' : theme.palette.primary.dark} >
                                {/* {t('form.renovatedHouse', { ns: 'auditPriceForm' })} */}
                                Namas renovuotas
                            </Typography>}
                            htmlFor={'renovatedHouse'}
                            control={
                                <Checkbox disableRipple sx={{ cursor: 'pointer' }}
                                    checked={renovatedHouse}
                                    id={"renovatedHouse"}
                                    {...register('renovatedHouse')}
                                />
                            }
                        />
                        {errors.renovatedHouse && <Stack direction={'row'} mt={-1}>
                            <FormHelperText sx={{ color: theme.palette.error.main }}>
                                {errors.renovatedHouse?.message}
                            </FormHelperText>
                        </Stack>}
                    </Stack>
                </Grid>}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormTextField
                        disabled={sent}
                        name={"comment"}
                        lable={"Papildomas komentaras"}
                        multiline
                        rows={4}
                        fullWidth
                        form={form}
                    />
                </Grid>
            </Grid>}

            <Stack width={'100%'} direction={'column'} alignItems={'center'} >
                {sent &&
                    <Stack direction={'row'} justifyContent={'center'} my={6} sx={{ maxWidth: '50%' }}>
                        <Typography textAlign={'center'} fontWeight={500} color={theme.palette.secondary.main} >
                            Turto vertinimo užklausa išsiųsta! Įvertinsiu turto kaina ir susisieksiu su Jumis!
                        </Typography>
                    </Stack>}
                <Stack width={sent ? '50%' : '100%'}>
                    {!sent &&
                        <Button size="large" variant="contained" color="secondary" type={'submit'}>
                            Siųsti užklausą
                        </Button>}
                    {sent &&
                        <Button size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                            Siųsti dar kartą
                        </Button>}
                </Stack>
            </Stack>
        </form >
    )
}

export default PriceInquiryForm