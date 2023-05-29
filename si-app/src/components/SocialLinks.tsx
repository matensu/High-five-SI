// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaInstagram, FaTiktok,FaMailBulk } from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section className="mt-10">
            <h3 className="text-2xl font-extrabold ml-5 text-white">Nos Réseaux Sociaux:</h3>
            <ul className="mt-5 ml-5 text-xl font-semibold">
                <li className='flex items-center'><FaTiktok></FaTiktok><a className="ml-2 hover:underline" href="https://www.tiktok.com/@_highfive.si_"> tiktok</a></li>
                <li className='flex items-center'><FaInstagram></FaInstagram><a className="ml-2 hover:underline" href="https://www.instagram.com/_highfive.si_/?igshid=YmMyMTA2M2Y%3D">instagram</a></li>
                <li className='flex items-center'><FaMailBulk/><a className="ml-2 hover:underline" href="/contact">mail</a></li>
            </ul>
        </section>
    )
    
}