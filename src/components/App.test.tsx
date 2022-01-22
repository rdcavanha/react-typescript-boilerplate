import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App/>', () => {
  it('renders app correctly', () => {
    render(<App />);

    expect(screen.getByTestId('hello-world')).toHaveTextContent('Hello World!');
  });
});
