import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/Customization 1.jpg';
import React from "react";

export default function Mod() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Interior Modification</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Interior Modification" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Advanced coatings derived with nano-technology that help prevent environmental damages on your car’s precious paint. These coatings form a 9H or 10H hard crystallized layer on top of your vehicle’s clear coat and provide resistance against light scratches, chemicals/acids, and also protect the paint against harmful UV rays. You will also experience hydrophobic properties with the application of these coatings, which would avoid water markings to a great extent. These coatings are available with 3, 5, and 7-year application warranty plans. Contact us by filling out the enquiry form and get your car modified today.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
