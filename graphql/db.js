export const people = [
    {
        id: 1,
        name: 'ethan',
        age: 18,
        gender: 'male',
    },
    {
        id: 2,
        name: 'mark',
        age: 19,
        gender: 'male',
    },
    {
        id: 3,
        name: 'ailey',
        age: 21,
        gender: 'female',
    },
    {
        id: 4,
        name: 'hilda',
        age: 22,
        gender: 'female',
    },
    {
        id: 5,
        name: 'jk',
        age: 23,
        gender: 'male',
    }
]

export const getById = id => {
    const filteredPeople = people.filter(people => people.id === id);
    return filteredPeople[0];
}