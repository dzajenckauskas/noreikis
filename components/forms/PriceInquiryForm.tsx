import { PriceInquiryFormInputType } from "@/app/types/PriceInquiryFormType";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { AsyncAutocomplete } from "./AsyncAutocomplete";
import FormCheckbox from "./FormCheckbox";
import { FormTextField } from "./FormTextField";
import { getPriceInquiryFormSchema } from "./priceInquiry/PriceInquiryFormSchema";
import { InfoOutlined } from "@mui/icons-material";

const PriceInquiryForm = () => {
    const theme = useTheme()
    const [sent, setSent] = useState(false)

    const submit: SubmitHandler<PriceInquiryFormInputType> = async (data) => {
        const inputData = {
            data: {
                ...data,
                contents: JSON.stringify(data),
            }
        }
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/price-inquiry-forms`
        await axios.post(url, inputData)
            .catch((error) => {
                console.log(error);
                if (error?.message) {
                }
            })
            .then((response) => {
                console.log(response);
                if (response?.data) {
                    setSent(true)
                    reset()
                }
            })
    }

    const priceInquiryFormSchema = getPriceInquiryFormSchema()

    const form = useForm<PriceInquiryFormInputType>({
        mode: 'all',
        resolver: yupResolver(priceInquiryFormSchema as any),
        defaultValues: {
            category: null,
            objectPurpose: null,
            houseType: null,
            objectState: null,
        }
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
                        name={"address"}
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
                                required
                                type={"number"}
                                form={form}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormTextField
                                disabled={sent}
                                name={"roomsNumber"}
                                lable={`Kambarių skaičius`}
                                required
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
                {category === 'flats' &&
                    <Grid item xs={12} lg={12} >
                        <FormCheckbox
                            control={control}
                            label={"Namas renovuotas"}
                            name={"renovatedHouse"} />
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
                        <Button size="large"
                            //  sx={{ textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}
                            variant="contained" color="secondary" type={'submit'}>
                            Siųsti užklausą
                        </Button>}
                    {sent &&
                        <Button size="large"
                            //  sx={{ textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}
                            variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                            Siųsti dar kartą
                        </Button>}
                </Stack>
                <Stack direction={'row'} pt={2}
                    sx={{ position: 'relative', width: '100%' }}>
                    <Typography color={theme.palette.secondary.main}
                        sx={{
                            position: 'relative', alignContent: 'center', bottom: 0,
                            alignItems: 'center', justifyContent: 'center'
                            // width: { xs: '90%', sm: '60%' }
                        }}
                        variant='body1'>
                        <InfoOutlined fontSize='small' sx={{ mr: .6, position: 'relative', top: '6px' }} />
                        Įvertinęs užpildytą informaciją susisieksiu su geriausiu pasiūlymu!
                    </Typography>
                </Stack>
            </Stack>
        </form >
    )
}

export default PriceInquiryForm