import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import { dataConfig} from '../../redux/Actions';
import { MessageStateType } from '../../redux/reducers/MessageState';
import { MessageSendersID } from '../../types';
import Utils from '../../utils/utils';

export class Header extends Component<{MessageState: MessageStateType, getMessage: any}, {}> {
    
    constructor(props: any) {
        super(props);
        this.props.getMessage();
    }

    render() {  
        return <div>
        <div className='w-full-popup  h-header-popup bg-gray-800 p-4 justify-center flex-col '>
            <div className="flex justify-center py-2">
                <h1 className='text-xl '>Message : {this.props.MessageState.message}</h1>
            </div>
            <div className="flex justify-center bg-slate-700 h-12  border-white border-2 hover:bg-blue-500">
                <button className="" onClick={() => Utils.sendMessage({id:MessageSendersID.POPUP_BUTTON, message:'SEND_HELLO'})}>Send Message</button>
            </div>
            <div className="flex justify-center items-center bg-slate-700 h-12 border-white border-2 hover:bg-blue-500">
                <a className="" href='options/options.html#message' target='_blank'>Open Option Panel</a>
            </div>

        </div>
    </div>;
    }
}

const mapStateToProps = (state: { MessageState: MessageStateType; }) => {
    const {MessageState} = state;
    return {MessageState};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessage: () =>{
            dispatch(dataConfig());
        }
    };
};

// Connect store to the Component
export default connect(mapStateToProps,mapDispatchToProps)(Header);
