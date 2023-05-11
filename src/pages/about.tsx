import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export default function About() {


  const { locale } = useRouter()

  const { t } = useTranslation('about')
  return (<>


    <div>about</div>
    <h1>{t('hello world')}</h1>
    <Link href="/mypage">
      Go to mypage
    </Link>
  </>

  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
      // Will be passed to the page component as props
    },
  }
}