import React, {Component} from 'react'
import TodoItem from './TodoItem';
class TodoList extends Component {
    static defaultProps = { // props에 받은것이 없을떄 todos 빈배열 초기화
        todos : []
    }
    render() {

        const {todos, onItemDelete} = this.props;
        const list = todos.map((item, index) => {
        return <TodoItem key= {index} id = {index+1} index={index} content={item} onClick={onItemDelete}/>
        })
        return (
            list
        );
    }
}

export default TodoList;