import { isNotEmpty, maxLength, minLenghtArray, isArrayOfNumbers, isNumber } from "../library/validator.js";

export const formGroupConfig = {
    "first-name": [isNotEmpty, maxLength(16)],
    "last-name": [isNotEmpty, maxLength(20)],
    "age": [isNotEmpty, isNumber],
    "marks": [isNotEmpty, isArrayOfNumbers,minLenghtArray(5)]
};