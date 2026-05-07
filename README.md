###### JavaScript

# fetch throttled

Throttle a fetch by a given number of milliseconds.

Very helpful to imagine the look and feel of an app without a developer's high end connectitvity. DevTools let you simulate slow networks, this maximum simple helper here lets you define slow-downs from within testing or demo scripts.

## Installation

Pick for your preferred package manager:

```shell
  npm i hh-lohmann/fetch-throttled
```

```shell
  pnpm i hh-lohmann/fetch-throttled
```

```shell
  yarn add hh-lohmann/fetch-throttled
```

```shell
  bun i hh-lohmann/fetch-throttled
```

## Usage

```js
  import { fetch_throttled } from fetch-throttled

  // throttle fetch by 2 seconds
  fetch_throttled( 'https://example.com', 2000 )
  .then( res => ... )
  .catch( err => console.error( err ) )

    // throttle fetch with options by 2 seconds
  fetch_throttled( 'https://example.com', { mode: 'no-cors' }, 2000 )
  .then( res => ... )
  .catch( err => console.error( err ) )
```

## Syntax

```js
  fetch_throttled( ...fetch args..., delay )
```

**Parameters**

* fetch args
  : "Normal" [fetch parameters](#mdn-fetch-parameters) with or without optional ones. The little helper here just looks at the **last** parameter, not at the second / third etc.

* delay
  : Number of milliseconds to throttle the fetch. Must be the **last** parameter, not the second / third etc.


### Return value

A "normal" fetch promise.


### Exceptions

SyntaxErrors on wrong parameters. Other exceptions should be [those of normal "fetch"](#mdn-fetch-exceptions)


## Demo

<!-- ! HTML demo: dev vs. release switch
  * GitHub repo view does not render HTML, so a GitHub Pages view is linked
    * NB: GitHub Pages allows to maintain a single instance of the HTML demo file in the repo
  * In dev a GitHub Pages view would require a Pages build for any change to check instead of live reloading, so JavaScript is utilized here to detect a dev environment and reroute the link to the local repo instance
    * NB: JavaScript is stripped off in GitHub repo view
    * "dev environment" is defined by using "localhost" or a numerical ID as hostname 
      * NB RegEx: `.replace( /\d/g, '' ).replaceAll( '.', '' )` instead of `location.hostname.replace( /[\d\.]/g, '' )` to avoid `[]` which may mislead Markdown parsers to read it as link syntax
  * Unfortunately GitHub repo view displays "<script>" tags and their contents as literal content (for security), so the JavaScript here has to be pressed into an "onclick"
-->
See <a aria-description="Release vs. Dev switch = GitHub Pages vs. local file" href="https://hh-lohmann.github.io/fetch-throttled/demo.html" onclick="if( location.hostname.replace( /\d/g, '' ).replaceAll( '.', '' ) === '' || location.hostname === 'localhost' ){ this.href='./demo.html'; alert( 'Dev environment detected - switching to local version' ); }">demo.html</a>


## References

###### mdn-fetch-exceptions
  * [MDN: Window: fetch() method: Exceptions](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#exceptions)

###### mdn-fetch-parameters
  * [MDN: Window: fetch() method: Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#parameters)
