function addAndPrint(n1: number, n2: number, cb: (result: number) => void) {  // void means we will ignore any return value
    const result = n1 + n2
    cb(result)
}

addAndPrint(10, 20, (result) => {
    console.log(result)
})