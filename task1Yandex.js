const explorers = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]

function getNewMatrix (explorers) {  
    let toponims = {};
    let currentName = '';
    let newMatrix = [];

    for(let i = 0; i < explorers.length; i++) {
        currentName = explorers[i][0];

        for(let j = 1; j < explorers[i].length; j++) {
            !toponims.hasOwnProperty(explorers[i][j]) 
                ?   toponims[explorers[i][j]] = currentName
                :   toponims[explorers[i][j]] += ` ${currentName}`;
        }   
    }

    for(let key in toponims) {
        newMatrix.push([key, ...toponims[key].split(' ')])
    }    

    return newMatrix
};

console.log(getNewMatrix(explorers));