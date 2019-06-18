import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
// import logo from './logo.svg';
import './App.css';
import ReactCssTransitionGroup from 'react-addons-css-transition-group'


// 动画animation的学习
class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         list: []
    //     }
    //     this.addToDo = this.addToDo.bind(this);
    // }
    //
    // addToDo() {
    //     this.state.list.push(this.refs.todoVal.value);
    //     this.setState({
    //         list: this.state.list
    //     })
    // }
    //
    // deleteToDo(index) {
    //     this.state.list.splice(index, 1);
    //     this.setState({
    //         list: this.state.list
    //     })
    // }
    //
    // render() {
    //     let item = this.state.list.map((item, index) => {
    //         return <li key={item}>{item}
    //             {/*一定要写成箭头函数的形式才可以传参*/}
    //             <button onClick={() => this.deleteToDo(index)}>删除</button>
    //         </li>
    //     })
    //     return (
    //         <div className="App">
    //             <input type="text" ref="todoVal"/>
    //             <button onClick={this.addToDo}>Add ToDo</button>
    //             <ul>
    //                 <ReactCssTransitionGroup
    //                     transitionName="reactAnim"
    //                     transitionEnterTimeout={500}
    //                     transitionLeaveTimeout={300}
    //                 >
    //                     {item}
    //                 </ReactCssTransitionGroup>
    //             </ul>
    //         </div>
    //     )
    // }

    constructor() {
        super();
        this.addToDo = this.addToDo.bind(this);
    }

    addToDo() {
        this.props.store.dispatch({
            type: 'ADD_TODO',
            payload: this.refs.todoVal.value
        })
    }

    render() {
        const list = this.props.store.getState().list;
        return (
            <div className="App">
                <input type="text" ref="todoVal"/>
                <button onClick={this.addToDo}>ADD TODO</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={item + index}>{item}</li>
                        })}
                    }
                </ul>
            </div>
        )
    }
}

export default App;
