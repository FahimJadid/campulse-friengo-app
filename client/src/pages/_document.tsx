// We're importing a special function from a library that helps with handling initial props.
import { createGetInitialProps } from '@mantine/next';

// We're also importing necessary components from Next.js for creating the HTML document.
import Document, { Head, Html, Main, NextScript } from 'next/document';

// We're using the function we imported to handle initial props.
const getInitialProps = createGetInitialProps();

// We're defining a new class that extends the built-in Document class from Next.js.
export default class _Document extends Document {
  // We're setting the getInitialProps method of our class to use the function we imported.
  static getInitialProps = getInitialProps;

  // This method is responsible for rendering the HTML structure of our application.
  render() {
    return (
      <Html>
        {/* This is where we define the metadata of our HTML document, like title, links, and scripts. */}
        <Head />
        <body>
          {/* The Main component represents the main content of our app. */}
          <Main />
          {/* The NextScript component includes important scripts needed for the app to work. */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
