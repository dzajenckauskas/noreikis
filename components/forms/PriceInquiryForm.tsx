import { ActionDataType } from "@/app/types/ActionType";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, TextField } from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { CategoryAutocomplete } from "./CategoryAutocomplete";
import { ObjectHouseTypeAutocomplete } from "./ObjectHouseTypeAutocomplete";
import { ObjectPurposeAutocomplete } from "./ObjectPurposeAutocomplete";
import { ObjectStateAutocomplete } from "./ObjectStateAutocomplete";


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
        floorNumber: yup.string()
            .transform((value) => Number.isNaN(value) ? null : value)
            .when("category.attributes.value", {
                is: (value: string) => (value === "flat"),
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
            {/* <Stack direction={'column'} spacing={3} sx={{ width: '100%' }} pt={1}>
                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={3} width={'100%'} alignItems={'flex-end'}> */}
            <Grid container spacing={2} pb={3} >
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField disabled={sent} size="medium"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.name?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.name', { ns: 'contact' })} */}
                            Vardas
                        </Typography>}
                        {...register("name")} name={"name"}
                        error={!!errors.name?.message} helperText={errors.name?.message}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField disabled={sent} size="medium"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.email?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.email', { ns: 'contact' })} */}
                            El. paštas
                        </Typography>}
                        {...register("email")} name={"email"}
                        error={!!errors.email?.message} helperText={errors.email?.message}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField disabled={sent} size="medium"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.phone?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.phone', { ns: 'contact' })} */}
                            Tel. Nr.
                        </Typography>}
                        {...register("phone")} name={"phone"}
                        error={!!errors.phone?.message} helperText={errors.phone?.message}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField disabled={sent}
                        label={<Typography component={FormLabel} required variant='body1' color={errors.city?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                            {/* {t("form.message", { ns: 'contact' })} */}
                            Miestas
                        </Typography>}
                        size='medium'
                        {...register("city")}
                        helperText={errors.city?.message}
                        error={!!errors.city}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField disabled={sent}
                        label={<Typography component={FormLabel} required variant='body1' color={errors.address?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                            {/* {t("form.message", { ns: 'contact' })} */}
                            Tikslus adresas
                        </Typography>}
                        size='medium'
                        {...register("address")}
                        helperText={errors.address?.message}
                        error={!!errors.address}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CategoryAutocomplete form={form} />
                </Grid>
                {category && category !== 'flats' &&
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <ObjectPurposeAutocomplete form={form} />
                    </Grid>}
                {category && category !== 'land' &&
                    <>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField disabled={sent}
                                // required
                                label={<Typography required component={FormLabel} variant='body1' color={errors.areaSqM?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                    {/* {t("form.message", { ns: 'contact' })} */}
                                    Plotas, m&sup2;
                                </Typography>}
                                type="'number"
                                size='medium'
                                {...register("areaSqM")}
                                helperText={errors.areaSqM?.message}
                                error={!!errors.areaSqM}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField disabled={sent}
                                label={<Typography component={FormLabel} required variant='body1' color={errors.roomsNumber?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                    {/* {t("form.message", { ns: 'contact' })} */}
                                    Kambarių skaičius
                                </Typography>}
                                type="number"
                                size='medium'
                                {...register("roomsNumber")}
                                helperText={errors.roomsNumber?.message}
                                error={!!errors.roomsNumber}
                                fullWidth
                            />
                        </Grid>
                        {category === 'flats' && <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField disabled={sent}
                                label={<Typography component={FormLabel} required variant='body1' color={errors.floorNumber?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                    {/* {t("form.message", { ns: 'contact' })} */}
                                    Buto aukštas
                                </Typography>}
                                type="number"
                                size='medium'
                                {...register("floorNumber")}
                                helperText={errors.floorNumber?.message}
                                error={!!errors.floorNumber}
                                fullWidth
                            />
                        </Grid>}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField disabled={sent}
                                label={<Typography component={FormLabel} required variant='body1' color={errors.floorsTotal?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                    {/* {t("form.message", { ns: 'contact' })} */}
                                    Namo aukštų skaičius
                                </Typography>}
                                type="number"
                                size='medium'
                                {...register("floorsTotal")}
                                helperText={errors.floorsTotal?.message}
                                error={!!errors.floorsTotal}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField disabled={sent}
                                label={<Typography component={FormLabel} required variant='body1' color={errors.houseBuildYear?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                    {/* {t("form.message", { ns: 'contact' })} */}
                                    Namo statybos metai
                                </Typography>}
                                size='medium'
                                {...register("houseBuildYear")}
                                helperText={errors.houseBuildYear?.message}
                                error={!!errors.houseBuildYear}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} >
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
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} >
                            <ObjectHouseTypeAutocomplete form={form} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <ObjectStateAutocomplete form={form} />
                        </Grid>
                    </>}

                {category && category !== 'flats' &&
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField disabled={sent}
                            label={<Typography component={FormLabel} required variant='body1' color={errors.landArea?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                {/* {t("form.message", { ns: 'contact' })} */}
                                Sklypo plotas, a
                            </Typography>}
                            size='medium'
                            {...register("landArea")}
                            helperText={errors.landArea?.message}
                            error={!!errors.landArea}
                            fullWidth
                        />
                    </Grid>}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField disabled={sent}
                        label={<Typography component={FormLabel} variant='body1' color={errors.comment?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                            {/* {t("form.message", { ns: 'contact' })} */}
                            Komentaras
                        </Typography>}
                        size='medium'
                        multiline
                        rows={4}
                        {...register("comment")}
                        helperText={errors.comment?.message}
                        error={!!errors.comment}
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                {sent &&
                    <Stack direction={'row'} justifyContent={'center'} mb={2}>
                        <Typography textAlign={'left'} fontWeight={500} color={theme.palette.primary.dark} >
                            Turto vertinimo užklausa išsiųsta
                        </Typography>
                    </Stack>}
                {!sent &&
                    <Button size="large" variant="contained" color="secondary" type={'submit'}>
                        Siųsti užklausą
                    </Button>
                }
                {sent &&
                    <Button size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                        Siųsti dar kartą
                    </Button>
                }
            </Stack>
        </form >
    )
}

export default PriceInquiryForm