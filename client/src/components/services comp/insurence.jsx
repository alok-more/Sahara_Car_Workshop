import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/insurance.jpg';
import React from "react";

export default function Insurance() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Insurance Claims</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Insurance Claims" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Getting your brand new car painted just because of a small accident could be a hassle. Claiming insurance and getting the right quality paint job is what worries most people. We offer cashless insurance claims with almost all available companies in the market, which means you can easily drop off your car at our body-shop and let us take care of the rest. We handle insurance claims with just as much attention and honesty as we handle our custom paint jobs. We promise Grade-A material application and the best possible finish on your car.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
