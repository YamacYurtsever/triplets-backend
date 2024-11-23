export const NAME_REGEX = /^[A-Za-z0-9 ]*$/; // Only letters, number, spaces
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 20;
export const PASSWORD_REGEXES = [/[a-zA-Z]/, /\d/]; // At least one letter, number
export const PASSWORD_MIN_LENGTH = 8;
export const SESSION_EXPIRATION_TIME = 30 * 24 * 60 * 60 * 1000; // 30 days
