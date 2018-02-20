import React, {Component} from 'react';
import Photo from '../components/photo';


class PhotoList extends Component{

    render(){
        const photos = this.props.photos.map((photo) =>{
            return <Photo key={photo.id} {...photo} />
        })
        return (
            <div className = 'row space'>
                <h1>{this.props.photos.length !== 0 && this.props.photos ?  photos : null}</h1>
            </div>
        )
    }
}

export default PhotoList;