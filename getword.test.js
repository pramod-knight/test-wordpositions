const getWordPos = require('./index');

describe('Test cases to check words present in string and return position', () => {
    test('should return index value 5 of match word', () => {
        expect(getWordPos("is","this is a string")).toBe(5)
    })
      
    test('should return index value 8 of match word', () => {
        expect(getWordPos("a","this is a string")).toBe(8)
    })
      
    test('should return index value 10 of match word', () => {
        expect(getWordPos("string","this is a string")).toBe(10)
    })
      
    test('should return -1 ', () => {
        expect(getWordPos("not","this is a string")).toBe(-1)
    });

})

