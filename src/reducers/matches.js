const matches = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MATCH':
            return {
                id: action.id,
                players: action.text
            };

        default:
            return state;
    }
};

export default matches;
