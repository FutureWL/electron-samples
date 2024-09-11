window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, value) => {
        const element = document.getElementById(selector);
        if (element)element.innerText = value
    }

    for (const dependency of['chrome','node','electron']){
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
})