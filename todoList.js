import React, { Component } from 'react';
import ListItem from './listItem';
import Dialog from './dialog';
import './main.css';

class TodoList extends Component {
    constructor (props) {
        super(props);
        
        //初始任务列表
        this.state = {
            list: [{
                id: 0,
                name: '写代码',
                status: 0,
				time:'2000-01-01'
            }, {
                id: 1,
                name: '读书',
                status: 0,
				time:'2000-01-01'
            }, {
                id: 2,
                name: '打篮球',
                status : 0,
				time:'2000-01-01'
            }],
            finished: 0
        };
    }
    
    //添加新任务，在组件中以props的形式传递给子组件
    addTask (newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    //更新完成的任务，在组件中以props的形式传递给子组件
    updateFinished (todoItem) {
        var sum = 0;
        this.state.list.forEach( (item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }

    //更新任务总数，在组件中以props的形式传递给子组件
    updateTotal (todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

    render () {
        return (
            <div className="container">
                <h1>ToDo</h1>
				<Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
                <ul>
                    { this.state.list.map ((item, index) =>
                        <ListItem 
                            item={item}  
                            finishedChange={this.updateFinished.bind(this)} 
                            totalChange={this.updateTotal.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.finished} / {this.state.list.length}完成</li>
                </ul>
                
            </div>
        );
    }
}

export default TodoList;