export const Image = () => {
    return(
        <section className=" mb-10">
    <header className="mt-20 flex justify-center font-extrabold text-3xl">
        Images représentant le projet terminé 
    </header>
    <image className="flex justify-between items-center">
    <div className="mt-20 ml-20 ">
    <h1 className=" mr-10 mt-10 text-xl font-extrabold ">Image repésentant le projet finit</h1>
    <img className="  mt-10 w-80 " src='images/SI.jpg' alt="" /> 
    </div>  
    <div className="mt-20 ml-20">
    <h1 className="ml-10 mt-10 text-xl font-extrabold "> Image de design que l'on pourrait réaliser </h1>
    <img className="mt-8 ml-10 w-80" src="images/main.jpg" alt="" />
    </div>
    </image>
        </section>
    )
}