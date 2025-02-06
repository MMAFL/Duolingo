interface StoreState {
    hearts: number;
    gems: number;
    streakFreezes: number;
}

const initialState: StoreState = {
    hearts: 0,
    gems: 1000, // Starting gems
    streakFreezes: 0
};

const storeReducer = (state = initialState, action: { type: string; payload?: any }) => {
    switch (action.type) {
        case 'PURCHASE_HEARTS':
            return {
                ...state,
                hearts: state.hearts + 5,
                gems: state.gems - 350
            };
        case 'PURCHASE_STREAK_FREEZE':
            return {
                ...state,
                streakFreezes: state.streakFreezes + 1,
                gems: state.gems - 200
            };
        default:
            return state;
    }
};

export default storeReducer;
