let arraysize=40;
let min = 3;
let max = 250;

let array =[arraysize];
let sortedArray =[arraysize];

generateArray();

function generateArray()
{
    for(var i=0; i<arraysize; i++)
    {
        array[i] = generateArrayValue();

        if(array[i] == array[i-1])
        {
            array[i] = generateArrayValue();
        }
    }
}

function generateArrayValue()
{
    return Math.floor(Math.random() * (max-min) +min);
}
console.log(array);

bubbleSort();

function bubbleSort()
{
    sortedArray = Array.from(array);

    for(var i= 0; i <arraysize; i++)
    {for(var j =0; j<arraysize-1; j++)
        {
            if(sortedArray[j] > sortedArray[j+1])
            {
                let x=sortedArray[j];
                sortedArray[j]=sortedArray[j+1];
                sortedArray[j+1]=x;
            }
        }

    }
}

console.log(sortedArray);