/** Throttle a fetch by a given number of milliseconds
 * @example fetch_throttled( 'https://example.com', { mode: 'no-cors' }, 2000 )
 * @param ...params - last param = number of milliseconds to delay, other params to be passed through to "normal" fetch()
 * @returns "normal" fetch promise with ...params
 */
export const fetch_throttled = async function( ...params ) {
  if( params.length < 2 ) throw SyntaxError( 'fetch_throttled: Excepts at least two arguments' );
  const delay = params.pop();
  if( ! Number.isInteger( delay ) ) throw SyntaxError( 'fetch_throttled: No delay parameter found or parameter is not an integer' );
  console.warn( `=> fetch_throttled: Delaying by ${ delay } milliseconds ...` );
  await new Promise( resolve => setTimeout( resolve, delay ) );
  return fetch( ...params );
}
