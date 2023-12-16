import type { Metadata } from 'next';

export const metadata: Metadata = {
    title       : 'Pricing Title',
    description : 'This is the pricing page',
    keywords    : [
        'Pricing Page',
        'Information',
        'Antonio'
    ],
}

export default function PricingPage() {

    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}