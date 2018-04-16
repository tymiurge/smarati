const chunkArray = (arr, chunkSize) => {
    let results = [];
    for (let i = 0; i <arr.length; i += chunkSize) {
        results.push(arr.slice(i, i + chunkSize))
    }
    return results
}

export { chunkArray }
