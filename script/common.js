// click button to go another page
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "question.html";
});
// function for calculation
function CalculateArea(elementIdOne,elementIdTwo, eventIdThyree, variable){
    const triangleValueOneElement = document.getElementById(elementIdOne);
    const triangleValueOneString = triangleValueOneElement.value;
    const triangleValueOne = parseFloat(triangleValueOneString);
    if(isNaN(triangleValueOne)){
        alert('please enter valid number');
    }
    else{
        
        // collect second value
        const triangleValueTwoElement = document.getElementById(elementIdTwo);
        const triangleValueTwoString = triangleValueTwoElement.value;
        const triangleValueTwo = parseFloat(triangleValueTwoString);
        if(isNaN(triangleValueTwo)){
            alert('please enter valid number');
        }
        else{
            
            const triangleArea = variable * triangleValueOne *  triangleValueTwo;
            const areaCalculation  = document.getElementById(eventIdThyree);
            areaCalculation.innerText = triangleArea.toFixed(2);
        }

    }
};
function calculateAreaTwo(inputOne,inputTwo,inputThree,eventId){

};
// calculate triangle area
document.getElementById('btn-triangle').addEventListener('click',function(){
    CalculateArea("triangle-value-1","triangle-value-2",'tri-text',0.5);
});
// calculate Ractangle Area
document.getElementById('btn-ractangle').addEventListener('click',function(){
    CalculateArea('rectangleOne', 'rectangleTwo','ra-text',1);
});

// Calculate Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    CalculateArea('input-para', 'input-para-two', 'pa-text',1);
});
// calculate Rhombus

