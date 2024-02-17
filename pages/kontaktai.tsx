import { PageResponseType } from '@/app/types/PageType';
import { getPage } from '@/app/utils'
import { ContactsPage } from '@/components/pages/contacts/ContactsPage'
import { GetServerSideProps } from 'next'

type Props = {
  page?: PageResponseType;
}

export default function Contacts({ page }: Props) {
  return (
    <ContactsPage page={page?.data} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const page = (await getPage('contact-page', 'populate=deep')) ?? null
  return {
    props: {
      page: page ?? null
    }
  }
}
