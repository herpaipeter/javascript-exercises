const findTheOldest = function(people) {
    const oldest = people.reduce((oldest, person) => {
        const age = (!person.yearOfDeath ? new Date().getFullYear() : person.yearOfDeath) - person.yearOfBirth;
        return !oldest.age || oldest.age < age ? {person, age} : oldest;
    }, {})
    return oldest.person;
};

// Do not edit below this line
module.exports = findTheOldest;
