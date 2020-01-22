import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            // e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
            // e.shiftKey ? search(description) : add(description)
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            // props.handleClear()
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input type="text" id="description" className="form-control"
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}
                    />
                        {/* onClick={this.props.handleAdd} */}
                    <IconButton style='info' icon='search'
                        onClick={search}
                    />
                        {/* onClick={() => search(description)} */}
                        {/* onClick={this.props.handleSearch} */}
                    <IconButton style='default' icon='close'
                        onClick={() => clear()}
                    />
                        {/* onClick={this.props.handleClear} */}
                </Grid>
            </div>
        )
    }
}

// const TodoForm = props => {
//     const keyHandler = (e) => {
//         // if (e.key === 'Enter') {
//         //     e.shiftKey ? props.handleSearch() : props.handleAdd()
//         // } else if (e.key === 'Escape') {
//         //     props.handleClear()
//         // }
//     }

//     return (
//         // <div role='form' className='todoForm'>
//         //     <Grid cols='12 9 10'>
//         //         <input type="text" id="description" className="form-control"
//         //             placeholder='Adicione uma tarefa'
//         //             onChange={props.changeDescription}
//         //             onKeyUp={keyHandler}
//         //             value={props.description}
//         //         />
//         //     </Grid>
//         //     <Grid cols='12 3 2'>
//         //         <IconButton style='primary' icon='plus'
//         //             onClick={props.handleAdd}
//         //         />
//         //         <IconButton style='info' icon='search'
//         //             onClick={props.handleSearch}
//         //         />
//         //         <IconButton style='default' icon='close'
//         //             onClick={props.handleClear}
//         //         />
//         //     </Grid>
//         // </div>
//     )
// }

const mapStateToProps = state => ({
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)