import Nav from "../home comp/nav";
import Footer from "../footer";
import S1 from '../../images/servies.jpg';
import React from "react";

export default function Other() {
    return (
        <>
            <Nav />
            <div className="mt-10 p-20 list-disc gap-3">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-5">Others</h1>
                    <div className="w-full max-w-lg mx-auto">
                        <img src={S1} alt="Other Services" className="h-auto w-full rounded-lg shadow-md" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">We even offer other crucial services such as:</h3>
                    <ul className="text-lg text-gray-800 list-disc pl-8">
                        <li>Under-body anti-rust coatings</li>
                        <li>Windshield and all glass polishing</li>
                        <li>Seat covers and Door pad leather upholstery</li>
                        <li>Steering, Gear knob, and Gear bellow covers</li>
                        <li>7D mats with custom stitching</li>
                        <li>Headlight and taillight restorations</li>
                        <li>Body Washing and Vacuuming</li>
                        <li>Headliners replacement</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
