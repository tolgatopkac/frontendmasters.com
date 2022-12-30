# Building a PWA
A PWA is typically based on three main components. 
- Web App
- Web App Manifest 
- Service Worker

How do you know if a URL is a PWA ? 
**Lighthouse**
- Open source, maintained by Chrome
- Available as a CLI and within DevTools
- It tests your website against PWA **criteria**
- Criteria may change with time

If it passes the criteria
- It's officially a PWA
- Installation will be possible
- A hint for the user may appear
- Future SEO and discoverability
- Content can get out of the browser's UI

## Creating a Web App Manifest
Manifest is the first step to actually make a PWA, it's called Web app manifest.
File name : `app.webmanifest` or `manifest.json` 

    <link  rel="manifest" href="app.webmanifest">
![enter image description here](https://i.ibb.co/hL5sdDW/12.png)

`user-select:none;`
`-webkit-user-select:none`