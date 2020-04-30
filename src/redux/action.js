export function startLoadingReports(){
    console.log('startLoadingReports');
    return(dispatch) => {
        //let users = [];
        //fetch("http://192.168.99.100:8385/covidTracker/")
		fetch("http://covid19apitest01-env.eba-jnqbmzbn.us-east-2.elasticbeanstalk.com/covidTracker")
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