import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UseFormReturn } from 'react-hook-form';
import { theme } from '../layout/Theme';

type Props = {
    name: string;
    lable: string;
    type?: "number" | "text";
    size?: "medium" | "small";
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    required?: boolean;
    fullWidth?: boolean;
    form: UseFormReturn<any, any, undefined>
}

export const FormTextField = ({ multiline, rows, fullWidth, disabled, size = "medium", type = "text", lable, name, required, form }: Props) => {
    const { register, formState: { errors } } = form
    return (
        <TextField disabled={disabled} size={size}
            type={type}
            label={<Typography component={FormLabel}
                required={required}
                variant='body1'
                color={errors?.name?.message ? 'error' : theme.palette.primary.dark}>
                {lable}
            </Typography>}
            rows={rows}
            multiline={multiline}
            fullWidth={fullWidth}
            {...register(name)} name={name}
            error={!!errors?.[name]?.message}
            helperText={errors?.[name]?.message && `${errors?.[name]?.message}`}
        />
    )
}
