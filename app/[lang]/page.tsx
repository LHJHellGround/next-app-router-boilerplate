import React from 'react';
import { getDictionary } from '@config/dictionaries/get-dictionary';
import { Locale } from 'i18n-config';

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      lang page {lang} / {dict.products.cart}{' '}
    </div>
  );
}
