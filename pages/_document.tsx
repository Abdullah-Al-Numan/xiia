import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta name="description" content="XIIA: Leading IT company offering innovative solutions like StreamGreen, SoundMade, and BringAndClean. Expert in mobile app, website, desktop app development, UI/UX design, and comprehensive maintenance services." />
        <meta name="robots" content="index, follow" />
        <meta name='tags' content='web, app, UI/UX design, maintenance, company, XIIA, StreamGreen, SoundMade, BringAndClean' />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
