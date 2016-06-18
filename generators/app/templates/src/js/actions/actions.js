export const SAY_HELLO = 'SAY_HELLO';

export function sayHello(message) {
  return {
    type: SAY_HELLO,
    message
  }
}
