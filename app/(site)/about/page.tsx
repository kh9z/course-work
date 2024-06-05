import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const About = () => {
    return (
        <div className="w-[95%] mx-auto max-w-[1450px]">
            <div className="relative h-[500px] w-full">
                <Image src="/assets/about.jpg" fill alt="about image" className="object-cover"/>
                <Overlay/>
                <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
                    About us
                </h1>
            </div>
            <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, inventore minima optio rerum
                    tempore vel! Animi culpa ipsa molestias nemo nulla perferendis quo unde? Amet consectetur,
                    cupiditate doloremque dolores et facilis ipsam mollitia natus non officiis placeat quibusdam,
                    reiciendis saepe vero voluptate. Laboriosam natus quibusdam voluptate. Aperiam aut cupiditate
                    debitis delectus distinctio eaque est eum explicabo facilis impedit minima, nostrum pariatur
                    perspiciatis, recusandae similique suscipit velit. Ab accusantium animi cum ea, ex ipsam itaque quis
                    rerum sit. Culpa eum explicabo nostrum quia vero? Assumenda autem, debitis magnam nam quas quia
                    repellendus suscipit velit. Accusantium consequatur debitis dolorem ducimus ea earum est eum eveniet
                    hic impedit ipsam iure labore molestiae molestias nulla numquam officia, optio quaerat quas sit
                    tenetur vel velit voluptatem! Animi aperiam aspernatur delectus doloribus expedita numquam
                    perferendis rem reprehenderit sapiente. Aliquam corporis earum, illo impedit laudantium
                    necessitatibus nobis perspiciatis possimus, quas qui quis soluta vitae? Ab accusamus, assumenda
                    autem cumque doloribus, excepturi in, inventore iusto labore laboriosam minus nisi odit provident
                    vel veniam. A, consequatur delectus dignissimos dolores eos fugit iure maiores numquam provident sed
                    sunt, tempora tempore, veritatis! Animi architecto consectetur distinctio, doloribus explicabo,
                    iusto nihil perferendis quis soluta, sunt voluptas voluptates! Iste laboriosam recusandae
                    tenetur.
                </p>
                <div className="w-full items-center flex justify-center">
                    <Image src="/assets/signature.png" alt="signature" width={500} height={500}/>
                </div>
            </div>
        </div>
    )
};

export default About;