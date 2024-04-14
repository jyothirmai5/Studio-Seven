// ThankYouPopup.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import './ThankYouPopup.css';

const ThankYouPopup = ({ open, onClose, clearCart }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ color: "#58869e", }} className='thankyou-title'>Thank You!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div className='div-class thankyou-comment'>
                        Thank you for your purchase.<br></br>Your order has been placed successfully.
                    </div>
                    <a onClick={clearCart} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className='thankyou-backhome'>Go to home</div></a>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default ThankYouPopup;
