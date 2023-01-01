"use strict";

// TODO
const version = 1;


self.addEventListener("install",onInstall);
self.addEventListener("active",onActive);

main().catch(console.error)

/******************** */

async function main(){
    console.log(`Service Worker (${version}) is starting...`);
}

async function onInstall(evt){
    console.log(`Service Worker (${version}) is installed...`);
    self.skipWaiting();
}

 function onActive(evt){
    evt.waitUntil(handleActivation());
}

async function handleActivation(){
 await clients.claim();
  console.log(`Service Worker (${version}) is activated...`);

}