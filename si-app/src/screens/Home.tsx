import  { About } from "../components/About";
import { SocialLinks } from "../components/SocialLinks";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";
import { Image } from "../components/Image";



export const Home = () => {
    return (
        <main className="text-gray-300">
            <div>
            <link rel="icon" href="../build/favicon.ico" />
            <About/>
            <Video id="oSfXIYTfQxQ"/>
            <SocialLinks/>
            <Image/>   
            <Footer/>
            </div> 
        </main>
    )
}