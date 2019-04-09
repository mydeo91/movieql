const ethan = {
    name: 'ethan',
    age: 18,
    gender: 'male',
}

const resolvers = {
    Query: {
        person: () => ethan
    }
}

export default resolvers;