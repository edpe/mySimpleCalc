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

# Version 2
```
As a user
So that I can perform a continuous series of calculations
I want to be able to perform calculations involving any amount of numbers
```
```
As a user
So that I can perform calculations on a total
I want to be able to store a number in memory and use it in another calculation
```
In order to perform a series of calculations before pressing '=', I will need to implement a loop for the calculate/handleInput functions that gets broken when th e'=' is pressed.
I plan to use the state of the Calc component to store a number. The layout will need to be changed to include memory save and recall buttons.
