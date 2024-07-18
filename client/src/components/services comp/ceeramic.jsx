import Nav from "../home comp/nav";
import Footer from "../footer";
import React from "react";
import S1 from '../../images/ceramic.jpg';

export default function Ceramic() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Ceramic and Graphene coatings</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Ceramic Coating" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Advanced coatings derived with nano-technology that help prevent environmental damages on your car’s precious paint. These coatings form a 9H or 10H hard crystallized layer on top of your vehicle’s clear coat and provide resistance against light scratches, chemicals/acids, and also protect the paint against harmful UV rays. You will also experience hydrophobic properties with the application of these coatings, which would avoid water markings to a great extent. These coatings are available with 3, 5, and 7-year application warranty plans. Choose from a range of Body, Wheel, Glasses, and Plastic trim coatings here. Contact us by filling out the enquiry form and get your car ceramic coated today.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Note:</h3>
                    <ul className="text-lg text-gray-800">
                        <li className="mb-1">The life of coatings totally depends on the usage and handling of the vehicle.</li>
                        <li className="mb-1">No coating is scratch-proof, and daily care is utmost necessary for the best appearance of your vehicle.</li>
                        <li className="mb-1">Ceramic coatings are built to resist light damages. To get the best life out of a ceramic coat, use clean microfibers and less TDS water for daily wiping and washing needs.</li>
                        <li className="mb-1">An annual maintenance is necessary for ceramic coated cars. This service is payable and helps get rid of damages and contaminants as much as possible.</li>
                        <li className="mb-1">Maintenance charges may change as per inflation and fluctuation in material pricing, and its periodicity depends purely on usage and daily care from the customer’s end.</li>
                        <li className="mb-1">Discoloration, Patchiness, and Peeling/Cracking of the coating are covered under application warranty. Ceramic coating’s warranty is not applicable on 3rd party painted panels.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
