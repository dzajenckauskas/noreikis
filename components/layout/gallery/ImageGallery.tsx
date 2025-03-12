import { ImageType } from '@/app/types/ImageTypes';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import EastIcon from '@mui/icons-material/East';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import WestIcon from '@mui/icons-material/West';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { theme } from '../Theme';
import BackdropGallery from './BackdropGallery';
type Props = {
    images?: ImageType[];
    photos: string[];
}
export const ImageCarousel = ({ images, photos }: Props) => {
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
        if (photos) {
            const max = photos.length - 1
            setActiveImage((activeImage + 1) > max ? 0 : activeImage + 1)
        }
    }
    const toPreviousImage = () => {
        if (photos) {
            const max = photos.length - 1
            setActiveImage((activeImage - 1) < 0 ? max : activeImage - 1)
        }
    }

    function handleTouchEnd() {
        if (photos)
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
    // const imgRef = useRef(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

    // const thumbs = photos?.map((item, i) => {
    //     // const imageSrc = item.attributes?.formats.thumbnail?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.formats.thumbnail?.url}` : undefined
    //     return (
    //         <Stack key={i} id={i.toString()}
    //             sx={{ position: 'relative', width: 50, height: 50, ':hover': { opacity: .9 }, opacity: activeImage === i ? .9 : .6, cursor: 'pointer' }}>
    //             <Image onClick={() => handleSelectImage(i)}
    //                 priority alt={''} sizes='10vw'
    //                 width={50} height={50} style={{
    //                     objectFit: 'cover'
    //                 }} src={item ?? '/'} />
    //         </Stack>
    //     )
    // })
    // console.log(imgRef, imgRef.current?.naturalWidth);

    return (
        <>
            {/* TODO: add img alt text from estate data */}

            <Stack ref={imgRef}
                sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: '100%' }}>
                <Image priority alt={photos[activeImage] ?? ''}
                    fill style={{ objectFit: "cover", objectPosition: 'top ' }}
                    src={photos[activeImage] ?? "/assets/images/fallback-img.jpeg"} />
                {photos.length > 1 && <>
                    <Button variant='contained' color={'primary'} onClick={toPreviousImage} sx={{
                        minWidth: '40px', boxShadow: 'none !important ',
                        opacity: .6, ':hover': { opacity: .9, backgroundColor: '#000 !important' },
                        width: 40, height: 40, position: 'absolute',
                        left: 0, bottom: 0
                    }}>
                        <WestIcon sx={{ width: 20, color: theme.palette.info.main }} />
                    </Button>

                    <Button variant='contained' onClick={toNextImage} sx={{
                        minWidth: '40px', boxShadow: 'none !important ',
                        opacity: .6, ':hover': { opacity: .9, backgroundColor: '#000 !important' },
                        width: 40, height: 40, position: 'absolute',
                        left: 42, bottom: 0
                    }}>
                        <EastIcon sx={{ color: theme.palette.info.main }} />
                    </Button>
                </>}
                <Button variant='contained' onClick={handleToggle} sx={{
                    minWidth: '40px', boxShadow: 'none !important ',
                    opacity: .6, ':hover': { opacity: .9, backgroundColor: '#000 !important' },
                    width: 40, height: 40, position: 'absolute',
                    right: 0, bottom: 0
                }}>
                    <FullscreenIcon sx={{ color: theme.palette.info.main, fontSize: 27 }} />
                </Button>
            </Stack>

            <BackdropGallery images={photos} onClose={handleClose} open={openFullscreen} />
        </>
    )
};
