import React from 'react';
// import './../Menu.css';

function ButtonLink(props) {
    // props => { className: "the classe", href: "button link", children: "the content text"}

    console.log(props);

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;