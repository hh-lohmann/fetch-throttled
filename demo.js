// @ts-check

import { fetch_throttled } from './index.js'

// fetch_throttled( 'https://example.com', 5000 )
// .then( res => res.text() )
// .then( res => console.log( 'HUGGA', res ) )

fetch_throttled( 'https://example.com', { mode: 'no-cors' }, 2000 )
.then( res => {
  const my_env = res.status === 0 ? 'browser (respecting CORS)' : 'runtime like Node or Bun (ignoring CORS)'
  console.log( `Script is running in a ${ my_env }` )
})
.catch( err => console.error( err ) )
