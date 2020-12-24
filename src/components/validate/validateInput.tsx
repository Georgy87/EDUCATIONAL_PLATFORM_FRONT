
export type ValidatorsType = (value: string) => string | undefined;
export const requireEmail: ValidatorsType = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
};

export const minLength = (min: number): ValidatorsType  => (value) => {
    return value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined;
}