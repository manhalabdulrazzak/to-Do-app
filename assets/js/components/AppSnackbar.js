import {Snackbar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import React, {Fragment, useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';

function checkLevel(level) {
    switch (level) {
        case 'success':
            return 'green';
        case 'error':
            return 'red';
        default:
            return 'white';
    }
}

function AppSnackbar() {
    const context = useContext(TodoContext);
    return (
        <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
            {context.message.text && (
                <SnackbarContent style={{backgroundColor: checkLevel(context.message.level)}}
                                 message={context.message.text.map((text, index) => (
                                     <Fragment key={index + ' ' + text}>
                                         <span>{text}</span>
                                         <br/>
                                     </Fragment>
                                 ))}
                                 action={[
                                     <Button
                                         onClick={() => context.setMessage({})}
                                         key='dismiss'
                                         color='inherit'
                                     >
                                         Dismiss
                                     </Button>,
                                 ]}/>
            )}
        </Snackbar>
    );
}

export default AppSnackbar;