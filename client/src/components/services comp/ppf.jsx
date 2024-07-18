import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/paint-protection.jpg';
import React from "react";

export default function Ppf() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Paint Protection Films</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Paint Protection Films" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                    <div className="mb-5">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Famously known as PPF, this transparent high-gloss film is the most advanced and rugged protection that you can offer your vehicle. Afraid of being keyed by the neighbors' kids, or just worried that your better half might scratch the bumper in the parking? Well, PPF will help prevent almost all deep scratches and gashes with its thick layer of protection. We offer self-healing thermo-plastic polyurethane (TPU) PPF which completely heals all swirl marks or superficial scratches that appear due to improper washing. PPF prevents almost every possible scratch from reaching the paint.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Paint protection films come with 5, 7, and 10-year warranty plans. Choose from a range of Wheel, Glasses, and Plastic trim coatings along with your PPF requirements here. Contact us by filling out the enquiry form and get your car protected with PPF today.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Note:</h3>
                    <ul className="text-lg text-gray-800 list-disc pl-8">
                        <li>The given warranty on the applied film is provided by the company (or brand) of which the product has been applied, and the final decision of claims lie with the brand.</li>
                        <li>Considering Indian circumstances, minor dust specs may arise during application, but we make sure that we deliver the vehicle as per acceptable standards.</li>
                        <li>Ceramic coatings are built to resist light damages. To get the best life out of a ceramic coat, use clean microfibers and less TDS water for daily wiping and washing needs.</li>
                        <li>PPF application includes a 2D film being applied on a 3D surface and thus the film has to be stretched at certain corners for best adhesion. Thus few stretch marks are unavoidable.</li>
                        <li>We use the best branded TPU films which have self-healing abilities. But this property works only on minor swirl marks that arise due to improper washing practices. Deep scratches don’t heal but in most cases, PPF protects the paint from them.</li>
                        <li>Due to age and oxidation, PPF just like anything else, ages and suffers environmental damage. With time, slight yellowness is unavoidable but unlike cheap quality PPF, this yellowness does not happen instantly.</li>
                        <li>The adhesion of PPF is very strong and it may cause problems on re-painted panels when removed. Although this risk could be reduced with good painting workmanship. Hence warranties are not applicable on repainted panels.</li>
                        <li>PPF application is a complex process and depending on the size and shape of the panel, a few times we as applicators have to decide to put a joint on the film applied. We try to avoid this as much as possible but certain times it is mandatory.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
