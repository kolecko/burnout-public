import React from 'react';

import './App.scss';
import Card from './Card';
import CardCell from './CardCell';
import Chatbox from './Chatbox';
import ContactForm from './ContactForm';
import Cover from './Cover';
import Header from './Header';
import MasonryGrid from './MasonryGrid';
import Section from './Section';

function App() {
    return (
        <div className="App">
            <Header />
            <Cover>
                <Card title={'See it in action'}>
                    <Chatbox></Chatbox>
                </Card>
            </Cover>
            <Section title="About us" />
            <Section title="About proces">
                <MasonryGrid>
                    <CardCell
                        title="Who we are for #1"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={7}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #2"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={6}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #3"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={5}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #4"
                        items={[
                            'Large enterprises',
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={4}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #5"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={3}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #6"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                            'Companies with multiple branches or partners who frequently ask questions',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={2}
                    ></CardCell>
                    <CardCell
                        title="Who we are for #7"
                        items={[
                            'Large enterprises',
                            'Teams with high exposure towards other teams',
                            'Companies with multiple branches or partners who frequently ask questions',
                        ]}
                        key={1}
                    ></CardCell>
                </MasonryGrid>
            </Section>
            <Section title="Request live demo">
                <ContactForm />
            </Section>
            <hr style={{ height: '2000px' }} />
        </div>
    );
}

export default App;
