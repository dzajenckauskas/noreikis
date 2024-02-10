import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const PriceInquirySection = () => {

    return (
        <Stack sx={{
            backgroundColor: '#fafafa',
            position: 'relative', mt: '-1px', zIndex: 3
        }}>
            <Stack spacing={1} py={10} sx={{
                justifyContent: 'space-between', width: '100%',
                maxWidth: 'xl', mx: 'auto', position: 'relative',
                px: { xl: 2, md: 4, xs: 2 },
                backgroundColor: '#fafafa',
                overflow: 'hidden'
            }}>
                <Stack direction={'row'} justifyContent={"space-between"}
                    id={'priceInquiryForm'} sx={{
                        scrollMarginTop: 400
                    }}>
                    <Stack sx={{ width: { xs: '90%', md: '50%' } }}>
                        <Typography variant='h3' sx={{ fontWeight: 600 }}>
                            <span style={{ color: theme.palette.secondary.main }}>
                                Nemokamas
                            </span>
                            &nbsp;turto kainos įvertinimas
                        </Typography>
                        <Typography pt={2} variant='body1' width={{ xs: '80%', sm: '80%' }}>
                            Užpildykite turto kainos vertinimo užklausą ir sužinokite savo nekilnojamojo turto vertę
                        </Typography>
                    </Stack>
                </Stack>
                <Stack py={4} spacing={8} width={'100%'}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    justifyContent={'space-between'}>
                    <Stack alignContent={'space-between'}
                        sx={{ position: 'relative', width: '100%' }}>
                        <Typography color={theme.palette.secondary.main}
                            sx={{ position: 'absolute', bottom: 0, pt: 2, width: { xs: '90%', sm: '60%' } }}
                            variant='body1'>
                            Įvertinęs užpildytą informaciją susisieksiu su geriausiu pasiulymu!
                        </Typography>
                    </Stack>
                    <PriceInquiryForm />
                </Stack>
            </Stack>
        </Stack>
    )
}
