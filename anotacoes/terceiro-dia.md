# Anotações 

## 3º Dia 

Nessa aula foi criada dois novos componentes da nossa aplicação.

* Componente das imagens:
```javascript
const evil = Character`
    width: 20%;
    ${pathEvil}
`
```

* Componente que faz o invólucro das imagens:
```javascript
const wrapperCharacters = WrapperCharacters`
display: flex;
justify-content: space-evenly;
${evil + evil + evil}
`
```