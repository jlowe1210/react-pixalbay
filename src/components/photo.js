import React from 'react';
import {Link} from 'react-router-dom';




const Photo = (props) =>{
    return (
        <div className = 'row space'>
            <div className = 'col-sm photo-box'>
                <div className = 'card' style={{width: '20rem'}} >
                    <img className='card-img-top' height= '250px' src={props.webformatURL} alt='pic' />
                    <div className = 'card-block idk'>
                        <Link to ={'/photo/' + props.id}>View Photo</Link>
                        <p>Likes: {props.likes}</p>
                        <p>Favorites: {props.favorites}</p>
                        <p>Tags: {props.tags}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;

