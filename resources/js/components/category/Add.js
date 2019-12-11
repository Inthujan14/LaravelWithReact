import React, { Component } from 'react'

import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
 class Add extends Component {
    constructor() {
        super();
        this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
             category_name:'',
             alert_message:''

        }
   }

   onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        });
   }

   onSubmit(e){
        e.preventDefault();
        const category={
            category_name:this.state.category_name
        }
        axios.post('http://127.0.0.1:8000/api/category/store',category)
        .then(res=>{
            this.setState({
                alert_message:"success"
            });
        }).catch(error=>{
            this.setState({
                alert_message:"error"
            });
        });
   }
   
    render() {
        return (
            <div>
                 <hr/>
                 {this.state.alert_message=="success"?<SuccessAlert message={"Category added successfully."}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Error occure while adding the category."}/>:null}

               <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name </label>
                        <input type="text" 
                        className="form-control" 
                        id="category_name"
                        value={this.state.category_name} 
                        onChange={this.onChangeCategoryName}
                        placeholder="Enter Cateory Name"/>
                    </div>
                    
                    {/* <div className="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Add
