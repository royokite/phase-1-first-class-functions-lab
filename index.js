// First-class functions lab!

const returnFirstTwoDrivers = arrayOFDrivers => arrayOFDrivers.slice(0, 2);

const returnLastTwoDrivers = arrayOFDrivers => arrayOFDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fareMultiplier = fare => fare * multiplier);
}

function fareDoubler(fare) {
    const doubles = createFareMultiplier(2)(fare);
    return doubles;
}

function fareTripler(fare) {
    const triples = createFareMultiplier(3)(fare);
    return triples;
}

function selectDifferentDrivers(arrayOFDrivers, returnFunction) {
    return returnFunction===selectingDrivers[0]? returnFirstTwoDrivers(arrayOFDrivers): returnLastTwoDrivers(arrayOFDrivers);
}
