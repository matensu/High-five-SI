import { Footer } from "../components/Footer";
export const Ressources = () => {
    return(
        <main className="h-screen flex flex-col justify-between text-gray-300">
            <div>
            <h3 className="text-2xl font-extrabold mb-4 flex justify-center">Ressource du projet high five</h3>
            <ul className="text-xl  flex items-center">
                <li><a className="hover:underline ml-10" href="a">ressource projet</a></li>
                <li><a className="hover:underline ml-10" href="https://e-nable.fr/fr/">site E-nable </a></li>
                <li><a className="hover:underline ml-10" href="https://e-nable.fr/fr/fabriquer/devenir-maker/">ressource E-nable</a></li>
            </ul>
            </div>
            <Footer/>
        </main>
    )
}