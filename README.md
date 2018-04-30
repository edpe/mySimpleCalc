# mySimpleCalc

This is a really simple ios/android calculator app that I built to learn React-Native.

Currently the app is at the MVC stage.

## MVC
These are the user stories for MVC:

```
As a user
So that I can type numbers into my phone
I want to be able to press numbered buttons on my phone screen
```
```
As a user
So that I can calculate the sum of two numbers
I want to be able to use an 'add' button to see the sum of two numbers on the screen
```
```
As a user
So that I can perform any calculation of two numbers
I want to be able to also subtract, divide and multiply numbers
```
```
As a user
So that I can make another calculation
I want to be able to clear the screen and any pending calculations
```

## Version 2

```
As a user
So that I can perform calculations on a total
I want to be able to store a number in memory and use it in another calculation
```

```
As a user
So that I can input floats
I want to be able to use decimal points in the numbers I enter
```
## Version 3

```
As a user
So that I can perform a continuous series of calculations
I want to be able to perform calculations involving any amount of numbers
```

### Approach for version 2 & 3

I plan to use the state of the Calc component to store a number. The layout will need to be changed to include memory save and recall buttons.

I should be able to add decimals simply by adding a decimal point button that gets added to the text input. The string will get converted into a number using the 'Calc' component's 'calculate' function.

In order to perform a series of calculations before pressing '=', I will need to implement a loop for the calculate/handleInput functions that gets broken when the equals key is pressed.

I also need to style the calculator, I would like to reflect the layout of the ios Calculator and perhaps use Google's material design concepts to keep the layout clear and tasteful.

