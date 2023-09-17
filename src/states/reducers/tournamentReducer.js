const initialState = null;

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOURNAMENT_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default tournamentReducer;