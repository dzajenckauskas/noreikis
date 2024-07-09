import { HeadComponent } from '@/components/layout/HeadComponent'
import Layout from '@/components/layout/Layout'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


export default function PrivacyPolicy() {
  return (
    <>
      <HeadComponent slug='privatumo-politika' title='Privatumo politika' description='Noreikis.com privatumo politika' />
      <Layout>
        <Stack spacing={1} sx={{ width: '100%', maxWidth: 'xl', mx: 'auto', px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 }, pb: 8 }}>
          <Typography variant='h4' fontWeight={600} pt={4}>
            Privatumo politika
          </Typography>
          <Typography>
            Dėkojame, kad lankotės mūsų noreikis.com tinklalapyje. Mes labai vertiname jūsų privatumą ir siekiame užtikrinti, kad jūsų asmeninė informacija būtų saugiai tvarkoma. Šioje privatumo politikoje aprašoma, kaip renkame, naudojame ir saugome jūsų asmeninę informaciją.
          </Typography>

          <Typography variant='h6' fontWeight={600} pt={2}>
            Kokius duomenis renkame
          </Typography>

          <Typography>
            Kuomet naudojatės mūsų tinklalapiu, galime rinkti įvairią informaciją, įskaitant jūsų vardą, el. pašto adresą, naršyklės duomenis ir kitą panašią informaciją.
          </Typography>
          <Typography variant='h6' fontWeight={600} pt={2}>
            Kaip naudojame jūsų duomenis
          </Typography>
          <Typography component={'span'}>
            Jūsų pateikti duomenys gali būti naudojami šiais tikslais: <br />
            <ul style={{ paddingLeft: 15, paddingTop: 5 }}>
              <li>
                Užtikrinti tinklalapio veikimą ir suteikti jums pageidaujamą patirtį.<br />
              </li>
              <li>
                Siųsti jums informaciją, kurią paprašėte apie mūsų paslaugas ar produktus.<br />
              </li>
              <li>
                Pagerinti mūsų tinklalapio turinį ir paslaugas.<br />
              </li>
              <li>
                Bendrinti su trečiosiomis šalimis tik su jūsų sutikimu.<br />
              </li>
            </ul>
          </Typography>
          <Typography variant='h6' fontWeight={600} pt={2}>
            Slapukai
          </Typography>
          <Typography>
            Mūsų tinklalapis naudoja slapukus tam, kad pagerintų jūsų naršymo patirtį. Slapukai yra mažos tekstinės rinkmenos, kurias įrašo jūsų naršyklė, kad galėtume atpažinti jūsų naršyklę ir prisiminti tam tikrą informaciją.
          </Typography>
          <Typography variant='h6' fontWeight={600} pt={2}>
            Duomenų saugojimas
          </Typography>

          <Typography>
            Mes įsipareigojame užtikrinti jūsų duomenų saugumą. Mes taikome tinkamus saugumo priemones, kad apsaugotume jūsų asmeninę informaciją nuo neteisėtos prieigos, pakeitimo ar sunaikinimo.
          </Typography>

          <Typography variant='h6' fontWeight={600} pt={2}>
            Jūsų teisės
          </Typography>

          <Typography component={'span'}>
            Jūs turite teisę: <br />
            <ul style={{ paddingLeft: 15, paddingTop: 5 }}>
              <li>
                Susipažinti su tuo, kaip naudojame jūsų asmeninę informaciją.<br />
              </li>
              <li>
                Paprašyti pateikti informaciją, kurią turime apie jus.<br />
              </li>
              <li>
                Paprašyti ištaisyti netikslius duomenis apie jus.<br />
              </li>
              <li>
                Paprašyti ištrinti jūsų asmeninę informaciją iš mūsų duomenų bazės.<br />
              </li>
            </ul>
          </Typography>
          <Typography variant='h6' fontWeight={600} pt={2}>
            Kontaktai
          </Typography>
          <Typography>
            Jei turite klausimų arba pastabų dėl šios privatumo politikos, prašome susisiekti su mumis el. paštu: info@noreikis.com.
          </Typography>
          <Typography>
            Ši privatumo politika buvo paskutinį kartą atnaujinta: 2024 m. Vasario 10 d.
          </Typography>
        </Stack>
      </Layout >
    </>
  )
}
