import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const PriceInquirySection = () => {
    return (
        <Stack sx={{
            px: { xl: 2, md: 4, xs: 2 },
            width: '100%', maxWidth: 'xl', mx: 'auto'
        }}>
            <Stack py={8} spacing={2} id={'priceInquiryForm'} direction={{ xs: 'column', md: 'column' }}>
                <Stack pb={2} width={{ md: '50%', xs: '100%' }}>
                    <Typography variant='h4' color={theme.palette.secondary.main} fontWeight={600}>
                        {'Nemokamas turto kainos įvertinimas'}
                    </Typography>
                    <Typography variant='body1' color={theme.palette.primary.main}>
                        {'Nemokamas turto kainos įvertinimas'}
                    </Typography>
                </Stack>
                <Stack width={{ md: '50%', xs: '100%' }}>
                    <PriceInquiryForm />
                </Stack>
            </Stack>
        </Stack>
    )
}
