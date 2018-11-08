import React from 'react';
import ReactDom from 'react-dom';

const append = (oldArray, newItem) => [...oldArray, newItem];

const Item = (props) => (
	<div className="measure-narrow fl-20 bg-light-gray shadow-3 ma2 pa3 b--mid-grey">
	{props.name}
        </div>
);

class EventPipe extends React.Component {
    constructor(props) {
	super(props);
	this.state  = {items: []};
	this.addElement = this.addElement.bind(this);
    }

    addElement() {
	const item = <Item name="Chaos Orb" />;
	this.setState({
	    items: append(this.state.items, item)
	});
    }

    render() {
	return <div className="helvetica fl w-20 br ma2 pa1 bg-moon-gray">
	    <h1 className="h1">Event Pipe</h1>
	    <button className="br2 pa2"onClick={this.addElement}> Add an element!</button>
	    <div>There are {this.state.items.length} items in the pipe.</div>
	    <div>{this.state.items}</div>
	</div>;
    }
}

class MapDisplay extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    currentMap: props.currentMap,
	    previousMap: props.previousMap,
	};

	this.updateCurrentMap = this.updateCurrentMap.bind(this);
    }

    updateCurrentMap(newMap) {
	this.setState({
	    currentMap: newMap,
	    previousMap: this.state.currentMap
	});
    }

    render() {
	return (<div className="fl w-50">
		<div > Current Map:
		<div className="f1">{this.state.currentMap}</div>
		</div>
		<div className="pt3"> Previous Map:
		<div className="f2"> {this.state.previousMap} </div>
		</div>
		</div> );
    }
}

const mountNode = document.getElementById("mount");
ReactDom.render(<EventPipe />, mountNode);
