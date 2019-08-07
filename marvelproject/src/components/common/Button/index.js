import React from 'react';
import './button.css';

let Button = (props) => (
    <button className="button" type="submit">{props.text}</button>
);

export default Button;