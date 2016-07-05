import React from 'react';
import style from './post.style.js';

const Photo = React.createClass({
    componentDidMount: function() {
        const url = '/photo?hash=' + this.props.hash;
        fetch(url).then((response) => {
            return response.blob();
        }).then((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            this.img.src = objectUrl;
        })
    },

    render: function() {
        return <img style={style.image} ref= { (ref) => {this.img = ref}}/>
    }
});

export default Photo;