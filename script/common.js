// click button to go another page
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "question.html";
});
// function for calculation
function CalculateArea(elementIdOne,elementIdTwo,variable){
    const triangleValueOneElement = document.getElementById(elementIdOne);
    const triangleValueOneString = triangleValueOneElement.value;
    if(isNaN(triangleValueOneString)){
        alert('please enter valid number');
    }
    else{
        const triangleValueOne = parseFloat(triangleValueOneString);
        // collect second value
        const triangleValueTwoElement = document.getElementById(elementIdTwo);
        const triangleValueTwoString = triangleValueTwoElement.value;
        if(isNaN(triangleValueTwoString)){
            alert('please enter valid number');
        }
        else{
            const triangleValueTwo = parseFloat(triangleValueTwoString);
            const triangleArea = variable * triangleValueOne *  triangleValueTwo;
            const areaCalculation  = document.getElementById('tri-text');
            areaCalculation.innerText = triangleArea.toFixed(2);
        }

    }
};
// calculate triangle area
document.getElementById('btn-triangle').addEventListener('click',function(){
    CalculateArea("triangle-value-1","triangle-value-2",0.5);
});
