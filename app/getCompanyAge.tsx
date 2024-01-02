import { differenceInYears } from 'date-fns';

export const getCompanyAge = () => {
    const dateNow = new Date()
    const dateStart = new Date(process.env.NEXT_PUBLIC_COMPANY_START_DATE ?? '')
    const yearsDifference = differenceInYears(dateNow, dateStart);

    return yearsDifference

}
