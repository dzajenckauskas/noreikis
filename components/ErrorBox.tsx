// import { ServerError } from "@apollo/client";
import React from "react";
// import { ErrorsType } from "@idcms/store";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

type Props = {
  errors?: string | any;
}

type ValidationErrorsType = {
  validation: {
    [name: string]: any[];
  }
}

const ValidationErrors = ({ validation }: ValidationErrorsType) => {
  const renderErrors = Object.entries(validation).map(([key, value]) => {
    const renderValue = value?.map(o => (
      <Typography variant="caption" color={'error'} key={key}>{o}</Typography>
    ))

    return (
      <Typography variant="caption" color={'error'} key={key}>{renderValue}</Typography>
    )
  })

  return (
    <>
      {renderErrors}
    </>
  )
}

const ErrorBox = ({ errors }: Props) => {
  if (typeof errors === 'string') {
    return (<Typography variant="caption" color={'error'} className={'errorMessage'}>{errors}</Typography>)
  }

  const renderGraphQLErrors = errors?.graphQLErrors?.map((error: any) => {
    return (
      <Typography variant="caption" color={'error'} key={error.message} className={'errorMessage'}>
        {!error.extensions?.validation && <Typography variant="caption" color={'error'}>{error.message}</Typography>}
        {error.extensions?.validation && <ValidationErrors validation={error.extensions?.validation} />}
      </Typography>
    )
  })

  // const serverError = (errors?.networkError as ServerError)?.result

  const renderNetworkError = !errors?.networkError ? null :
    (<Typography variant="caption" color={'error'} className={'errorMessage'}>
      <Typography variant="caption" color={'error'}>{errors?.networkError.name}: {errors.networkError.message}</Typography>
      {/* <Typography variant="caption" color={'error'}>{`${serverError}`}</Typography> */}
    </Typography>)

  return (
    <Stack sx={{ mt: 2 }}>
      <Typography variant="caption" color={'error'} className={'errorMessage'}>{renderNetworkError}</Typography>

      {errors?.message && !errors?.graphQLErrors && <Typography variant="caption" color={'error'} className={'errorMessage'}>{errors?.message}</Typography>}

      {errors?.graphQLErrors && <Typography variant="caption" color={'error'} className={'errorMessage'}>{renderGraphQLErrors}</Typography>}
    </Stack>
  )

}

export default ErrorBox;
