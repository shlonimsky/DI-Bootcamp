import {connect} from 'react-redux'
import React from 'react'
import {Insert,Update,UpdateIndex} from '../Redux/action'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accountNumber : "",
            fsc : "",
            name : "",
            amount : ""
        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.index === -1) this.props.trans(this.state)
        else {
            this.props.upd(this.state)
            this.props.updateInd(-1)
        }
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.index !== this.props.index && this.props.index != -1) {
        const dataToUpdate = [...this.props.allData]
        // console.log(dataToUpdate[this.props.index])
        this.setState(dataToUpdate[this.props.index])
        }
        // console.log(prevProps)
        // console.log(prevState)
        // console.log("in didupdate ind:",this.props.index)
    }

    render(){
        const {accountNumber,fsc,name,amount} = this.state
        // console.log("after setState",this.state)
        return(
            <form  onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={this.handleInputChange} type="text" name='accountNumber' value={accountNumber} placeholder='Account number' /> 
                <input onChange={this.handleInputChange} type="text" name='fsc' value={fsc} placeholder='FSC' /> 
                <input onChange={this.handleInputChange} type="text" name='name' value={name} placeholder='A/C Holder Name' /> 
                <input onChange={this.handleInputChange} type="text" name='amount' value={amount} placeholder='amount' /> 
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const mapStateToProps =(state) => {
    // console.log(state.currentIndex)
    return {
        allData : state.transactions,
        index : state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        trans : (obj) => dispatch(Insert(obj)),
        upd : (obj) => dispatch(Update(obj)),
        updateInd : (i) => dispatch(UpdateIndex(i))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm)