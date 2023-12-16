import type { Metadata } from "next";

export const metadata: Metadata = {
    title       : 'About Title',
    description : 'This is the about page',
    keywords    : [
        'About Page',
        'Information',
        'Antonio'
    ],
};

export default function AboutPage() {

    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}