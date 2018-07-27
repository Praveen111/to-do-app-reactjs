import React ,{ Component } from 'react';
import { ToDoListComponent } from './todoList';


export class ToDoComponent extends Component {
constructor(props) {
    super(props);

    this.state = {
         list: [],
         toDotext: ''
    };
}

    changeState(e) {
      // console.log(e.target.value);
      this.setState({toDotext: e.target.value});
    }

    onsubmit() {

         if(this.state.toDotext === '') {
             alert("Please enter To Do text");
         } else {
            this.state.list.push(this.state.toDotext);
           // this.forceUpdate();     // this will help in updating the DOM forcefully 
            this.setState({toDotext: ''}); // this also helps in rendering the component post state is updated
         }
       
    }


    render() {
        if(this.state.list.length !== 0) {
            var todoList =  <ToDoListComponent listValues={this.state.list} />;
        } 
  
        const rowStyle = {'width' : '75%', 'margin' : '0 auto'}
        return(

           <div className="row" style={rowStyle}>
             <h2>To Do App Form</h2>
             <div className="col-md-3">
             <div className="input-group">
      
      <input type="text" className="form-control" placeholder="Enter ToDo text..." value={this.state.toDotext} onChange={this.changeState.bind(this)} />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.onsubmit.bind(this)}>Add</button>
      </span>
            </div>
            </div>
             
             {todoList}

            
         
            </div>
            )
    }
}