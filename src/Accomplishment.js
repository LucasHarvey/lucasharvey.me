import React, { Component } from 'react';
import './CSS/Accomplishment.css';

class Accomplishment extends Component {
    render(){
        const {link, image, title, subtitle1, subtitle2, description} = this.props;
        return (
            <div className="accomplishment">
                <a className="card" target="_blank" href={link}><img src={image}></img></a>
                <div className="accomplishment-info">
                    <p className="accomplishment-title">{title}</p> 
                    <p className="accomplishment-subtitle1">{subtitle1}</p>
                    <p className="accomplishment-subtitle2">{subtitle2}</p>
                    <p className="accomplishment-description">{description}</p>
                </div>
            </div>        
        );
    }
}

export default Accomplishment;