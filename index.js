// Code your solution here

function findMatching(drivers , name){
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers , letter){
    return drivers.filter(function(driver) {
        for( let i = 0 ; i < letter.length ; i++){
            if(driver[i] !== letter[i]) {
                return false
            }
        }
        
        return true
    });
}

function matchName(drivers , nameGiven) {
    return drivers.filter(function(driver) {
         
         return driver.name === nameGiven
    });

}