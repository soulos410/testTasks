function task7() {
    const resultDictionary = [];
    const charCodeA = 65;
    const charCodeZ = 91;

    for (let i = charCodeA; i < charCodeZ; i++) {
        resultDictionary.push(String.fromCharCode(i));
    }
    return resultDictionary;
}
