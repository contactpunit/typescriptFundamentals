let printOutput: Function = (n1: number, n2: number) => {
    const result = n1 + n2
    console.log('Result: ' + result);
}

const result = printOutput(10, 20);

function add(n1, n2) {
    return n1 + n2
}

let FuncType: (a: number, b: number) => number;

FuncType = add
