import React from 'react';
import { Container, Typography } from '@mui/material';
import './EmptyPage.css';
import EmptyIcon from '../assets/no-results.png';

function EmptyPage() {

    return (
        <div className='root'>
            <Container>
                <div className='emptyPageContent'>
                    <img width={200} src={EmptyIcon}></img>
                    <div style={{ margin: 'auto' }}>
                        <Typography variant="h4" gutterBottom>
                            Sorry, there are no items
                        </Typography>
                        <Typography variant="body1">
                            List was empty!
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default EmptyPage;