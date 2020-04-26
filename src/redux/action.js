export function startLoadingReports(){
    console.log('startLoadingReports');
    return(dispatch) => {
        //let users = [];
        fetch("http://localhost:8081/covidTracker/")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(loadReports(json));
        })
    }
}

export function loadReports(reports){
    console.log(reports);
    return{
        type:'LOAD_REPORTS',
        reports:reports
    }
}