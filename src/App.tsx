import React, {useEffect, useState} from 'react';
import './App.scss';
import Card from './Card';
import Cover from './Cover';
import Header from './Header';
import Chatbox from './Chatbox';
import Section from './Section';
import ContactForm from './ContactForm';

function App() {
    return (
        <div className="App">
            <Header />
            <Cover>
                <Card title={'See it workin\''}>
                    <Chatbox></Chatbox>
                </Card>
            </Cover>
            <Section title="About us" />
            <Section title="About proces" />
            <Section title="Request live demo">
                <ContactForm />
            </Section>
            <hr style={{ height: '2000px' }}/>
        </div>
    );
}

export default App;
