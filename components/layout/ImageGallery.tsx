import { ImageType } from '@/app/types/ImageTypes';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import WestIcon from '@mui/icons-material/West';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Image from "next/legacy/image";
import { useEffect, useRef, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { theme } from './Theme';

type Props = {
    images: ImageType[]
}
export const ImageCarousel = ({ images }: Props) => {
    const [openFullscreen, setOpenFullscreen] = useState(false);
    const [activeImage, setActiveImage] = useState<number>(0)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleClose = () => {
        setOpenFullscreen(false);
    };
    const handleToggle = () => {
        setActiveImage(activeImage)
        setOpenFullscreen(!openFullscreen);
    };

    useEffect(() => {
        if (openFullscreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [openFullscreen]);


    function handleTouchStart(e: any) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e: any) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const toNextImage = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveImage((activeImage + 1) > max ? 0 : activeImage + 1)
        }
    }
    const toPreviousImage = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveImage((activeImage - 1) < 0 ? max : activeImage - 1)
        }
    }

    function handleTouchEnd() {
        if (images)
            if (touchStart - touchEnd > 100) {
                toNextImage()
            }
        if (touchStart - touchEnd < -100) {
            toPreviousImage()
        }
    }

    const handleSelectImage = (id: number) => {
        setActiveImage(id);
    }
    const imgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

    const thumbs = images?.map((item, i) => {
        const imageSrc = item.attributes?.formats.large?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.formats.large?.url}` : undefined
        return (
            <Stack key={i} id={i.toString()}
                sx={{ position: 'relative', width: 100, height: 100, ':hover': { opacity: .9 }, opacity: activeImage === i ? .9 : .6, cursor: 'pointer' }}>
                <Image onClick={() => handleSelectImage(i)}
                    priority alt={item?.attributes?.alternativeText ?? ''}
                    layout='responsive' width={100} height={100} objectFit='cover' src={imageSrc ?? '/'} />
            </Stack>
        )
    })


    return (
        <>
            <Stack ref={imgRef}
                sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
                <Image priority alt={images[activeImage]?.attributes?.alternativeText ?? ''}
                    layout='responsive' objectFit='cover' height={images[activeImage].attributes?.height} width={100}
                    src={`${process.env.NEXT_PUBLIC_API_URL}` + images[activeImage]?.attributes?.url ?? "/assets/images/fallback-img.jpeg"} />
            </Stack>

            {images.length > 1 && <>
                <Stack direction={'row'} onClick={toPreviousImage} sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fff', width: 40, height: 40, position: 'absolute', opacity: .6,
                    ':hover': { opacity: .9 }, left: 0, bottom: 0, pt: 1, pr: 1
                }} justifyContent={'flex-end'}>
                    <WestIcon sx={{ color: theme.palette.primary.main }} />
                </Stack>

                <Stack direction={'row'} onClick={toNextImage} sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fff', width: 40, height: 40, position: 'absolute', opacity: .6,
                    ':hover': { opacity: .9 }, left: 42, bottom: 0, pt: 1, pl: 1
                }} justifyContent={'flex-start'}>
                    <EastIcon sx={{ color: theme.palette.primary.main }} />
                </Stack>
            </>}
            <Stack direction={'row'} onClick={handleToggle} sx={{
                cursor: 'pointer', justifyContent: 'center', alignItems: 'center',
                backgroundColor: '#fff', width: 40, height: 40, position: 'absolute', opacity: .6,
                ':hover': { opacity: .9 }, right: 0, bottom: 0
            }} justifyContent={'space-between'}>
                <FullscreenIcon sx={{ color: theme.palette.primary.main, fontSize: 27 }} />
            </Stack>

            {images.length > 1 &&
                <Stack direction={'row'} mt={2}>
                    {thumbs}
                </Stack>}

            <Backdrop
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1 }}
                open={openFullscreen}>
                <Stack position={'relative'} sx={{
                    position: 'relative', maxWidth: '1500px', maxHeight: '80vh', width: '100%', height: '100%'
                }}>
                    <Image
                        priority
                        layout='responsive'
                        objectFit="contain"
                        width={images[activeImage]?.attributes?.width}
                        height={images[activeImage]?.attributes?.height}
                        src={`${process.env.NEXT_PUBLIC_API_URL}` + images[activeImage]?.attributes?.url ?? "/assets/images/fallback-img.jpeg"}
                        alt={'product.translation?.title'}
                        onTouchStart={(e) => { handleTouchStart(e) }}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={(e) => { handleTouchMove(e) }}
                    />

                    <Stack direction={'row'} sx={{ mx: 'auto', position: 'relative', bottom: -20 }}>
                        {images.length > 1 && <Stack direction={'row'} onClick={toPreviousImage} sx={{
                            cursor: 'pointer',
                            backgroundColor: '#fff', width: 40, height: 40, opacity: .6,
                            bottom: 0,
                            ':hover': { opacity: .9 }, pt: 1, pr: 1
                        }} justifyContent={'flex-end'}>
                            <WestIcon sx={{ color: theme.palette.primary.main }} />
                        </Stack>}
                        <Stack direction={'row'} onClick={handleClose} sx={{
                            justifyContent: 'center', alignItems: 'center',
                            cursor: 'pointer', mx: '2px',
                            backgroundColor: '#fff', width: 40, height: 40, opacity: .6,
                            ':hover': { opacity: .9 }, zIndex: 999
                        }} justifyContent={'flex-end'}>
                            <CloseIcon sx={{ color: theme.palette.primary.main }} />
                        </Stack>
                        {images.length > 1 &&
                            <Stack direction={'row'} onClick={toNextImage} sx={{
                                cursor: 'pointer',
                                backgroundColor: '#fff', width: 40, height: 40, opacity: .6,
                                ':hover': { opacity: .9 }, pt: 1, pl: 1
                            }} justifyContent={'flex-start'}>
                                <EastIcon sx={{ color: theme.palette.primary.main }} />
                            </Stack>}
                    </Stack>
                </Stack>
            </Backdrop>
        </>
    )
};