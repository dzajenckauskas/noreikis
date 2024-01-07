import { yupResolver } from "@hookform/resolvers/yup";
import { ActionDataType, ActionType } from "@/app/types/ActionType";
import { Autocomplete, Button, TextField } from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorBox from "../ErrorBox";


type PriceInquiryFormInputType = {
    name: string;
    phone: string;
    email: string;
    city: string;
    address: string;
    category: ActionDataType;
    comment: string;
    contents: string;
}

type Props = {
    categories: ActionType;
}
const PriceInquiryForm = ({ categories }: Props) => {
    console.log(categories, "categories");

    const theme = useTheme()
    const [sent, setSent] = useState(false)
    // const [categories, setCategories] = useState<ActionType[]>()
    const [error, setError] = useState<string | undefined>()

    const submit: SubmitHandler<PriceInquiryFormInputType> = async (data) => {
        const inputData = {
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                category: data.category,
                city: data.city,
                address: data.address,
                comment: data.comment,
                contents: JSON.stringify(data),
            }
        }
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/price-inquiry-forms`
        await axios.post(url, inputData)
            .catch((error: any) => {
                console.log(error);
                if (error?.message) {
                    setError(error.message)
                }
            })
            .then((response: any) => {
                console.log(response);
                if (response?.data) {
                    setError(undefined)
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
        category: yup.object().required(`${'Pasirinkite NT objekto tipą'}`),
        comment: yup.string().required(`${'Įveskite žinutę'}`),

    }).required();

    const form = useForm<PriceInquiryFormInputType>({
        resolver: yupResolver(priceInquiryFormSchema as any),
    });

    const { reset, register, handleSubmit, formState: { errors } } = form
    const onInvalid: SubmitErrorHandler<PriceInquiryFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }


    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} id={'contact-form'} style={{ width: '100%', scrollMarginTop: '300px', }}>
            <Stack direction={'column'} spacing={3} sx={{ width: '100%' }} pt={1}>
                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={3} width={'100%'} alignItems={'flex-end'}>
                    <TextField disabled={sent} size="small"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.name?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.name', { ns: 'contact' })} */}
                            Vardas
                        </Typography>}
                        {...register("name")} name={"name"}
                        error={!!errors.name?.message} helperText={errors.name?.message}
                        fullWidth
                    />

                    <TextField disabled={sent} size="small"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.email?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.email', { ns: 'contact' })} */}
                            El. paštas
                        </Typography>}
                        {...register("email")} name={"email"}
                        error={!!errors.email?.message} helperText={errors.email?.message}
                        fullWidth
                    />

                    <TextField disabled={sent} size="small"
                        label={<Typography component={FormLabel} required variant='body1'
                            color={errors.email?.message ? 'error' : theme.palette.primary.dark}   >
                            {/* {t('form.phone', { ns: 'contact' })} */}
                            Tel. Nr.
                        </Typography>}
                        {...register("phone")} name={"phone"}
                        error={!!errors.phone?.message} helperText={errors.phone?.message}
                        fullWidth
                    />
                </Stack>
                <Autocomplete
                    size="small"
                    fullWidth
                    disablePortal
                    options={categories.data ?? []}
                    onChange={(_e, v) => {
                        console.log(v)
                        if (v)
                            form.setValue('category', v)
                    }}
                    getOptionLabel={(o) => `${o.attributes.title ?? ''}`}
                    renderInput={(params) => <TextField {...params} required label="Objekto tipas" />}
                />


                <TextField disabled={sent}
                    label={<Typography component={FormLabel} required variant='body1' color={errors.city?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                        {/* {t("form.message", { ns: 'contact' })} */}
                        Miestas
                    </Typography>}
                    size='small'
                    {...register("city")}
                    helperText={errors.city?.message}
                    error={!!errors.city}
                    fullWidth
                />
                <TextField disabled={sent}
                    label={<Typography component={FormLabel} required variant='body1' color={errors.address?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                        {/* {t("form.message", { ns: 'contact' })} */}
                        Tikslus adresas
                    </Typography>}
                    size='small'
                    {...register("address")}
                    helperText={errors.address?.message}
                    error={!!errors.address}
                    fullWidth
                />
                <TextField disabled={sent}
                    label={<Typography component={FormLabel} variant='body1' color={errors.comment?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                        {/* {t("form.message", { ns: 'contact' })} */}
                        Komentaras
                    </Typography>}
                    size='small'
                    multiline
                    rows={8}
                    {...register("comment")}
                    helperText={errors.comment?.message}
                    error={!!errors.comment}
                    fullWidth
                />

                <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                    {sent &&
                        <Stack direction={'row'} justifyContent={'center'} mb={2}>
                            <Typography textAlign={'left'} fontWeight={500} color={theme.palette.primary.dark} >
                                {/* {t("form.requestSent", { ns: 'contact' })} */}
                                Žinutė išsiųsta
                            </Typography>
                        </Stack>}
                    {!sent &&
                        <Button variant="contained" color="secondary" type={'submit'}>
                            Siųsti žinutę
                            {/* // <CustomButton medium submit text={`${t("actions.send", { ns: 'contact' })}`} /> */}
                        </Button>
                    }
                    {sent &&
                        <Button variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                            Siųsti dar kartą
                            {/* // <CustomButton medium submit text={`${t("actions.send", { ns: 'contact' })}`} /> */}
                            {/* // <CustomButton medium secondary text={`${t("actions.sendAgain", { ns: 'contact' })}`} */}
                            {/* //     onClick={() => { setSent(false) }}></CustomButton> */}
                        </Button>
                    }
                </Stack>
                {error && <ErrorBox errors={error} />}
            </Stack>
        </form>
    )
}

export default PriceInquiryForm