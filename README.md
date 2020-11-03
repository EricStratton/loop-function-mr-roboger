# Loop Function - Mr. Roboger

### _Use looping to return altered user input, vs: 10/20/2020_

### _Created by: Eric Stratton_

## Description

This webpage attempts to take a user number input and alter it using loops then return the user a string which contains all the numbers up till their input including string inputs for numbers containing the digits: 1, 2, 3. 

## Setup/Instillation

### Requirements: 

- Internet browser
- Code editor if you wish to view/edit the code

### Download: 

- Download this repository by clicking the green 'Code' icon and selecting download zip
- Use your favorite zip.file opener to extract files to your local device
- Click `index.html` to open webpage in your default browser

### Terminal:

- Open command terminal on local device
- Navigate to desktop in terminal using `$ cd desktop`
- Copy repository link by clicking on green 'Code' icon and clicking the clipboard to the right of the url
- Use command `$ git clone {specific_repository_URL}`
- From desktop, run command `$ cd {newly-downloaded-directory}` to navigate to the installed directory
- Run command `code .` to open directory in default code editor
- Rick click `index.html` and select `Copy File Path`
- Paste in browser
- Alternatively: open using a Live Server plugin in your code edior

## Specs

Describe: beepBoop ()

Test: "It will return an array with only 0 if the user enters 0"
`Expect(beepBoop(0).toEqual([0]));`

Test: "It will return full range of numbers from 0 up to user inputted number"
`Expect(beepBoop(7).toEqual([0, 1, 2, 3, 4, 5, 6, 7]));`

Test: "It will replace all digits of number containing a 1 with "Beep!"
`Expect(beepBoop(3).toEqual([0, "Beep!", 2, 3]));`

Test: "It will replace all digits of number containing a 2 with "Boop!"
`Expect(beepBoop(3).toEqual([0, "Beep!", "Boop!", 3]));`

Test "It will replace all digits of a number containing a 3 with "Will you be my neighbor?"
`Expext(beepBoop(3).toEqual([0, "Beep!", "Boop!", "Will you be my neighbor?"]));`

## Known Bugs

Program is not currently functional

## Support & Contact Details

Do not hesistate to contact me at:

<strattonericj@gmail.com>

## Technologies

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- Git
- GitHub

## Licensing

Copyright (c) 2020 Eric Stratton

This software is licensed under the MIT license
