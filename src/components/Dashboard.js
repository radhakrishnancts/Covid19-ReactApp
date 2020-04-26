import React from 'react';
import Header from './Header';

class Dashboard extends React.Component{

    constructor(){
        super();

        this.state = {
            sortType : 'desc'
        }        
        this.sortBy = this.sortBy.bind(this);
        this.searchState = this.searchState.bind(this);
    }

    sortBy(fieldName){
        console.log('fieldName:'+fieldName);
        this.props.reports.states.sort((a,b) => {
            const isReversed = (this.state.sortType === 'asc') ? 1 : -1;
            this.setState({sortType:this.state.sortType === 'asc' ? 'desc' : 'asc'});
            return isReversed*a.state.localeCompare(b.state)
        });
    }

    searchState(event){
        let searchVal =event.target.value;

        this.props.reports.states.filter( state => {
            console.log(state)
            return state.state.toLowerCase().indexOf(searchVal.toLowerCase()) != -1
        })
    }

    render(){
        const reports = this.props.reports.states;
        //console.log(this.props.reports.totalActive);
        return <div id="dashboard" className="dashboard">

                <Header {...this.props}/>
                
                <div id="content" className="content">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                               <th><button className="sort-btn" onClick={ () => this.sortBy('state')}> State</button></th><th>Confirmed</th><th>Active</th><th>Recovered</th><th>Deceased</th>
                            </tr>
                        </thead>
                            {reports.map((report,index) => 
                            <tbody>
                                <tr key={index} data-toggle="collapse" data-target={'#collapse'+index} aria-expanded="false" aria-controls={'collapse'+index}>
                                    <td>{'>'+report.state}</td>
                                    <td>{report.totalConfirmed}</td>
                                    <td>{report.totalActive}</td>
                                    <td>{report.totalRecovered}</td>
                                    <td>{report.totalDeceased}</td>
                                </tr>
                                <tr className="collapse" id={'collapse'+index}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>District</th><th>Confirmed</th>
                                            </tr>
                                        </thead>
                                        {report.districtData.map((district,index) => 
                                            <tbody>
                                                <tr>
                                                    <td>{district.district}</td>
                                                    <td>{district.confirmed}</td>
                                                </tr>
                                            </tbody>
                                            )}
                                     </table>   
                                </tr>
                                </tbody>
                            )}
                      </table>    
                </div>    

                <div id="footer" className="footer">
                    @Copyright Covid19 Team 2020
                </div>    

            </div>
    }
}

export default Dashboard