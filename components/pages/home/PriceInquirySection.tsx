import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { SectionSubtitle } from '@/components/layout/SectionSubtitle'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const PriceInquirySection = () => {
    return (
        <Stack sx={{
            backgroundColor: '#fff',
            position: 'relative', mt: '-1px', zIndex: 3
        }}>
            <Stack spacing={1} py={10} sx={{
                justifyContent: 'space-between', width: '100%',
                maxWidth: 'xl', mx: 'auto', position: 'relative',
                px: { xl: 2, md: 4, xs: 2 },
                overflow: 'hidden'
            }}>
                <Stack direction={'row'} justifyContent={"center"}
                    id={'priceInquiryForm'} sx={{
                        scrollMarginTop: 400
                    }}>
                    <Stack sx={{ width: { xs: '90%', md: '50%' } }}>
                        <SectionTitle title={<><span style={{ color: theme.palette.secondary.main }}>
                            Nemokamas
                        </span>
                            &nbsp;turto kainos įvertinimas</>} />
                        <SectionSubtitle
                            text={"Užpildykite turto kainos vertinimo užklausą ir sužinokite savo nekilnojamojo turto vertę"} />
                    </Stack>
                </Stack>

                <Stack py={4} spacing={8} width={{ xs: '90%', md: '50%' }}
                    alignSelf={'center'}
                    direction={{ xs: 'column', md: 'column' }}
                    justifyContent={'space-between'}>
                    <Stack sx={{ p: 0 }}>
                        <PriceInquiryForm />
                    </Stack>
                    <Stack alignContent={'space-between'}
                        sx={{ position: 'relative', width: '100%' }}>
                        <Typography color={theme.palette.secondary.main}
                            sx={{ position: 'absolute', bottom: 0, pt: 2, width: { xs: '90%', sm: '60%' } }}
                            variant='body1'>
                            Įvertinęs užpildytą informaciją susisieksiu su geriausiu pasiulymu!
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
