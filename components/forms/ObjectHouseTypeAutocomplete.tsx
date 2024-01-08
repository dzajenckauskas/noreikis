import { ActionType } from '@/app/types/ActionType';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import useAxios from 'axios-hooks';
import React from 'react'
import ErrorBox from '../ErrorBox';
import { Controller, UseFormReturn } from 'react-hook-form';

type Props = {
    form: UseFormReturn<any, any, undefined>
}

export const ObjectHouseTypeAutocomplete = ({ form }: Props) => {
    const [{ data, loading, error }, get] = useAxios<ActionType>(
        {
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/house-types`
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
        // <>
        //     <Autocomplete
        //         loading={loading}
        //         value={form.getValues('houseType.attributes.value')}
        //         size="small"
        //         fullWidth
        //         disablePortal
        //         options={data?.data ?? []}
        //         onClick={() => asyncGet()}
        //         onChange={(_e, v) => {
        //             console.log(v)
        //             if (v)
        //                 form.setValue('houseType', v)
        //         }}
        //         getOptionLabel={(o) => `${o.attributes.title ?? ''}`}
        //         renderInput={(params) => <TextField {...params} required label="Pastato tipas" />}
        //     />
        //     {error && <ErrorBox errors={error} />}

        // </>
        <Controller
            name="houseType"
            control={form.control}
            defaultValue={[]}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    onClick={() => asyncGet()}
                    size='small'
                    loading={loading}
                    noOptionsText={"Pasirinkimų nėra"}
                    loadingText={"Kraunama..."}
                    // disableClearable
                    disablePortal
                    // filterSelectedOptions
                    // getOptionDisabled={(option) => option.disabled}
                    getOptionLabel={(o) => `${o.attributes?.title ?? ''}`}
                    onChange={(_event, value) => field.onChange(value)}
                    isOptionEqualToValue={(option, value) => option?.attributes?.value === value?.attributes?.value}
                    options={data?.data ?? []}
                    renderInput={(params) => (
                        <TextField
                            required
                            error={!!error}
                            helperText={error?.message}
                            label="Pastato tipas"
                            name="houseType"
                            inputRef={ref}
                            {...params}
                        />
                    )}
                />
            )}
        />
    )
}
