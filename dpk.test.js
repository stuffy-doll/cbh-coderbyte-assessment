const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when the event has a partitionKey.", () => {
    const event = { partitionKey: 'Hello' };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("Hello");
  });

  it("Returns a long hash when the input value is a string.", () => {
    const input = "Hello";
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe("3c656c3eedd179e0d00251b18236f8b68fad08b4a2e274c83d526f60010e05aded58233839651dee6cf480de3c4bbd1622f7d56f3ee9253a51b0295b8ca9dc95")
  });

  it("Returns string values for non-string paritionKey.", () => {
    const inputOne = { partitionKey: [] };
    const inputTwo = { partitionKey: 5 };
    const inputThree = { partitionKey: true };
    // const trivialKeyOne = deterministicPartitionKey(inputOne);
    // const trivialKeyTwo = deterministicPartitionKey(inputTwo);
    const trivialKeyThree = deterministicPartitionKey(inputThree);
    // expect(trivialKeyOne).toBe("[]");
    // expect(trivialKeyTwo).toBe("5");
    expect(trivialKeyThree).toBe("true");
  })
});
