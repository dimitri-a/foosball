const players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                id: action.id,
                name: action.text
            };
 
        default:
            return state;
    }
};

export default players;
