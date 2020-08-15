import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Full Stack Web Development" where="University of California Irvine" from="March 2020" to="Present"/>
            
            </div>
            )
        }
    }
    
export default Education
    