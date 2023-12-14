export interface Validation {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export function validate(userInput: Validation) {
    let isValid = true
    if(userInput.required) {
        isValid = isValid && userInput.value.toString().length > 0
    }
    if(userInput.minLength != null && typeof userInput.value === 'string') {
        isValid = isValid && userInput.value.length > userInput.minLength
    }
    if(userInput.maxLength != null && typeof userInput.value === 'string') {
        isValid = isValid && userInput.value.length < userInput.maxLength
    }
    if(userInput.min != null && typeof userInput.value === 'number') {
        isValid = isValid && userInput.value > userInput.min
    }
    if(userInput.max != null && typeof userInput.value === 'number') {
        isValid = isValid && userInput.value < userInput.max
    }
    return isValid
}