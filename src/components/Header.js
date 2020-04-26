import React from 'react';

class Header extends React.Component{

    constructor(){
        super();
    }

    render(){
        return <div id="header" className="header">

                    <div id="logo" className="logo">
                        <img src="logo123.png" alt="#"/>
                    </div>    
  
                    <div id="confirmed" className="confirmed">
                        <div className="confirmed-content">
                            <div className="header-heading">Confirmed</div>
                            {this.props.reports.totalConfirmed}
                        </div>    
                    </div> 
                    <div id="active" className="active">
                        <div className="active-content">
                            <div className="header-heading">Active</div>
                            {this.props.reports.totalActive}
                        </div>    
                    </div>
                    <div id="recovered" className="recovered">
                        <div className="recovered-content">
                            <div className="header-heading">Recovered</div>
                            {this.props.reports.totalRecovered}
                          </div>  
                    </div>
                    <div id="deceased" className="deceased">
                        <div className="deceased-content">
                           <div className="header-heading"> Deceased</div>
                            {this.props.reports.totalDeceased}
                         </div>   
                    </div>    

                    <div id="header-title" className="header-title">
                            <div id="header-title-content" className="header-title-content">
                                COVID19<br/>
                                INDIA
                            </div>     
                    </div>    
                </div>    

    }


}

export default Header
