import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import { dataConfig, getMessage, updateMessage } from '../../redux/Actions';
import { MessageStateType } from '../../redux/reducers/MessageState';
import { MessageSendersID } from '../../types';
import Utils from '../../utils/utils';

export class Header extends Component<{MessageState: MessageStateType, getMessage: any}, MessageStateType> {
    
    constructor(props: any) {
        super(props);

        this.props.getMessage();
    }
    
    
    render() {  
        return <div>
        <div className='w-full-popup flex h-header-popup bg-indigo-900 p-4 justify-center'>
            <h1>{this.props.MessageState.message}</h1>
            <div className="">
                <button onClick={() => Utils.sendMessage({id:MessageSendersID.POPUP_BUTTON, message:'SEND_HELLO'})}>CLICK ME</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);





