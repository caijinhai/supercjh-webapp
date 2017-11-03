import React, {Component} from 'react';
import Style from './hello.css';
import Config from './config.json';


class Hello extends Component{
    render() {
        return (
            <div className={ Style.root }>{ Config.text }</div>
        );
    }
}

export default Hello;