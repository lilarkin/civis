const reps = (state = [ 'loading' ], action) => {
  switch(action.type) {
    case 'UPDATE_REPS':
      return action.reps;
    default:
      return state;
  }
}

export default reps;