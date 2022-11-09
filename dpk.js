const crypto = require("crypto");

const event = {
  partitionKey: true
};

exports.deterministicPartitionKey = (event) => {
  // Variable TRIVIAL_PARTITION_KEY declared/initialized a value of "0" (string)
  const TRIVIAL_PARTITION_KEY = "0";
  // Variable MAX_PARTITION_KEY_LENGTH declared/initialized a value of 256 (number)
  const MAX_PARTITION_KEY_LENGTH = 256;
  // Variable data declared
  let data;
  // Variable candidate declared
  let candidate;

  // If the event is truthy AND the event.partitionKey is falsey
  if (event && !event.partitionKey) {
    // Stringify the event and assign it to data variable
    data = JSON.stringify(event);
    // Create a hash using the data variable and assign it to the candidate variable
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    // Else if the event is truthy AND the event.partitionKey is truthy
  } else if (event && event.partitionKey) {
    // Assign the event.partitionKey to the candidate variable
    candidate = event.partitionKey;
  };

  // // If event value is truthy
  // if (event) {
  //   // If event.partitionKey value is truthy
  //   if (event.partitionKey) {
  //     // Assign candidate to equal event.partitionKey
  //     candidate = event.partitionKey;
  //   } else {
  //     // Variable data declared/initialized as JSON string
  //     const data = JSON.stringify(event);
  //     // Create a hash from the crypto library and assign it to the candidate variable
  //     candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //   }
  // }

  console.log("CANDIDATE:: ", candidate)

  // If candidate is falsey
  if (!candidate) {
    // Reassign candidate to TRIVIAL_PARTITION_KEY
    candidate = TRIVIAL_PARTITION_KEY
    // Else If the data type of candidate is not string
  } else if (typeof candidate !== "string") {
    // Stringify candidate value
    candidate = JSON.stringify(candidate);
  }
  // // If candidate value is truthy
  // if (candidate) {
  //   // If candidate value type is not a string
  //   if (typeof candidate !== "string") {
  //     // Reassign candidate value to a JSON string comprised of the present data
  //     candidate = JSON.stringify(candidate);
  //   }
  // } else {
  //   // If candidate value isn't truthy, reassign candidate value to TRIVIAL_PARTITION_KEY
  //   candidate = TRIVIAL_PARTITION_KEY;
  // }

  // If is truthy AND candidate value exceeds the MAX_PARTITION_KEY_LENGTH value
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    // Create a hash from the crypto library and assign it to the candidate value
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

/*
Crypto methods used
- .createHash(algo, [options]) Creates and returns a hash object
- .update(value) Updates internal state of the HMAC algorithm
- .digest(encoding_type) Defines the encoding type.
*/

/*
Inputs the function accepts...
- No input, returns a "0"
- Non-object inputs, returns a hash string
- Object input with partitionKey property, returns stringified value of partitionKey (Unsure if this is the intended behavior, instructions ask not to modify functionality)
*/



// console.log(crypto.createHash("sha256", "hello").digest('hex'));
console.log(this.deterministicPartitionKey(event))
