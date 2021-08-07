function removeDuplicatItems(arr) {
    const uniqArray = [];
    for (let item of arr) {
        if(uniqArray.indexOf(item) == -1){
            uniqArray.push(item);
        }
    }

    return uniqArray;
}

const myItems = ['bablu', 'dablu', 'kablu','chablu','bablu','hiblu','kablu','hiblu'];

const myUniqItems = removeDuplicatItems(myItems);
console.log(myUniqItems);