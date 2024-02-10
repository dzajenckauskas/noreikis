// import CustomButton from '@/components/shared/layout/CustomButton';
// import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorBox from "../ErrorBox";
import { FormTextField } from "./FormTextField";

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

    const { reset, handleSubmit } = form
    const onInvalid: SubmitErrorHandler<ContactFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }
    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} noValidate id={'contact-form'} style={{ width: '100%', scrollMarginTop: '300px', }}>
            <Stack direction={'column'} spacing={3} sx={{ width: '100%' }} pt={1}>
                {!sent &&
                    <Stack>
                        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={3} width={'100%'} pb={3} alignItems={'flex-end'}>
                            <FormTextField
                                disabled={sent}
                                name={"name"}
                                lable={"Vardas"}
                                fullWidth
                                required
                                form={form}
                            />

                            <FormTextField
                                disabled={sent}
                                name={"email"}
                                lable={"El. paštas"}
                                fullWidth
                                required
                                form={form}
                            />

                            <FormTextField
                                disabled={sent}
                                name={"phone"}
                                lable={"Tel. Nr."}
                                fullWidth
                                required
                                form={form}
                            />
                        </Stack>

                        <FormTextField
                            disabled={sent}
                            name={"message"}
                            lable={"Žinutė"}
                            multiline
                            rows={8}
                            fullWidth
                            form={form}
                        />
                    </Stack>}

                <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                    {sent &&
                        <Stack direction={'row'} justifyContent={'center'} mb={2}>
                            <Typography textAlign={'left'} fontWeight={500} color={theme.palette.primary.dark} >
                                Žinutė išsiųsta
                            </Typography>
                        </Stack>}
                    {!sent &&
                        <Button size="large" variant="contained" color="secondary" type={'submit'}>
                            Siųsti žinutę
                        </Button>}
                    {sent &&
                        <Button size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                            Siųsti dar kartą
                        </Button>}
                </Stack>
                {error && <ErrorBox error={error} />}
            </Stack>
        </form>
    )
}

export default ContactForm