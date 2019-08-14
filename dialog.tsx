import React from 'react';
import Item from './item';


class Dialog extends React.Component<{ addNewTask: any; nums: number }>{
    public myRef: any;


    constructor(props: Readonly<{ addNewTask: any; nums: number; }>) {
        super(props);
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let len = this.props.nums;
        let newid = len > 0 ? len : 0;
        let name = this.myRef.current.value;
        if (name !== '') {
            let newitem = new Item(newid, name)

            this.myRef.current.value = '';
            this.props.addNewTask(newitem);
        }
    }
    render() {
        return (

            <div className="dialog">
                <div>
                    <span>新建任务</span>
                    <input type="text" ref={this.myRef} placeholder="请输入事项" />

                    <input type="button" value="添加" onClick={this.handleClick} />
                </div>
            </div>

        );
    }
}

export default Dialog;