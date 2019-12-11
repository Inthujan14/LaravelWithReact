import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';


 class Index extends Component {
    render() {
        return (
            <div>
                
                    <div>
                        <hr/>
                        <Link to="/category/add" className="btn btn-primary">Add </Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/category" className="btn btn-primary">Listing </Link>

                        <Route exact path='/category/add' component={Add} />
                        <Route exact path='/category' component={Listing} />
                        <Route exact path='/category/edit/:id' component={Edit} />

                    </div>
                
            </div>
        )
    }
}

export default Index
