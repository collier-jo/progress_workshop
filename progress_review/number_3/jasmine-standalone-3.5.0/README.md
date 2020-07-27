Opening statememt 

SpellChecker 

incorrect supplied - identify that it is incorrect 
Flag = put squiggle on either side 
input can be a paragraph 
    no puntucation
All british english 
Supplying a dictionary 
Varied cases 

<!-- // a little longer for the finding the requiremets 
// consider some complex input out BUT address slowly 
-->



input | output |
|----|----|
|dKDJNF| ~dKDJNF~ |
|.ksejbg skjfbf | ~.ksejbg~ ~skjfbf~ |
|Hi my name iss Jo|  Hi my name ~iss~ Jo| 


## Domain Model 
Object | Message |
|------| --------|
|SpellChecker||
||.checker |
||.library |

