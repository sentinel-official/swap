import { bech32 } from 'bech32';

export const validateAmount = (value) => {
    return new Error('');
};

export const validateToAddress = (value) => {
    try {
        bech32.decode(value);
        return new Error('');
    } catch (e) {
        return e;
    }
};
