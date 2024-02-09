import { ActionType } from '@/app/types/ActionType';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import useAxios from 'axios-hooks';
import { Controller, UseFormReturn } from 'react-hook-form';

type Props = {
    form: UseFormReturn<any, any, undefined>
    url: string;
    name: string;
    label: string;
    required?: boolean;
}

export const AsyncAutocomplete = ({ form, url, name, label, required }: Props) => {
    const [{ data, loading, error: optionsError }, get] = useAxios<ActionType>(
        {
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/${url}`
        },
    )

    const asyncGet = async () => {
        try {
            const response = await get();
            return response
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Controller
            name={name}
            control={form.control}
            defaultValue={form.getValues()}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    onClick={() => asyncGet()}
                    size='medium'
                    loading={loading}
                    noOptionsText={"Pasirinkimų nėra"}
                    loadingText={"Kraunama..."}
                    disablePortal
                    getOptionLabel={(o) => `${o.attributes?.singularTitle ?? o.attributes?.title ?? ''}`}
                    onChange={(_event, value) => field.onChange(value)}
                    isOptionEqualToValue={(option, value) => option?.attributes?.value === value?.attributes?.value}
                    options={data?.data ?? []}
                    renderInput={(params) => (
                        <TextField
                            required={required}
                            error={!!error}
                            helperText={error?.message ?? optionsError?.message}
                            label={label}
                            name={name}
                            inputRef={ref}
                            {...params}
                        />
                    )}
                />
            )}
        />
    )
}
