import React, {Component} from 'react';
// import {connect} from 'react-redux'
import  gif from './6.gif';
import store from '../reducers/index';
//Connect higher order function was throwing an error, so manually set state and listen to changes
function withLoader(WrappedComponent){
    return class extends Component{
        state = {
            loading: store.getState().loading
        }
        componentDidMount(){
            store.subscribe(()=>{
                this.setState({
                    loading: store.getState().loading
                })
            })
        }
        render(){
            return(
                <div>
                    {this.state.loading ? <div style={{textAlign: 'center', marginTop: '15px'}}><img src={gif} alt='loading gif' /></div> : <WrappedComponent {...this.props} /> }
                </div>
            )
        }
    };
}



export default (withLoader);

