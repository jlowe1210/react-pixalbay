import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class PhotoDetail extends Component{


    state = {
        imgId: null
    }

    componentDidMount(){
        axios.get('https://pixabay.com/api/', {
            params:{
                key: '7829095-d7e739eff9020f25ae222c075',
                image_type: 'photo',
                id: this.props.match.params.id
            }
        }).then(photo =>{
            this.setState({
                imgId: photo.data.hits[0].webformatURL
            })
        });
    }


    componentWillUnmount(){
        //Reset search values
        if(this.myDiv){
            this.props.resetValues();
        }
    }

    render(){
        return (
            <div>
                {this.state.imgId && 
                    <div id="carouselExampleSlidesOnly" ref={(div) => { this.myDiv = div; }} className="carousel slide" data-ride="carousel" height='500px'>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={this.state.imgId}  alt="First slide" />
                    </div>
                </div>
                </div>}
                
            </div>
        )
    }
}

function mapDispatchtoProps(dispatch){
    return {
        resetValues: () =>{
            dispatch({type: 'RESET_LIST'})
        }
    }
}

export default connect(null, mapDispatchtoProps) (PhotoDetail);
