import React from 'react';
// import logo from './logo.svg';
import './App.css';


class ToDoList extends React.Component {
    constructor() {       //构造器
        super();           //执行父类的构造器
        this.state = {       //设置初始state
            list: ["小米", "小龙", "我"]
        }
        //推荐这种指针修正方式
        this.addTOdo = this.addTOdo.bind(this);
    }

    addTOdo() {   //点击的方法
        console.log(this.refs.todoval.value);
        this.state.list.push(this.refs.todoval.value) //将输入框的 value 值 push 到 list 数组中
        this.setState({     //更新页面
            list: this.state.list
        })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <input type="text" ref="todoval"/>
                <button onClick={this.addTOdo}>ADD TODO</button>
                <br/>
                <button onClick={()=>{this.props.sendDataFormChild('来自于子组件的问候')}}>数据从子到父的传递</button>
                {/*//绑定点击事件*/}
                <br/>
                <ul>
                    {   //读取state
                        this.state.list.map((item, index) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.sendDataFormChild=this.sendDataFormChild.bind(this);
        this.state={
            message:"hello World"
        }
    }
    sendDataFormChild(val){
        this.setState({
            message:val
        })
    }
   render(){
       return (
           <div className="App">
               <h1>{this.state.message}</h1>
               <ToDoList title="ToDoList测试" sendDataFormChild={this.sendDataFormChild}/>
           </div>
       );
   }
}

export default App;
