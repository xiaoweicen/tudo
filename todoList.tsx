import React from 'react';
import Item from './item';
import Dialog from './dialog'
import ListItem from './listItem';

class TodoList extends React.Component {
    public state: { list: Item[], finished: number };


    constructor(props: { list: Item[]; }) {
        super(props);

        this.state = {
            list: [new Item(0, "写代码"),
            new Item(1, "读书"),
            new Item(2, "打篮球")
            ], finished: 0

        };
    }
    public addTask(newitem: Item): void {
        let allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    //更新已完成计数，在组件中以props的形式传递给子组件
    updateFinished() {
        let count = 0;
        this.state.list.forEach((item) => {
            if (item.complete) {
                count++;
            }
        });
        this.setState({
            finished: count
        });
    }


    //删除并更新任务，在组件中以props的形式传递给子组件
    updateTotal(id: number) {
        this.state.list.splice(id, 1);
        this.updateFinished();
    }

    render() {
        return (
            <div className="container">
                <h1>ToDo</h1>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />
                <ul>
                    {this.state.list.map((item, index) =>
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