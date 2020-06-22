# Progress Review (no.2)

I work for a company that makes digital audio workstation plugins. Musicians writing electronic music apply our filters to their tracks to change how that track sounds. We'd like you to write us a band-pass filter. 

checks if frquencies fall outside of a range 
x frequency - y frequency

[10,45,100,1001],40,1000 --> [40,45,100,1000] 
[], lower - upper bank -- > output 

[35] > raised to 40 
[1005] > Lowered to 1000

--

Frequency within the array needs to be AT LEAST 40 
Frequency within the array needs to be BELOW 1000 

## Domain Model 

Object | Message 
-------|------
frequencyChecker | takes in an array (music) √ 


input | output 
------|-----
[40] | [40]
[35] | [40]
