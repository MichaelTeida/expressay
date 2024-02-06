import '@styles/global.css'

export const metadata = {
    title: "Expressay",
    description: "Express yourself to the audience"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div class="gradient"/>
                </div>

                <main class="app">
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;