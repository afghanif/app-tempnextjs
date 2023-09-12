import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="css/style.css" />
          <script src="js/darkMode.bundle.js"></script>
        </Head>
        <body className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
