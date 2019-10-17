import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


describe('Card component tests', () => {
    is('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    is('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card 
            key={card.id}
            title={card.title}
            content={card.content} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    })
});