const data = [  
        {  
            geometry: [10, 20],  
            text: 'James'  
        },  
        {  
            geometry: [20, 40],  
            text: 'Bond'  
        },  
        {  
            geometry: [5, 40],  
            text: 'Bond'
        },
];

const dictionary = [
    'James', 'Bond'
];

function getMessage(inputData, inputDictionary) {

        let flagError = false;
        inputDictionary.forEach(item => typeof item !== 'string' ? flagError = true : null);
        inputData.forEach(item => typeof item.text !== 'string' ? flagError = true : null);

        if(!flagError) {
            inputData = inputData.sort((prev, next) => prev.geometry[0] < next.geometry[0] ? -1 : 1).map(item => item.text);
            let found = null;
        
            for (let message of inputData) {
                found = false;
                for (let word of inputDictionary) {
                    if (message === word) {
                        found = true;
                        break;
                    }
                }
                if(!found) break;
            }
    
            return found ? inputData.join(' ') : 'Unreadable message'
        } else return 'Unreadable message'

        

}

// function getMessage(inputData) {

//     sortByCoordinates(inputData[0]);

//     const textMessages = inputData[0].map(item => item.text);
//     const resultMessage = textMessages.join(' ');
//     const absentWords = [];

//     for (let i = 0; i <= inputData[0].length - 1; i++) {
//         let found = false;
//         for (let j = 0; j <= inputData[1].length - 1; j++) {
//             if (inputData[0][i].text === inputData[1][j]) {
//                 found = true;
//             }
//         }
//         if (!found) {
//             absentWords.push(inputData[0][i].text);
//         }
//     }

//     if (absentWords.length) {
//         return "Unreadable message";
//     } else {
//         return resultMessage;
//     }

// }

function sortByCoordinates(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].geometry[0] > arr[j + 1].geometry[0]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(getMessage(data, dictionary))