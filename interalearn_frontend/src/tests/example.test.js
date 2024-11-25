import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Data from API/i); // Adjust based on actual text in App component
  expect(headerElement).toBeInTheDocument();
});
