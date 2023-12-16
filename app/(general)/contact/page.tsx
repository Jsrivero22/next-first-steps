import { Metadata } from "next"

export const metadata: Metadata = {
    title       : 'Contact Title',
    description : 'This is the contact page',
    keywords    : [
        'Contact Page',
        'Information',
        'Antonio'
    ],
}

export default function ContactPage() {

    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}