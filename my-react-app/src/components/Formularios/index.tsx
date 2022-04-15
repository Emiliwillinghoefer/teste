import React from 'react';
import Cliente from './cliente';
import Produtos from './produtos';

class Init extends React.Component {
   
    render() {
        return(
            <div>
                <div>
                    <Cliente></Cliente>
                </div>
                <div>
                    <Produtos></Produtos>
                </div>
                
            </div>
        )
    }
}




export default Init;