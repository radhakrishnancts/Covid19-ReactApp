import reports from '../data/reports';

const reportReducer = function Events(state=reports,action){
    switch(action.type){
        case 'LOAD_REPORTS':
            return action.reports;
        default:
            return state;
    }
}

export default reportReducer