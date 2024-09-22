import { Link } from "react-router-dom";

const footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center ">
                    <p className="text-white text-xl mb-0">&copy; 2024 Esenyurt Veteriner. All rights reserved.</p>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex gap-4">
                            <li><Link href="#" className="hover:text-primary text-white text-lg">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary text-white text-lg">Terms of Service</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
      </footer>
    );
}
 
export default footer;