## Leap Years

A simple tool that will tell you whether a year is a leap year, according to the following rules:

All years divisible by 400 ARE leap years (e.g. 2000 was a leap year) √
All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years) √
All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

<!-- ## User Story 

As a user, 
I want to input a number 
To see if its a leap year


 -->


## Input / output

All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)

All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)

All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)


Input           | Output

number          | "leap" or "not leap"
2000            | "leap"

1700            | "Not a leap

Object          | Message 

Leap            | .check 
                    - checks number to see if it is a muluple of 400 
                    - checks that number is diviable by 100 && !(but not 400)
                    - number % 4 && !(%100)
















Example output
2.4.1 :001 > require './lib/leap_years.rb'
 => true
2.4.1 :002 > leap_year?(2000)
 => true
2.4.1 :003 > leap_year?(1970)
 => false
2.4.1 :004 > leap_year?(1900)
 => false
2.4.1 :005 > leap_year?(1988)
 => true
2.4.1 :006 > leap_year?(1500)
 => false
Extension Options
Write a program that takes a start year and an end year and returns an array of all the leap years between.

Write a program that when given a year, will return the closest leap year (this could be before or after the given year)