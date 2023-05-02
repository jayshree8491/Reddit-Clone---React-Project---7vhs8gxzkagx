import { render, screen } from '@testing-library/react';
import App from './App';

import Posts from './Posts';

test('renders a list of posts', async () => {
  // Render the Posts component
  render(<Posts />);

  // Wait for the component to load
  const postsList = await screen.findByRole('list');

  // Check that there are at least two posts in the list
  const posts = postsList.querySelectorAll('li');
  expect(posts.length).toBeGreaterThanOrEqual(2);
});
