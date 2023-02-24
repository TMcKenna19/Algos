/* 
As a diligent student, I want to reward myself if I finish my homework, and based on the time of day, I want either a latte if it's before 10am, I want a hot chocolate it's between 10 and 4pm, and I want ice cream between 4pm - 10pm. If it's after 10pm, I don't want anything other than sleep! [x]

Feature 1

Building off the MVP, if I'm up for ice cream, I want strawberry if it's Wednesday, otherwise I want vanilla. [x]

Feature 2 (hard) - optional

Building off Feature 1, I want to adjust the current conditions and add a new option so that if the time is between 3pm - 6pm, I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd. 

Feature 3 (super hard) - optional

Building off Feature 2, I want my options for the 3pm - 6pm slot to be a random selection from a group of 4 options: if the time is even, I want my selections to be ice cream, cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake. 

Hints: 

What data type can hold a group of things? 
You'll have to self-teach how to pick a random number from that group of things.
*/



function homeworkReward(time, dayOfWeek){
    
    if(time < 10){
        return("get a latte")

    }else if(time == 10 || time < 16){
        return("get hot chocolate")
        
    }else if(time == 10 || time < 16){
        return("get hot chocolate")

    }else if(time == 16 || time <22 && dayOfWeek !== "wednesday"){
        return("get vanilla ice cream")

    }else if(time == 16 || time <22 && dayOfWeek == "wednesday"){
        return("get strawberry ice cream")

    }else if (time > 22){
        return("got to sleep")
    }
}

console.log(homeworkReward(15, "tuesday"));
