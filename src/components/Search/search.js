import React, {Component} from 'react';
import PhotoList from '../../containers/photoList';
import withLoader from '../../HOC/withLoader';
import {valueChange, test} from '../../actions/index';
import {connect} from 'react-redux'
const PhotoListHOC = withLoader(PhotoList);

class Search extends Component{
    onSubmitForm = (e) =>{
        e.preventDefault();
        const {value, search, valueChange} = this.props;
        search(value);
        valueChange('');   
    }
    changeInputValue = (e) =>{
        const {valueChange} = this.props;
        valueChange(e.target.value);
    }

    render(){
        const {value} = this.props;     
        return (
            <div>    
                <form onSubmit={this.onSubmitForm}>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Search...' name='searchInput' onChange={this.changeInputValue} value={value} />
                        <span className='input-group-btn'>
                            <input className='btn btn-default' type='submit' disabled={value === ''} placeholder='Seach!' />
                        </span>
                    </div>
                </form>
                {(this.props.photos.length !== 0 || this.props.searched ) && <PhotoListHOC photos = {this.props.photos} /> }
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        valueChange: value => {
          dispatch(valueChange(value))
        },
        search: term =>{
            dispatch(test(term))
        }
      }
}

function mapStateToProps(state){
    return {
        value: state.value,
        photos: state.photo,
        searched: state.searched
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Search);