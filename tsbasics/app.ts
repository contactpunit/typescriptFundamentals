function combine(n1: number | string, n2: number | string) {
    let result
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2
    } else {
        result = n1.toString() + n2.toString()
    }
    console.log(result)
    return result
}

const combinedAges = combine(10, 20)
const combinedNames = combine('Punit', 'Jain')