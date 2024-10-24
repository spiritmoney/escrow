import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function page() {
    return (
        <main className="w-full">
            <Navbar />
            <Header />
            <Tabs />
            <Footer />
        </main>
    );
}