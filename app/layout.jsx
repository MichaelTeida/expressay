import '@styles/global.css'
import Nav from "@components/Nav";
import Provider from "@components/Provider";

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
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;