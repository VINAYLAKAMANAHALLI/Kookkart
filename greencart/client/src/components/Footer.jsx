import { assets, footerLinks } from "../assets/assets";

const Footer = () => {

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-amber-500 text-black">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-black">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
                    <p className="max-w-[410px] mt-6 text-black">
                        Your Trusted Home Appliance Partner

                     Making Homes Smarter, One Appliance at a Time

                     Quality You Can Rely On, Prices You'll Love

                     Bringing Comfort and Convenience to Your Home

                     Powered by Innovation. Driven by Trust.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-black">
                Copyright {new Date().getFullYear()} © KookKart All Right Reserved.
            </p>
        </div>
    );
};

export default Footer