# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Before I refactored the code I wrote notes to completely understand what the code is doing, and I read the crypto documentation to understand how crypto was contributing to the code's functionality. I tested the behavior of the function (console logging) before refactoring and wrote unit tests based on my findings, during refactoring I leaned on those unit tests to produce the same functionality as the original code.

For the first pass that checks if the event is a truthy value, I opted to use an if/else statement that first checks whether the event is present, but the event.partitionKey is not. If the conditions are satisfied then the function will stringify the event and reassign the candidate as normal. The else if statement checks to see if both the event and the event.partitionKey are truthy, and assigns the partitionKey value to the candidate variable as normal.

The second pass is another if/else which first checks if candidate is truthy. If not,
then the candidate is assigned the TRIVIAL_PARITION_KEY value and the function proceeds (since the TRIVIAL_PARTITION_KEY value is already a string, it never satisifes the if else. It also never satisfied the following MAX_PARTITION_KEY_LENGTH condition). If the candidate is present (not explicity written in the code) and it's type is not "string", then it is stringified to a JSON readable string and the function proceeds. No changes were made to the final check which compares the lengths of the candidate value and the MAX_PARTITION_KEY_LENGTH. The if/else statements help reduce the amount of nested conditionals in the code, making it more readable.
