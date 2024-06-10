import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import Button from "@/components/ui/Button";
import Map from "@/components/ui/Map"

const Contact = () => {
    return (
        <div>
            <div className="relative h-[500px] w-full">
                <Image src="/assets/contact.jpg" fill alt="contact image" className="object-cover"/>
                <Overlay/>
                <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
                    зв'яжіться з нами
                </h1>
            </div>
            <div className="p-10 leading-8 text-lg mt-10 relative m-auto rounded-lg text-center">
                <h1 className="text-4xl font-extrabold w-full text-center uppercase text-primary mb-10">
                    Давайте обговоримо
                </h1>
                <form className="flex flex-col w-full gap-5 ">
                    <div className="flex gap-5 max-sm:flex-col">
                        <input type="text" placeholder="Ім'я"
                               className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                        <input type="email" placeholder="Email"
                               className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                    </div>
                    <div className="flex gap-5 max-sm:flex-col">
                        <input type="text" placeholder="Тема"
                               className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                        <input type="tel" placeholder="Телефон"
                               className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Повідомлення" rows={8}
                                  className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                    </div>
                    <div className="flex justify-center">
                        <Button text="Submit" aria="submit contact form"/>
                    </div>
                </form>
            </div>
            <Map/>
        </div>
    )
};

export default Contact;