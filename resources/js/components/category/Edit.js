import React, { Component } from 'react';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';


 class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
             category_name:'',
             alert_message:''
        }
   }

   componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/category/edit/'+this.props.match.params.id)
    .then(response=>{
        this.setState({category_name:response.data.name});
    });
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
        axios.put('http://127.0.0.1:8000/api/category/update/'+this.props.match.params.id,category)
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
                {this.state.alert_message=="success"?<SuccessAlert message={"Category updated successfully."}/>:null}
                {this.state.alert_message=="error"?<ErrorAlert message={"Error occure while updating the category."}/>:null}

               <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="category_name">Category Name </label>
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
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}

export default Edit
