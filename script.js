const loaderWrapperEl = document.querySelector('.loader-wrapper')

setTimeout(() => {
    loaderWrapperEl.style.opacity = '0'
}, 2500);

setTimeout(() => {
    loaderWrapperEl.style.display = 'none'
}, 2700)