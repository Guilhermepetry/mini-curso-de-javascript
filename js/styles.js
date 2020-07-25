const styles = `
<style>
* {
    margin: 0;
    padding: 0;
    border: none;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #212121;
}

#root {
    box-sizing: border-box;
    font-family: 'Archivo Black', sans-serif;
    background-color: #3B3B98;
    width: 40vw;
    min-width: 600px;
    height: 50vh;
    min-height: 500px;
    text-align: center;
    padding-top: 1.5rem;
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', styles)