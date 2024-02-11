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
    const [{ data, loading, error: listError }, get] = useAxios<ActionType>(
        {
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/${url}`,

        },
        { manual: true }
    );


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
            defaultValue={form.getValues(name)}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    size='medium'
                    loading={loading}
                    noOptionsText={"Pasirinkimų nėra"}
                    loadingText={"Kraunama..."}
                    disablePortal
                    onOpen={() => !data && asyncGet()}
                    value={form.getValues(name)}
                    getOptionLabel={(o) => `${o.attributes?.singularTitle ?? o.attributes?.title ?? ''}`}
                    onChange={(_event, value) => field.onChange(value)}
                    isOptionEqualToValue={(option, value) => option?.attributes?.value === value?.attributes?.value}
                    options={data?.data ?? []}
                    renderInput={(params) => (
                        <TextField
                            className={!!error?.message ?
                                "animate__animated animate__headShake"
                                : ""}
                            required={required}
                            error={!!error}
                            helperText={error?.message ?? listError?.message}
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
};

