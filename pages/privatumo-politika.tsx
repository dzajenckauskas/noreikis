import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import Typography from '@mui/material/Typography'


export default function PrivacyPolicy() {
  return (
    <>
      <HeadComponent title='Privatumo politika' description='Noreikis.com privatumo politika' />
      <Layout>
        <Typography variant='h4' fontWeight={600}>
          Privatumo politika
        </Typography>
      </Layout>
    </>
  )
}
