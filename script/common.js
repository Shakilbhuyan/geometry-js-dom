// click button to go another page
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "question.html";
});
// add color
function addColor(eventID){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    document.getElementById(eventID).style.background = bgColor ;
};
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
// function for second row calculation
function calculateAreaTwo(inputOne,inputTwo,inputThree,eventId){
const calculate = inputOne * inputTwo * inputThree;
const calculateFinal = calculate.toFixed(2);
const areaText = document.getElementById(eventId);
areaText.innerText = calculateFinal;
};
// calculate triangle area
document.getElementById('btn-triangle').addEventListener('click',function(){
    CalculateArea("triangle-value-1","triangle-value-2",'tri-text',0.5);
    addColor('add-color-one');
});
// calculate Ractangle Area
document.getElementById('btn-ractangle').addEventListener('click',function(){
    CalculateArea('rectangleOne', 'rectangleTwo','ra-text',1);
    addColor('add-color-two');
});

// Calculate Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    CalculateArea('input-para', 'input-para-two', 'pa-text',1);
    addColor('add-color-three');
});
// calculate Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    calculateAreaTwo(0.5,16,18, 'rh-text');
    addColor('add-color-four');
});
// calculate pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    calculateAreaTwo(0.5,6,10,'pen-text');
    addColor('add-color-five');
});
document.getElementById('btn-ellipse').addEventListener('click', function(){
    calculateAreaTwo(3.1415,10,4,'el-text');
    addColor('add-color-six');
});

