import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'A100'}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/*meta*/}
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#58575b" />
    <meta name="msapplication-navbutton-color" content="#ffffff"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />

    {/*favicon*/}
    <link rel="author" href="/static/humans.txt" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="manifest" href="/static/site.webmanifest" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>

    {/*OG tags*/}
    <meta property="og:image" content="og-image.jpg" />
    <meta property="og:image:height" content="447" />
    <meta property="og:image:width" content="854" />
    <meta property="og:title" content="A100" />
    <meta property="og:description" content="A100 Constructror" />
    <meta property="og:url" content="http://a100.com" />
  </NextHead>
)

Head.propTypes = {
  title: string,
}

export default Head
