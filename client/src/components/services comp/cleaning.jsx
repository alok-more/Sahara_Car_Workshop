import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/interior.jpeg';
import React from "react";

export default function Clean() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Detailing and Interior cleaning</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Interior Cleaning" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            If your car is dull with swirl marks, full of hard water scales and pretty dusty after the last family trip, then a thorough car detailing service is what you should be looking for. We provide Ceramic and Graphene induced wax, Rubbing & Polishing, Premium washing, Vacuum cleaning, and Deep interior cleaning services at our Detailing center. As the name suggests, we focus on the details and bringing out the best possible look of your car in the most affordable and competitive prices possible.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
