//@ts-check

/** Throttle a fetch by a given number of milliseconds
 * @example fetchThrottled( 'https://example.com', { mode: 'no-cors' }, 2000 )
 * @param params - list of params, last param = number of milliseconds to delay (0 or greater), other params to be passed through to "normal" fetch()
 * @returns "normal" fetch promise with ...params
 * @type{ ( ...params:any ) => Promise<any> }
 */
export const fetchThrottled = async function( ...params ) {
  if( params.length < 2 ) throw SyntaxError( 'fetchThrottled: Excepts at least two arguments' );
  const delay = params.pop();
  if( ! Number.isInteger( delay ) ) throw SyntaxError( 'fetchThrottled: No delay parameter found or parameter is not an integer' );
  if( delay < 0 ) throw SyntaxError( 'fetchThrottled: delay parameter must be 0 or greater' );
  console.warn( `=> fetchThrottled: Delaying by ${ delay } milliseconds ...` );
  await new Promise( resolve => setTimeout( resolve, delay ) );
  //@ts-ignore / NB: trying to type spread arguments is a rabbit hole to deep here
  return fetch( ...params );
}
