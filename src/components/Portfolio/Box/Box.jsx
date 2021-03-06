import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

    render() {
        return (
            <div className="box project animated animatedFadeInUp fadeInUp"
                key={this.props.title}>
                <div className="image" style={{ backgroundImage: `url(${this.props.img})` }}>
                    {(this.props.label ? <div className="ribbon ribbon-top-right"><span>{this.props.label}</span></div> : null)}
                    <div className="icons">
                        {(this.props.webpage ? <a className="icon" href={this.props.webpage} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-laptop" aria-hidden="true" /></a> : null)}
                        {(this.props.yt ? <a className="icon" href={this.props.yt} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube-play" aria-hidden="true" /></a> : null)}
                        {(this.props.repo ? <a className="icon" href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true" /></a> : null)}
                    </div>
                    <div className="layer" />
                </div>
                <div className="project-title">
                    <span>{this.props.title}</span>
                    <div className="year">- {this.props.year} -</div>
                </div>
            </div>
        )
    }
}

export default Box
