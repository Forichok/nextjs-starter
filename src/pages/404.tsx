import React from 'react';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <h1>404 - Страница не найдена</h1>
      <Link href="/">
        <a>На главную</a>
      </Link>
    </>
  );
}
