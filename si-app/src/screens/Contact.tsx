import { Footer } from "../components/Footer";
import { SocialLinks } from "../components/SocialLinks";

export const Contact = () => {
    return(
        <main className="h-screen flex flex-col justify-between text-gray-300 ml-20">
            <h3 className="text-2xl font-extrabold mt-10 mb-30">Contact:</h3>
            <SocialLinks/>
            <p className="text-xl font-extrabold"> Email de notre projet </p>
            <div>
            
            <Footer/>
            </div>
        </main>
    )
}