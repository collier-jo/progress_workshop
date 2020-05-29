# School Report 

## Spec 

I work for an School Reports company. We help teachers to find out how their students did on tests. We get a string of comma separated values with test results from schools, and we'd like you to build a simple report on top of that.

3 point scoring: "Green, Amber, Red"

Edge case: may not have space

Uncounted: Other than green, amber &  red, Needs caps, one long word 

## User Stories: 


## Domain Model:

Object       |  Message 

Report       | 
                initialized: (String)
                .count

                if / iteration 
                    - count greens 
                    - count amber 
                    - count red 
                    - count uncounted


## Input & Output:

'Green' ----> 'Green: 1'
'Amber'----> 'Amber: 1'
'Red' ---> 'Red: 1'

'Green, Green, Red' ---> 'Green: 2\n 
                          Red: 1' 

"Amber,Red,Green" -----> 'Green: 2\n 
                          Amber: 1\n
                          Red: 1'
                          
"AmberRedGreen" ----> 'Uncounted: 1'
"Yellow" ----> 'Uncounted: 1'
"green" ----> 'Uncounted: 1'

## Tests: 