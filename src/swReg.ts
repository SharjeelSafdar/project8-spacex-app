const registerSW = () => {
    if (!!navigator.serviceWorker) {
        navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`)
            .then( reg => console.log(`Service worker registered in scope: ${reg.scope}`) )
            .catch( error => console.log(`Error registering service worker: ${error}`) )
    }
}

export default registerSW;