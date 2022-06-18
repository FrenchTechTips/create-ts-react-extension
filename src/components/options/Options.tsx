import React from 'react';
import {Component} from 'react';
import Footer from './Footer';
import {MessageStateType} from '../../redux/reducers/MessageState';
import {dataConfig, updateMessage} from '../../redux/Actions';
import {connect} from 'react-redux';

export class Options extends Component<{MessageState: MessageStateType, getMessage: any, setMessage: any}, {}> {

    constructor(props: any) {
        super(props);
        this.props.getMessage();
    }

    handleClick(element: HTMLInputElement) {
        if (element.value.length === 0) return this.props.setMessage({message: 'Enter something...'});
        return this.props.setMessage({message: element.value});
    }

    render() {
        return <div className="h-screen w-full bg-gray-800 text-white flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="text-xl"><span className="text-2xl">Message :</span> {this.props.MessageState.message}</h1>
                <div className="flex items-center justify-center w-3/5 space-x-6">
                    <input className="text-black py-2 px-3 rounded-lg outline-none" id="message" placeholder={this.props.MessageState.message} type="text"/>
                    <button onClick={(e) => {this.handleClick(document.getElementById('message') as HTMLInputElement);}} className="py-2 px-3 rounded-lg bg-indigo-700">Update</button>
                </div>
            </div>

            <Footer />
        </div>;
    }
}

const mapStateToProps = (state: { MessageState: MessageStateType; }) => {
    const {MessageState} = state;
    return {MessageState};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMessage: (value: MessageStateType) => {
            console.log(value);
            dispatch(updateMessage(value));
        },
        getMessage: () => {
            dispatch(dataConfig());
        }
    };
};

// Connect store to the Component
export default connect(mapStateToProps,mapDispatchToProps)(Options);
