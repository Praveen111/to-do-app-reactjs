import React ,{ Component } from 'react';
import './todoList.scss';
import PropTypes from 'prop-types';


export class ToDoListComponent extends Component {

 
    render() {
        const { listValues } = this.props;
        var divStyle = { 'width': '50%' ,'margin': '0 auto'}
        var showToDo = listValues.map(e => <li className="list-group-item" key={listValues.indexOf(e)}>{e}</li>);
        return(<div id="list" style={divStyle}>
              <h3>To do List : </h3>
             

               <div className="panel panel-default">

 
<ul className="list-group">
{showToDo}

</ul>
</div>
            </div>)
    }

}

ToDoListComponent.propTypes = {
    listValue: PropTypes.array
}