import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

const todos = [];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }
    }

    toggleTodo = (todosId) => {
        this.setState({
            todos: this.state.todos.map(item => {
                if (todosId === item.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        })
    }

    addTodo = (e, item) => {
        e.preventDefault();
        const newTodo = {
            name: item,
            id: Date.now(),
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    hideCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.completed)
        })
    }

   

    
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Todo List:</h1>
                </div>
                <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
                <Form addTodo={this.addTodo} />
                <button onClick={this.hideCompleted}>Hide Completed Tasks</button>
               
                

            </div>

        )
    }
}
