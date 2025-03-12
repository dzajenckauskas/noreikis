import { ImageType } from '@/app/types/ImageTypes';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import { East, West, Fullscreen, Close } from '@mui/icons-material';
import { Button, Stack, Backdrop } from '@mui/material';
import Image from "next/image";
import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { theme } from '../Theme';

type Props = {
    images?: ImageType[];
    photos: string[];
};

export const ImageCarousel = ({ images, photos }: Props) => {
    const [openFullscreen, setOpenFullscreen] = useState(false);
    const [activeImage, setActiveImage] = useState<number>(0);
    const imgRef = useRef<HTMLImageElement>(null);

    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

    useEffect(() => {
        document.body.style.overflow = openFullscreen ? "hidden" : "auto";
    }, [openFullscreen]);

    const toNextImage = () => setActiveImage((prev) => (prev + 1) % photos.length);
    const toPreviousImage = () => setActiveImage((prev) => (prev - 1 + photos.length) % photos.length);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") toNextImage();
        if (e.key === "ArrowLeft") toPreviousImage();
        if (e.key === "Escape" && openFullscreen) setOpenFullscreen(false);
    };

    return (
        <Stack ref={imgRef} sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image priority alt="Image" fill style={{ objectFit: "cover" }} src={photos[activeImage] ?? "/fallback-img.jpeg"} />
            {photos.length > 1 && (
                <>
                    <Button onClick={toPreviousImage} sx={{ ...navButtonStyle, left: 10 }}>
                        <West sx={{ color: theme.palette.info.main }} />
                    </Button>
                    <Button onClick={toNextImage} sx={{ ...navButtonStyle, left: 76 }}>
                        <East sx={{ color: theme.palette.info.main }} />
                    </Button>
                </>
            )}
            <Button onClick={() => setOpenFullscreen(true)} sx={{ ...navButtonStyle, right: 10 }}>
                <Fullscreen sx={{ color: theme.palette.info.main, fontSize: 27 }} />
            </Button>
            {openFullscreen && <BackdropGallery images={photos} open={openFullscreen} onClose={() => setOpenFullscreen(false)} />}
        </Stack>
    );
};

const BackdropGallery = ({ images, open, onClose }: { images: string[], open: boolean, onClose: () => void }) => {
    const carousel = useRef<AliceCarousel>(null);
    return (
        <Backdrop sx={{ ...backdropStyle }} open={open} onClick={onClose}>
            <AliceCarousel ref={carousel} disableButtonsControls animationType="fadeout" disableDotsControls infinite items={images.map((url) => (
                <Stack key={url} alignItems={'center'} sx={{ width: '100%', height: '100vh' }}>
                    <Image priority objectFit="contain" fill src={url ?? "/fallback-img.jpeg"} alt={'Gallery image'} />
                </Stack>
            ))} />
            <Stack direction={'row'} spacing={0.25} sx={{ position: 'absolute', bottom: 20 }}>
                <Button sx={controlButtonStyle} onClick={(e) => { e.stopPropagation(); carousel?.current?.slidePrev(); }}>
                    <West sx={{ color: theme.palette.primary.main }} />
                </Button>
                <Button sx={controlButtonStyle} onClick={onClose}>
                    <Close sx={{ color: theme.palette.primary.main }} />
                </Button>
                <Button sx={controlButtonStyle} onClick={(e) => { e.stopPropagation(); carousel?.current?.slideNext(); }}>
                    <East sx={{ color: theme.palette.primary.main }} />
                </Button>
            </Stack>
        </Backdrop>
    );
};

const navButtonStyle = {
    position: 'absolute', bottom: 10, zIndex: 10, opacity: 0.7, backgroundColor: 'rgba(0, 0, 0, 0.9)',
    width: 40, height: 40, ':hover': { opacity: 1, backgroundColor: '#000' }
};

const backdropStyle = {
    flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'fixed', zIndex: 999, width: '100%', height: '100vh'
};

const controlButtonStyle = {
    backgroundColor: '#fff', opacity: 0.9, width: 40, height: 40,
    ':hover': { opacity: 0.6, backgroundColor: '#fff' }
};
