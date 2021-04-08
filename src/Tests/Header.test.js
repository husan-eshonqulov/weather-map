import Header from '../Components/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
    test('whether or not Header is empty', () => {
        render(<Header />);
        const element = screen.getByTestId('custom-element');
        expect(element.textContent).not.toHaveLength(0);
    });

    test('whether or not Header is assignment text', () => {
        render(<Header />);
        const element = screen.getByTestId('custom-element');
        expect(element.textContent).toBe('OpenWeather Map');
    });

});