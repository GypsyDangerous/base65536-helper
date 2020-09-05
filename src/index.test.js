const {encode, decode} = require("./index")
test('bad data to throw an error', () => {
   try{
       encode(() => 10)
   }catch(err){
       expect(err.message).toBe("data of type function is not supported")
   }
});

test("should be able to encode and decord an object", () => {
    const data = {name: "david"}
    const encoded = encode(data)
    const decoded = JSON.parse(decode(encoded))
    expect(decoded).toStrictEqual(data)
})

test("should be able to encode and decord a number", () => {
    const data = 4224
    const encoded = encode(data)
    const decoded = JSON.parse(decode(encoded))
    expect(decoded).toStrictEqual(data)
})

test("should be able to encode and decord a string", () => {
    const data = "david"
    const encoded = encode(data)
    const decoded = decode(encoded)
    expect(decoded).toStrictEqual(data)
})