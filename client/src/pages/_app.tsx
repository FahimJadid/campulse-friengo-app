// We're using a special type from Next.js that helps with managing application properties.
import type { AppProps } from 'next/app'

// Importing a special component from Mantine, a library that helps with frontend styles and themes.
import { MantineProvider } from '@mantine/core';

// Defining the main component for our application.
// It receives two important properties: `Component` and `pageProps`.
export default function App({ Component, pageProps }: AppProps) {
  // This is where we set up the styling and theme for our application using Mantine.
  // Think of it like customizing the look and feel of our app.
  return (
    <MantineProvider
      withGlobalStyles  // This adds some general styles to our app to make it look consistent.
      withNormalizeCSS  // This helps ensure that our styles work well across different browsers.
      theme={{
        // Here we can make changes to how our app looks, like choosing a light color scheme.
        colorScheme: 'light',
      }}
    >
      {/* Now we render the main content of our application using the Component and pageProps. */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}
