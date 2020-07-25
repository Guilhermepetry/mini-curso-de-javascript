const WrapperCharacters = (css, children) => {
    return`
        <div style="${css}">${children}</div>
    `
}