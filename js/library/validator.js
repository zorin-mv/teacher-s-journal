import toArrayFn from '../helpers/to-array-fn.js'

export const Validator = {
    errors: {},
    validators: {
        isNotEmpty: {
            validate(value) {       
                return value !== "";
            },
            message: "This field should not be blank",
            errorType: 'required'
        },

        isNumber: {
            validate(value) {       
                return !isNaN(value);
            },
            message: "This field should be a number",
            errorType: 'number'
        },

        isArrayOfNumbers: {
            validate(value) {
                value = toArrayFn(value);  
                if (Array.isArray(value) && value.every((e) => !isNaN(e))) {
                    return value;
                }
            },
            message: "This field should be a list of numbers separated ',' or space ",
            errorType: 'listOfNumbers'
        },

        maxLength(length) {
            return {
                validate(value) {       
                    return value.length <= length;
                },
                message: `This field should not be more then ${length}`,
                errorType: 'maxLength'
            }
        },

        minLenghtArray(length) {
            return {
                validate(value) {    
                        value = toArrayFn(value);
                        return value.length >= length ||
                        Validator.errors.marks !== undefined;
                },
                message: `This list of marks should not be less then ${length}`,
                errorType: 'minLengthArray'
            }
        }
    },
    validate(config, form) {
        if(!(form instanceof HTMLFormElement)) {
            throw {
                name: 'ValidationError',
                message: 'You should pass HTML Form'
            }
        }
        this.errors = {};

        let elements = form.elements;

        for( const [inputName, validators] of Object.entries(config)) {

            if(!validators?.length) {
                throw {
                    name: 'ValidationError',
                    message: `No handler to validate ${inputName}`
                }
            }

            if(!elements[inputName]) {
                throw {
                    name: 'ValidationError',
                    message: `${inputName} does not exist in the ${form.name}`
                } 
            }
            
            let value = elements[inputName].value;

            validators.forEach(({validate, message, errorType}) => {
                
                if(!validate(value)) {
                    this.errors[inputName] = {...this.errors[inputName], [errorType]: message};
                }
            })
        }

        return this.hasErrors();
    },

    hasErrors() {
        return !Object.keys(this.errors).length != 0;
    }
}

export const isNotEmpty = Validator.validators.isNotEmpty;
export const maxLength = Validator.validators.maxLength;
export const isNumber = Validator.validators.isNumber;
export const minLenghtArray = Validator.validators.minLenghtArray;
export const isArrayOfNumbers = Validator.validators.isArrayOfNumbers;