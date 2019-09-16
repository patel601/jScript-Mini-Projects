/**
 * Created by patel7589 on 9/21/2017.
 */
/*
 NOTESSSSSSSSSSSS

 var myFirstVariable=5;    A Single '=' is used to assign a value to a variable

 x === y   --> strict EQUAL and returns true is VALUE and DATA TYPE (or same)

 x == y  --> loose EQUAL. The VALUES must be the same, but type does not.
 Automatic conversion will take place.


 x !== y   --> NOT-Equal and is TRUE if value is NOT EQUAL or TYPE is NOT EQUAL

 x!= y    --> Values are NOT EQUAL

 x > y     --> x is greater than y
 x >= y    --> x is greate than or equal to y
 x < y     --> x is less than y
 x <= y    --> x is less than or equal to y
 */

/*
 Project #1
 Write a function named greaterNum that:
 -Take 2 arguments (parameters), both of which are numbers
 -Return whichever number is greater (higher in value).
 -Call that function 2 times with different number pairs,
 and log the output to make sure it works...
 (example: The greater number of 23 and 33 is 33) MIND BLOWN !!

 HTML tasks:
 () 2 input boxes to capture data from the user.
 (*) link JavaScript to HTML
 () <p> or a place to put the results from function
 () button calls greaterNum and passes parameters to it


 JavaScript tasks:
 () create a greaterNum function with variables from inputs
 */

function greaterNum(num1,num2)
{
    //conditionals...
    if (num1 > num2)
    {
        //if num1 > num2, this code will execute
        return "the greater number of " +num1 + " and " + num2 +" is " + num1;
    }
    else if (num1<num2)
    {
        return "the greater number of " +num1 + " and " + num2 +" is " + num2;

    }
    else if (num1===num2)
    {
        return "the two numbers are equal!!";
    }

}
/*
 Project #2
 Write a function name helloWorld that
 -Takes 1 argument (or parameter), a language code (example: 'es', 'de', 'en')
 -Returns "Hello, World" for the language entered by the user
 (Example: if ES is chosen, return "Hola, Mundo"
 -It should default tp English if they choose something other than your 3 languages
 -Call function to verify it works
 */

function helloWorld(word)
{
    if (word === 'EN')
    {
        return "Hello World"
    }
    else if (word === 'DE')
    {
        return "Hallo Welt"
    }
    else if (word === 'ES')
    {
        return "Hola Mundo"
    }
    else if (word === 'FR')
    {
        return "Bonjour le Monde"
    }
}




/* Project #3
 Task: Write a function named assignGrade that
 - Takes 1 argument (parameter), a numeric score
 -Returns a grade for the score, either 'A', 'B', 'C', 'D', 'F+'
 -Call that function a few times for a few different scores to
 ...make sure it works.

 HTML:
 () <inputs> to collect the numeric score
 () output area to dispay converted score
 () calls the funtion assignGrade and pass parameter (score) to function

 jScript:
 () assignGrade Function

 input=score;
 if (score >= 90) {
 return 'A';
 }
 else if (score >= 80) {
 return 'B';
 }
 else if (score>= 70) {
 return 'C';
 }


 */

function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score>= 70) {
        return 'C';
    }
    else if (score >=60) {
        return 'D';
    }
    else{
        return 'F';
    }
}

/*
 Project #4
 Task: Write a function named 'pluralized' that:
    -Takes 2 arguments (parameters), a noun and a number
    -Return the number and the pluralized form
        EXAMPLE: noun=dog number=3
        OUTPUT: "3 dogs"
                *irregular nouns that dont end in a constanant--> else if..
                *3-4 special cases^^^^^
                if number>1...

Tasks:

HTML:
()make 2 input boxes
()make an output box
()
()

JS:
()
()
()
()








