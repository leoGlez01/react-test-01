import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event';


describe('<App />', () => {
    // test('should work', () => {
    //     render(<App />);
    //     screen.debug();

    //     expect(
    //         screen.getByText('Prueba Tecnica de React')
    //     ).toBeDefined();
    // })

    test('should add items and remove then', async () => {
        const user = userEvent.setup();

        render(<App />);

        const input = screen.getByRole('textbox');
        expect(input).toBeDefined();

        const form = screen.getByRole('form');
        expect(form).toBeDefined();

        const addButton = form.querySelector('button')
        expect(addButton).toBeDefined()

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(addButton!)

        const list = screen.getByRole('list')
        expect(list).toBeDefined()

        expect(list.childNodes.length).toBe(1)
        // screen.debug()

        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

        const noResults = screen.getByText('No hay elementos en la lista')
        expect(noResults).toBeDefined()

    })
});

