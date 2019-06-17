const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
});
test('should say Hello someName!', () => {
    const result = generateGreeting('mel')
    expect(result).toBe('Hello mel!')
});
test('should say Hello someName!', () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
});