// import CustomButton from '@/components/shared/layout/CustomButton';
// import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
// import { ContactFormSubmitResponseType } from "@idcms/store";
import { Button, TextField } from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorBox from "../ErrorBox";


type ContactFormInputType = {
    name: string;
    phone: string;
    email: string;
    message: string;
    url: string;
    contents: string;
}


const ContactForm = () => {
    const theme = useTheme()
    const [sent, setSent] = useState(false)
    const [error, setError] = useState<string | undefined>()

    const submit: SubmitHandler<ContactFormInputType> = async (data) => {
        const inputData = {
            data: {
                email: data.email,
                name: data.name,
                phone: data.phone,
                message: data.message,
                url: window.location.href,
                contents: JSON.stringify(data),
            }
        }
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/contact-forms`
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

    const contactFormSchema = yup.object({
        email: yup.string().nullable().email(`${'Įveskite teisingą el. paštą'}`).required(`${'El. pašto adresas yra privalomas'}`),
        name: yup.string().required(`${'Įveskite savo vardą'}`),
        message: yup.string().required(`${'Įveskite žinutę'}`),
        phone: yup.string().nullable()

    }).required();

    const form = useForm<ContactFormInputType>({
        resolver: yupResolver(contactFormSchema as any),
    });

    const { reset, register, handleSubmit, formState: { errors } } = form
    const onInvalid: SubmitErrorHandler<ContactFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }
    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} noValidate id={'contact-form'} style={{ width: '100%', scrollMarginTop: '300px', }}>
            <Stack direction={'column'} spacing={3} sx={{ width: '100%' }} pt={1}>
                {!sent &&
                    <Stack>
                        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={3} width={'100%'} pb={3} alignItems={'flex-end'}>
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

                            <TextField disabled={sent} size="medium"
                                label={<Typography component={FormLabel} variant='body1'
                                    color={errors.email?.message ? 'error' : theme.palette.primary.dark}   >
                                    {/* {t('form.phone', { ns: 'contact' })} */}
                                    Tel. Nr.
                                </Typography>}
                                {...register("phone")} name={"phone"}
                                error={!!errors.phone?.message} helperText={errors.phone?.message}
                                fullWidth
                            />
                        </Stack>

                        <TextField disabled={sent}
                            label={<Typography component={FormLabel} required variant='body1' color={errors.message?.message ? theme.palette.error.main : theme.palette.primary.dark}  >
                                {/* {t("form.message", { ns: 'contact' })} */}
                                Žinutė
                            </Typography>}
                            size='small'
                            multiline
                            rows={8}
                            {...register("message")}
                            helperText={errors.message?.message}
                            error={!!errors.message}
                            fullWidth
                        />
                    </Stack>}

                <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                    {sent &&
                        <Stack direction={'row'} justifyContent={'center'} mb={2}>
                            <Typography textAlign={'left'} fontWeight={500} color={theme.palette.primary.dark} >
                                {/* {t("form.requestSent", { ns: 'contact' })} */}
                                Žinutė išsiųsta
                            </Typography>
                        </Stack>}
                    {!sent &&
                        <Button size="large" variant="contained" color="secondary" type={'submit'}>
                            Siųsti žinutę
                            {/* // <CustomButton medium submit text={`${t("actions.send", { ns: 'contact' })}`} /> */}
                        </Button>
                    }
                    {sent &&
                        <Button size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
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

export default ContactForm