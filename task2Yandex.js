const coordinates = [  
    [1, 0],  
    [0, 1],  
    [1, 1]  
];

function getCoordinates (diffs) {
    let instance = [0, 0] 
    let newMatrix = [];

    for(let i = 0; i < diffs.length; i++) {
        newMatrix[i] = [];

        instance[0] === 1 && diffs[i][0]
            ?   newMatrix[i][0] = -1
            :   newMatrix[i][0] = diffs[i][0];

        instance[1] === 1 && diffs[i][1]
            ?   newMatrix[i][1] = -1
            :   newMatrix[i][1] = diffs[i][1];

        instance[0] += newMatrix[i][0]
        instance[1] += newMatrix[i][1]
    }

    return instance[0] === 0 && instance[1] === 0 ? newMatrix : null

};

console.log(getCoordinates(coordinates));