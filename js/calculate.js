
function getInputValue(inputId){
    const userInputTriangle = document.getElementById(inputId);
    const newUserInputTriangleString = userInputTriangle.value;
    const newUserInputTriangle = parseFloat(newUserInputTriangleString);
    userInputTriangle.value = "";
    return newUserInputTriangle ;
}

     //  triangle area calculate
    // step-1:
document.getElementById('triangle-btn').addEventListener('click',function() {
    // step-2:
    const newUserInput1Triangle = getInputValue('triangle-input-b');
    const newUserInput2Triangle = getInputValue('triangle-input-h');
    const triangleArea = 0.5 * newUserInput1Triangle * newUserInput2Triangle;
    var finalArea = parseFloat(triangleArea).toFixed(2);

    // get area field
    const previousAreaOfTriangle = document.getElementById("area-of-triangle");
    // put value into area inner text   
    previousAreaOfTriangle.innerText = finalArea;
      
});

function getArea(inputId1,inputId2){
    // console.log(typeof inputId1);
    // console.log(typeof inputId2);
     const newUserInput1 = getInputValue(inputId1);
     const newUserInput2 = getInputValue(inputId2);
     const multiplicationResult = newUserInput1 * newUserInput2;
     const functionArea = parseFloat(multiplicationResult).toFixed(2);
     return functionArea;
    
}

    // Rectangle area calculate............................
    document.getElementById('rectangle-btn').addEventListener('click',function() {
        const area = getArea('rectangle-input-w','rectangle-input-l');
        const previousArea = document.getElementById("area-of-rectangle");
        // put value into area inner text   
        previousArea.innerText = area;     
    });

    // calculate parallelogram area..........................
    document.getElementById('parallelogram-btn').addEventListener('click',function() {
        const area = getArea('parallelogram-input-b','parallelogram-input-h');
        const previousArea = document.getElementById("area-of-parallelogram");
        // put value into area inner text   
        previousArea.innerText = area;     
    });
    // calculate Rhombus area..........................
    document.getElementById('rhombus-btn').addEventListener('click',function() {
        const functionArea = getArea('rhombus-input-d1','rhombus-input-d2');
        const area = 0.5 * functionArea;
        var finalArea = parseFloat(area).toFixed(2);
        const previousArea = document.getElementById("area-of-rhombus");
        // put value into area inner text   
        previousArea.innerText = finalArea;     
    });
    // calculate pentagon area..........................
    document.getElementById('pentagon-btn').addEventListener('click',function() {
        const functionArea = getArea('pentagon-input-p','pentagon-input-b');
        const area = 0.5 * functionArea;
        var finalArea = parseFloat(area).toFixed(2);
        const previousArea = document.getElementById("area-of-pentagon");
        // put value into area inner text   
        previousArea.innerText = finalArea;   
    });
    // calculate ellipse area..........................
    document.getElementById('ellipse-btn').addEventListener('click',function() {
        const functionArea = getArea('ellipse-input-a','ellipse-input-b');
        const area = 3.1416 * functionArea;
        var finalArea = parseFloat(area).toFixed(2);

        const previousArea = document.getElementById("area-of-ellipse");
        // put value into area inner text  
        previousArea.innerText = finalArea;   
    });

    