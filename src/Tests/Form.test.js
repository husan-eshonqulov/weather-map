import Form from '../Components/Form';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
    test('input\'s initial value is empty', () => {
        render(<Form />);
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('');
    });


    test('input value is updated correctly', () => {
        render(<Form />);

        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Tashkent');

        expect(input.value).toBe('Tashkent');
    });

    // test('calls the onChange callback handler', () => {
    //     const onClick = jest.fn();

    //     render(<Form onClick={onClick} />);
    //     const input = screen.getByRole('textbox');

    //     fireEvent.change(input, { target: { value: 'New York' } });

    //     const submitButton = screen.getByRole('button');

    //     fireEvent.click(submitButton);

    //     expect(onClick).toHaveBeenCalledTimes(1);
    // });
});


// test("calls the onChange callback handler", () => {
//     const onChange = jest.fn();

//     render(
//         <Search onChange={onChange}/>
//     );

//     fireEvent.change(screen.getByRole('textbox'), {
//         target: { value: 'Uzbekistan' },
//     });

//     expect(onChange).toHaveBeenCalledTimes(1);
// });