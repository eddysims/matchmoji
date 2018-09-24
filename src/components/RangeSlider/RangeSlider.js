import React from 'react';
import './RangeSlider.css';

export default (props) => {
    const displayValue = event => {
        const OUTPUT_DIV = document.querySelector('#' + props.name);
        OUTPUT_DIV.querySelector('span').innerHTML = event.target.value;
        moveOutputPosition()
    }

    const moveOutputPosition = () => {
        const OUTPUT_DIV = document.querySelector('#' + props.name);
        const RANGE_INPUT = document.querySelector('input.' + props.name);

        let width = RANGE_INPUT.offsetWidth;
        let pos = (RANGE_INPUT.value - RANGE_INPUT.min)/(RANGE_INPUT.max - RANGE_INPUT.min);
        let thumbwidth = 32;
        let thumbCorrect = thumbwidth * (pos - 0.5) * -1;
        let outputpos = Math.round( ( pos * width ) - thumbwidth/4 + thumbCorrect );

        OUTPUT_DIV.style.left = outputpos + 'px'
    }
    setTimeout(()=>{
        moveOutputPosition()
    }, 0);

    const defaultValue = props.max / props.min;

    return(
        <label className="RangeSlider">
            <div id={props.name} className="RangeSlider__output"><span>{defaultValue}</span><div className="triangle"></div></div>
            <input 
                type="range" 
                name={props.name} 
                min={props.min} 
                max={props.max}
                step="1"
                className={props.name}
                defaultValue={defaultValue}
                onChange={displayValue}
                />
        </label>
    )
}
