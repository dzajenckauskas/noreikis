import { Stack } from '@mui/material'
import React from 'react'

type Props = {
    bgColor?: string;
    scale?: string;
    mr?: number | string;
}

export const AruodasIcon = ({ bgColor, scale, mr }: Props) => {
    return (
        <Stack sx={{ width: 22, pb: .5, mr: mr ? mr : -.3 }}>
            <svg id="Layer_1" data-name="Layer 1" transform={scale ? `scale(${scale})` : ''} fill={bgColor ?? '#000'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path d="M10.7538,9.6764h-.7276v1.0405h.7276v2.8788a.9937.9937,0,0,0,1.0186.9712h.6912c.0363,0,.7275-.0347.7639-.0347l.4-.0347v-.9018h-.4365a.4862.4862,0,0,1-.5093-.4856V10.7169h.9458V9.6764h-.9458V8.3237h-1.928Z" /><rect x="7.2615" y="8.0115" width="2.0008" height="6.5554" /><rect x="3.9512" y="13.0408" width="2.1827" height="1.5261" /><path d="M16,0H2A2,2,0,0,0,0,2V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V2A2,2,0,0,0,16,0ZM14.5735,15.0178H3.2964v-7.11L8.9349,2.4968l1.5279,1.4567V2.74h1.9644V5.8264l2.1463,2.0464Z" /></svg>
        </Stack>

    )
}
