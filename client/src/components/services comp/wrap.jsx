import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/ceramic.jpg';
import React from "react";

export default function Wrap() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Wrap Jobs</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Wrap Jobs" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Vinyl wrapping brings a new custom look to your car, without tampering with the OEM paint job. We provide wrapping services with almost 300+ colors and shades available with the best-in-league finish and application. It could be a simple sports stripe across the bonnet, a dual-tone look for your new car, or maybe a complete color swap with a fascinating shade that your OEM supplier couldn’t offer, we are here to help. Our wrap jobs come with a 2-year application warranty.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            This service is usually recommended for cars that are in good shape and want to do something different, at the same time keeping the original paint intact. Choose from a range of Wheel, Glasses, and Plastic trim coatings along with your wrap job, here at Brotomotiv. Contact us by filling out the enquiry form and get your car ceramic coated today.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Note:</h3>
                    <ul className="text-lg text-gray-800 list-disc pl-8">
                        <li>We use only the best-in-class material for wrapping.</li>
                        <li>Changing color requires correction on the car’s RC, through your local RTO.</li>
                        <li>Post-care is utmost necessary with wrapping. Pressure washing and aggressive cleaning may tamper with the edges and result in opening of the film from certain areas.</li>
                        <li>Application warranty covers natural peeling of the material. Customer’s mishandling or abuse of the material shall not be covered under warranty.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
