import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';

export default function Footer() {
    const services = ['Ceramic and Graphene coatings', 'Paint protection films', 'Body-shop (Denting & Painting)', 'Detailing and Interior cleaning', 'Wrap Jobs', 'Insurance Claim', 'Interior Modification', 'Other Services'];
    const services1 = [
        '* Under-body anti-rust coatings',
        '* Windshield and all glass polishing',
        '* Seat covers and Door pad leather upholstery',
        '* Steering, Gear knob and Gear bellow covers',
        '* 7D mats with custom stitchings',
        '* Headlight and taillight restorations',
        '* Body Washing and Vacuuming',
        '* Headliners replacement'
    ];

    return (
        <footer className="bg-black text-white py-6 flex flex-wrap justify-between">
            <div className="ml-20 w-80">
                <h3 className="text-lg font-bold mb-3">Services</h3>
                {services.map((service, index) => (
                    <p key={index} className="text-sm hover:text-gray-300">{service}</p>
                ))}
            </div>
            <div className="ml-20">
                <h3 className="text-lg font-bold mb-3">Other services</h3>
                {services1.map((item, index) => (
                    <p key={index} className="text-sm">{item}</p>
                ))}
            </div>
            <div className="ml-20 w-80">
                <h4 className="text-lg font-bold mb-3">Visit Store:</h4>
                {/* Embed Google Maps with the provided address */}
                <div style={{ width: '100%', height: '200px' }}>
                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0832316557026!2d-122.08396308448782!3d37.422478779859665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080ef6e1511%3A0x65971a5b0e612177!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1649871588600!5m2!1sen!2sus"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="text-sm mb-3">Address: HRW7+V3G, Parshawa Nagari, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411027</p>
            </div>
            <div className="w-full text-sm mt-4">
                <hr className="border-white w-full" />
                <div className="flex justify-between items-center mx-5 mt-2">
                    <h2 className="text-lg font-bold">© Sahara Motors 2024</h2>
                    <div className="flex gap-3">
                        <p><CallIcon /> 9881018886</p>
                        <p><AlternateEmailIcon /> ayubsayyad047@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
