import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handledAdd = this.handledAdd.bind(this)
    }

    handledAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm handledAdd={this.handledAdd}/>
                <TodoList />
            </div>
        )
    }
}