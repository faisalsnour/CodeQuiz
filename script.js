var grade = 0;
        var timer = 60;
        var text = '';
        var scores = []

        // This function is called when high scores link is clicked on the top-left corner of the screen
        function showHighScore(){

            document.querySelector('#welcome').classList.add('d-none');
            document.querySelector('#Q1').classList.add('d-none');
            document.querySelector('#Q2').classList.add('d-none');
            document.querySelector('#Q3').classList.add('d-none');
            document.querySelector('#Q4').classList.add('d-none');
            document.querySelector('#Msg').classList.add('d-none');
            document.querySelector('#highScores').classList.remove('d-none');

            if((localStorage.listScores === undefined)){
                document.querySelector('#resultList').innerHTML = "no record to show"
            }
            else{
            document.querySelector('#resultList').innerHTML = localStorage.listScores; 
            }
            
        }

        // function to clear and set scores to empty and reload the page
        function clearScores(){
            localStorage.clear();
            console.log('localstorage has been cleared')
            location.reload();

        }

        // when start again button, this function is called to refresh the page and start all over again
        function startAgain(){
            location.reload();
            hideForms('#highScores','#welcome');
        }

        // function showList(){
        //     for(i=0; i<scores.length; i++){
        //         text = JSON.stringify((i +1) + ".   " + scores[i].score.initial + " - " + scores[i].score.score);
        //         console.log(text);
        //         // added few lines here
        //         localStorage.finalScore += text;
        //         document.querySelector('#resultList').innerHTML = localStorage.finalScore;  //localStorage.finalScore instead of text
        //     }

        // }


        // when submit button is clicked
        function showScore(){
            
            storeData()

            hideForms('#Msg','#highScores');

            if((localStorage.listScores === undefined))
            {
                localStorage.listScores = scores[0][0] + "   " + scores[0][1]  + " <br>"
            }
            else{
                localStorage.listScores = localStorage.listScores + scores[0][0] + "   " + scores[0][1] +  " <br>"
            }
            document.querySelector('#resultList').innerHTML = localStorage.listScores;

        }

        // to store data from user input and score value and assign them to an array
        function storeData(){
            var init = document.querySelector('#userInit').value;
            var score = [init, grade]
            scores.push(score)
            console.log('data is saved successfully')
        }

    //     function storeData()
    //     {
    //     var score = {}
    //     var init = document.querySelector('#userInit').value;
    //     score.initial = init;
    //     score.score = grade;
    //     scores.push({score:score});
    //     console.log('an element is pushed')
    //      //to store scores array in localStorage 
    //    // localStorage.setItem("localScores", JSON.stringify(scores)); // run localStorage.localScores in console.log
    //     }

        // This function when called assign the current value of grade to span-html with id="score"
        function addScore(){
        document.querySelector('#score').innerHTML = grade;
        }

        // This function checks if the timer is equals to zero to hide all questions and dispaly the score.
        function timeoutMsg(){ 
            if(timer ===0)
            {
            addScore();
            document.querySelector('#Q1').classList.add('d-none');
            document.querySelector('#Q2').classList.add('d-none');
            document.querySelector('#Q3').classList.add('d-none');
            document.querySelector('#Q4').classList.add('d-none');
            document.querySelector('#Msg').classList.remove('d-none');
            document.querySelector('#remainTime').classList.add('d-none');
            }
        }

        // An interval that runs timeoutMsg() every one second 
        setInterval(timeoutMsg,1000);

        // this assign the variable timer to display the remaining time before the quiz ends
        document.querySelector('#timerID').innerHTML = timer;

        function countDown(){
            if(timer >0)
            {
            timer = timer - 1;
            document.querySelector('#timerID').innerHTML = timer;
            }
            else{
                clearInterval(countDown);
            }
        }

        function count(){
            setInterval(countDown,1000);
            document.querySelector('#welcome').classList.add('d-none');
            document.querySelector('#Q1').classList.remove('d-none');
        }

        //This function is unused & it has been replaced by hideForms function

        function hideQ1(){
            document.querySelector('#Q1').classList.add('d-none');
            document.querySelector('#Q2').classList.remove('d-none');
        }
        
        //This function is unused & it has been replaced by hideForms function

        function hideQ2(){
            document.querySelector('#Q2').classList.add('d-none');
            document.querySelector('#Q3').classList.remove('d-none');
        }

        //This function is unused & it has been replaced by hideForms function

        function hideQ3(){
            document.querySelector('#Q3').classList.add('d-none');
            document.querySelector('#Q4').classList.remove('d-none');
        }


        // This function has not been used
        function hideForms(hideForm, showForm){
            document.querySelector(hideForm).classList.add('d-none');
            document.querySelector(showForm).classList.remove('d-none');
        }

        function firstQuestion(){
    
            if(document.querySelector('#toStoreString').checked){
                console.log("you chose the wrong answer")
                timer = timer -10;
                document.querySelector('#Q1result').innerHTML = "Incorrect answer";
                document.querySelector('#Q1result').classList.remove('d-none')
                // hideQ1();
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000,'#Q1', '#Q2');
            }
            else if(document.querySelector('#toStoreNumber').checked){
               timer = timer -10;
               document.querySelector('#Q1result').innerHTML = "Incorrect answer";
                document.querySelector('#Q1result').classList.remove('d-none')
                console.log("you chose the wrong answer")
                document.querySelector('#Q1result').innerHTML = "Incorrect answer";
                // hideQ1();
                // timeout for 1 second to show the result of answer before moving to next question
                 setTimeout(hideForms,1000,'#Q1', '#Q2');
            }
            else if(document.querySelector('#toStoreAll').checked){
                grade = grade + 2.5;
                console.log('you chose the right answer')                
                document.querySelector('#Q1result').innerHTML = "Correct answer";
                document.querySelector('#Q1result').classList.remove('d-none')
                // hideQ1();
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000,'#Q1', '#Q2');
            }
        }

        function secondQuestion(){
            if(document.querySelector('#firstOption').checked){
                grade = grade + 2.5;
                document.querySelector('#Q2result').innerHTML = "Correct answer";
                document.querySelector('#Q2result').classList.remove('d-none')
                console.log('you chose the right answer')
                // hideQ2()
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000, '#Q2', '#Q3');
            }
            else if(document.querySelector('#secondOption').checked){
                timer = timer -10;
                document.querySelector('#Q2result').innerHTML = "Incorrect answer";
                document.querySelector('#Q2result').classList.remove('d-none')
                console.log("you chose the wrong answer")
               // hideQ2()
               // timeout for 1 second to show the result of answer before moving to next question
               setTimeout(hideForms,1000, '#Q2', '#Q3');
            }
            else if(document.querySelector('#thirdOption').checked){
                timer = timer -10;
                document.querySelector('#Q2result').innerHTML = "Incorrect answer";
                document.querySelector('#Q2result').classList.remove('d-none')
                console.log('you chose the wrong answer')
               // hideQ2()
               // timeout for 1 second to show the result of answer before moving to next question
               setTimeout(hideForms,1000, '#Q2', '#Q3');
            }
        }

        function thirdQuestion(){
            if(document.querySelector('#firstAnswer').checked){
                timer = timer -10;
                document.querySelector('#Q3result').innerHTML = "Incorrect answer";
                document.querySelector('#Q3result').classList.remove('d-none')
                console.log('you chose the wrong answer')
                //  hideQ3()
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000,'#Q3', '#Q4');

              
            }
            else if(document.querySelector('#secondAnswer').checked){
                grade = grade+ 2.5;
                document.querySelector('#Q3result').innerHTML = "Correct answer";
                document.querySelector('#Q3result').classList.remove('d-none')
                console.log("you chose the right answer")
                //  hideQ3()
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000,'#Q3', '#Q4');
            }
            else if(document.querySelector('#thirdAnswer').checked){
                timer = timer -10;
                document.querySelector('#Q3result').innerHTML = "Incorrect answer";
                document.querySelector('#Q3result').classList.remove('d-none')
                console.log('you chose the wrong answer')
                //  hideQ3()
                // timeout for 1 second to show the result of answer before moving to next question
                setTimeout(hideForms,1000,'#Q3', '#Q4');
            }
        }

        function fourthQuestion(){
            if(document.querySelector('#firstExp').checked){
                timer = timer -10;
                document.querySelector('#Q4result').innerHTML = "Incorrect answer";
                document.querySelector('#Q4result').classList.remove('d-none')
                console.log('you chose the wrong answer')
                addScore();
                // timeout for 1 second to show the result of answer before moving to display result
                setTimeout(hideForms,1000,'#Q4', '#Msg')
                timer = -1; // timer is equals -1 to stop timer
                document.querySelector('#remainTime').classList.add('d-none'); // to hide remaining time

            }
            else if(document.querySelector('#secondExp').checked){
                timer = timer -10;
                document.querySelector('#Q4result').innerHTML = "Incorrect answer";
                document.querySelector('#Q4result').classList.remove('d-none')
                console.log("you chose the wrong answer")
                addScore();
                // timeout for 1 second to show the result of answer before moving to display result
                 setTimeout(hideForms,1000,'#Q4', '#Msg')
                // hideForms('#Q4', '#Msg');
                timer = -1; // timer is equals -1 to stop timer
                document.querySelector('#remainTime').classList.add('d-none'); // to hide remaining time

            }
            else if(document.querySelector('#thirdExp').checked){
                
                grade = grade+ 2.5;
                document.querySelector('#Q4result').innerHTML = "Correct answer";
                document.querySelector('#Q4result').classList.remove('d-none')
                console.log('you chose the right answer')
                addScore();
                // timeout for 1 second to show the result of answer before moving to display result
                 setTimeout(hideForms,1000,'#Q4', '#Msg')
                // hideForms('#Q4', '#Msg');
                timer = -1; // timer is equals -1 to stop timer
                document.querySelector('#remainTime').classList.add('d-none'); // to hide remaining time

            }
        }