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
                <Stack direction={'row'} justifyContent={"space-between"} id={'priceInquiryForm'} sx={{
                    scrollMarginTop: 400
                }}>
                    <Stack sx={{ width: { xs: '90%', md: '50%' } }}>
                        <Typography variant='h3'
                            sx={{ fontWeight: 600 }}
                        >
                            <span style={{ color: theme.palette.secondary.main }}>
                                Nemokamas
                            </span>
                            &nbsp;turto kainos įvertinimas
                        </Typography>
                        <Typography pt={2} variant='body1' width={{ xs: '80%', sm: '60%' }}>
                            Užpildykite turto kainos vertinimo užklausą ir sužinokite savo nekilnojamojo turto vertę
                        </Typography>

                    </Stack>
                </Stack>
                <Stack py={4} width={'100%'} direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, alignSelf: { xs: 'flex-start', md: 'flex-end' } }}>
                    </Stack>
                    <Stack pb={{ xs: 6 }} width={{ xs: '100%', md: '50%' }}>
                        <PriceInquiryForm />
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}
