const findTheOldest = function(people) {
    const ages = people.map(person => {
        if (person.yearOfDeath == null) {
            return new Date().getFullYear() - person.yearOfBirth
        }
        return person.yearOfDeath - person.yearOfBirth
    });
    const minimum = Math.max(...ages);
    let minIndex = ages.indexOf(minimum);
    return people[minIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
