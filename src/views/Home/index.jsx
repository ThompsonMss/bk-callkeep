const React = require('react');

function HelloMessage(props){
 return <div style={{backgroundColor: 'green'}}>OI {props.name}</div>
}

module.exports = HelloMessage;