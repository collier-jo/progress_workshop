README Template 

# Title

## Description: 
I work for a company that makes academic maths papers easier to read. Our product does this by scanning through the maths paper, looking for sums. Then, it extracts those sums as strings. Then, it evaluates those sums. Then, it spits out the original sum string along with the evaluated result. We're looking to move to a more modern tech stack and we'd like you to build us a prototype of this system, a kind of "string calculator".

## How to use

## Images 

# My process 
## Structure
## approach
## Install
## Dependancies 
## Deployment Link


# Brief
## Requirements Specification
## Modifications:
## Constraints ;

# Plan:
## Domain Model:
|Object | message
|----|-----|
|StringCalculator||
|| Calculate(string)

## Input/ Output:

Input | output |
------|-------|
"1 + 1" | ["1 + 1", 2] > always spaces in the 
"1+1" | raise error: "Input must be a valid mathematical string separated by spaces"
"1+ 1"| raise error: "Input must be a valid mathematical string separated by spaces"
"1 + 1 + 1" | ["1 + 1 + 1", 3]
" 2 / 1 " | ["2 / 1", 2]
"1" | ["1", 1]
"my sum is 1 + 1" | raise error: "Input must be a valid mathematical string separated by spaces"
2 + 2 | raise error: "Argument error: input must be a sting| 

spaces = error 
oyutput result be a number 
output should include the equ 

## Test Ideas:

Consider dimensions > different / + 