const reducer = (state, action) => {
    switch(action.type){
        case 'MIN':
            const { daily } = state;
            const min = daily.filter(d => 
                d[action.param] === Math.min(...daily.map(p => p[action.param]))
            );
            return {...state, min };
        default:
            return state;
    }
}