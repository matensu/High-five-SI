import  { About } from "../components/About";
import { SocialLinks } from "../components/SocialLinks";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";
import { Image } from "../components/Image";

export const Ressourcesprojet = () => {
    return (
        <main className="bg-cover text-gray-300" style={{ backgroundColor:'#00BD86' }}>
            <div >
            <About/>
            <Video id="oSfXIYTfQxQ"/>
            <SocialLinks/>
            <Image/>
            <Footer/>
            </div> 
        </main>
    )
}