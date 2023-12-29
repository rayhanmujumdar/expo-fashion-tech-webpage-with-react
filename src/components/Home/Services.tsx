import customersServiceIcon_1 from '../../assert/SVG/service-icon-1.svg'
import customersServiceIcon_2 from '../../assert/SVG/service-icon-2.svg'
import customersServiceIcon_3 from '../../assert/SVG/service-icon-3.svg'
import { TService } from '../../interface/services'
import Service from './Service'

const servicesItems: TService[] = [
    {
        name: 'CUSTOMERS',
        logo: customersServiceIcon_1,
        description: "Technical Designers, Fashion Designers, pattern makers, Fashion students, Fashion merchandisers, Print designers, DIY Sewing  community, Pattern retailers, Apparel manufacturers, Graphic designers, Fashion buyers and others."
    },
    {
        name: 'BECOME A SELLER',
        logo: customersServiceIcon_2,
        description: "Want to sell your product? First, you have to create an account and complete all tasks as it is given. Effortlessly create your own designs and add to an existent e-commerce website."
    },
    {
        name: 'OUR COLLECTIONS',
        logo: customersServiceIcon_3,
        description: "Here you get all types of product for men, women & kids. It generates different types of patterns, print cut sheets on tops & bottoms. These templates allow you to find original designs with tech pack. It allows previewing 3D garment samples, flat sketches and made-to-measure sewing patterns, ready to download, cut and sew."
    }
]

export default function Services() {
    return (
        <div
            className="grid grid-cols-3 justify-between items-start gap-x-20 py-32 border-y border-gray-500 my-5"
        >
            {
                servicesItems.map((service: TService) => <Service key={Math.random()} service={service} />)
            }
        </div>
    )
}
