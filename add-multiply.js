/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChaorWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // wood woodCalculation 
    const chairWoodQuantity = chairQuantity * perChaorWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    // tatal wood Calcultion 
    const totalWoodQuanity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWoodQuanity;
}

const needWood = woodCalculator(1, 1, 1);
console.log(needWood);