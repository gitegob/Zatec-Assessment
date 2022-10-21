import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content="Search and find out more about houses in game of thrones"
                />
                <link rel="icon" href="/public/gotlogo.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
