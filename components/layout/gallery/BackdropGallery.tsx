import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from "next/image";
import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { theme } from '../Theme';
{/* TODO:https://www.kaipniujorkebycitus.lt/galerija#g2-6  */ }

type Props = {
    images: string[];
    open: boolean;
    onClose: () => void;
}
const BackdropGallery = ({ images, open, onClose }: Props) => {

    const items = images.map((url, i) => {
        return (<Stack key={i} position={'relative'} alignItems={'center'}
            onClick={() => carousel?.current?.slideTo(i)}
            sx={{
                mt: '40px',
                mb: '20px',
                position: 'relative',
                maxWidth: '1500px',
                mx: 'auto',
                width: '100%', height: 'calc(100vh - 140px)'
            }}>
            <Image
                priority
                objectFit="contain"
                fill
                src={url ?? "/assets/images/fallback-img.jpeg"}
                alt={'product.translation?.title'}
            />
        </Stack>)
    })

    const carousel = useRef<AliceCarousel>(null);

    return (
        <Backdrop
            sx={{
                flexDirection: 'column', p: 4, backgroundColor: 'rgba(0, 0, 0, 0.9)',
                position: 'fixed',
                zIndex: 999
                // zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 10
            }}
            open={open}>
            <AliceCarousel
                ref={carousel}
                animationType="slide"
                autoPlayInterval={2000}
                animationDuration={800}
                disableDotsControls
                autoHeight
                autoWidth
                items={items}
                infinite
            // autoPlay={autoplay}
            />

            <Stack position={'relative'} alignItems={'center'} sx={{
                mt: 0,
                mb: '40px',
                position: 'relative', maxWidth: '1500px',
                width: '100%', height: '100%'
            }}>
                <Stack direction={'row'} spacing={.3} sx={{ mx: 'auto', position: 'absolute', bottom: 0 }}>
                    {images.length > 1 &&
                        <Button color={'info'} onClick={(e) => carousel?.current?.slidePrev(e)} sx={{
                            minWidth: '40px', boxShadow: 'none !important ',
                            backgroundColor: '#fff',
                            opacity: .9, ':hover': { opacity: .6, backgroundColor: '#fff' },
                            width: 40, height: 40, zIndex: 999
                        }}>
                            <WestIcon sx={{ color: theme.palette.primary.main }} />
                        </Button>}
                    <Button color={'info'} onClick={onClose} sx={{
                        minWidth: '40px', boxShadow: 'none !important ',
                        backgroundColor: '#fff',
                        opacity: .9, ':hover': { opacity: .6, backgroundColor: '#fff' },
                        width: 40, height: 40, zIndex: 999
                    }}>
                        <CloseIcon sx={{ color: theme.palette.primary.main }} />
                    </Button>
                    {images.length > 1 &&
                        <Button color={'info'} onClick={(e) => carousel?.current?.slideNext(e)} sx={{
                            minWidth: '40px', boxShadow: 'none !important ',
                            backgroundColor: '#fff',
                            opacity: .9, ':hover': { opacity: .6, backgroundColor: '#fff' },
                            width: 40, height: 40, zIndex: 999
                        }}>
                            <EastIcon sx={{ color: theme.palette.primary.main }} />
                        </Button>}
                </Stack>
            </Stack>
        </Backdrop>
    )
}

export default BackdropGallery