## Specs

Describe: beepBoop ()

Test: "It will return an array with only 0 if the user enters 0"
Expect(beepBoop(0).toEqual([0]))

Test: "It will return full range of numbers from 0 up to user inputted number"
Expect(beepBoop(7).toEqual([0, 1, 2, 3, 4, 5, 6, 7]))