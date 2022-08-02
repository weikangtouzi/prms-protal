import React from 'react'
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {getCssText} from '@/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
         	<meta anem='viewport' content={'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
