function Character(css, path){
    console.log(path)
    return `
        <img style="${css}" src="${path}"/>
    `
}