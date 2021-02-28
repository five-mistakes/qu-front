import React, { useState } from 'react';
import { QuApiCalls } from '../services';
import Header from './Header';
import TicketDialog from './TicketDialog';

const Home = ({enterprise, setEnterprise}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [ticket, setTicket] = useState(null);

    const handleCancel = () => {
        setOpenDialog(false);
    }
    const handleSubmit = async (ticket) => {
        const { data } = await QuApiCalls.createTicket(ticket);
        setTicket(data ? data : null);
        console.log(data);
        setOpenDialog(true);
    }

    const handleConfirmation = async (email) => {
        const _sentEmail = await QuApiCalls.sendEmail(email, ticket.id);
        setOpenDialog(false);
    } 
    return (
        <div className="home">
            <div className="banner">
                <Header enterprise={enterprise} setEnterprise={setEnterprise} handleSubmit={handleSubmit}/> 
            </div>
            <footer style={{ marginTop: 20 }}>
                <p style={{textAlign: "center"}}>Copyright © 2021, Five Mistakes. All rights reserved. </p>
            </footer>
            <TicketDialog 
                open={openDialog} 
                handleConfirmation={handleConfirmation} 
                handleCancel={handleCancel}
                enterprise={enterprise}
                setEnterprise={setEnterprise}
            />
        </div>
    )
}

export default Home;
