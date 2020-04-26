import React from 'react';
import Dashboard from './Dashboard';
//import DashboardTest from './DashboardTest';

class Main extends React.Component{

   constructor(){
        super();
   } 

   componentDidMount(){
        this.props.startLoadingReports();
    }

   render(){
       return <div>
                <Dashboard {...this.props}/>
           </div>
   }

}

export default Main