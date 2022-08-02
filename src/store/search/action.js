const change = (text) => {
    console.log(text)
    return {
        type: 'CHANGE',
        payload: text,
    }
}

export {change};