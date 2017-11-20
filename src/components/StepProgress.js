import React, { Component } from 'react';
import data from '../config/steps.json';
import './StepProgress.css';

export class StepProgress extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          steps: data.steps,
          current: 4
        };

        this.moveToStep = this.moveToStep.bind(this);
    }
  
    moveToStep(step) {
        const { current } = this.state;
        
        if (step < current) {
            this.setState({
                current: step
            });
        }
    }

    render() {
        const { current, steps } = this.state;

        const stepsUI = steps.map((step, i) => 
            <li id={`uiStep${i}`} className={"uiStep" + (current >= i ? " -done" : "") } key={i} onClick={() => { this.moveToStep(i); } }>
                <div className="uiStepTextContainer">
                    <div className="uiStepText">{step}</div>   
                </div>
            </li>);

        return (
            <div className="stepProgress">
                <ul className="uiSteps">
                    {stepsUI}
                </ul>
            </div>
        );
    }
}

export default StepProgress;