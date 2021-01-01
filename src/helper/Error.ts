
export const ErrorMessageWrongType = (type: string): Error => {
    return new Error(`Wrong object type, expected type is ${type}`);
};

export const ErrorMessage = (message: string): Error => {
    return new Error(`${message}`);
}