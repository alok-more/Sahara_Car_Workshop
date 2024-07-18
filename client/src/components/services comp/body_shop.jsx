import Nav from "../home comp/nav";
import Footer from "../footer";
import React from "react";
import S1 from '../../images/denting.jpg';

export default function BodyShop() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5 font-color-black">Body-shop (Denting & Painting)</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Body-shop" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We provide A-grade painting services across all types and categories of cars available in the market. It could be a panel of your new car, a complete outer body paint job for a decently aged vehicle, a custom color paint job of your choice or maybe even a hardcore restoration of your old family’s car; we are here to help you out. Our experienced staff puts utmost attention into bringing out the best possible finish on your car’s paint. We diligently follow all required protocols and focus on delivering an exceptional experience that you probably might not have had at the body shop before. Our paint jobs come with a 2-year application warranty and if taken good care of, the paint can easily last you a decade.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Choose from a range of Body, Wheel, Glasses, Plastic trim coatings, and Paint protection films after the Paint job, here at Brotomotiv. Full-body paint jobs get discounts on detailing and paint protection services. Contact us by filling out the enquiry form and get your car painted today.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Note:</h3>
                    <ul className="text-lg text-gray-800">
                        <li className="mb-1">Heavily rusted vehicles or vehicles which have been painted multiple times before will not be covered under warranty.</li>
                        <li className="mb-1">We provide a 6-month warranty on Rusting, 1-year warranty on Blistering, Cracking, Peeling & Paint adhesion, and a 3-year warranty on Clear coat failure and/or Paint failure.</li>
                        <li className="mb-1">Paint shrinkage is normal and acceptable on cars with heavy base work. However, cracking and peeling of paint in such cars are still covered under warranty.</li>
                        <li className="mb-1">The life of the paint is totally dependent on the usage and maintenance by the customer.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
