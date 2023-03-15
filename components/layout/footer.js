import * as React from 'react';

const navigation = {
    company: [
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Mission',
            href: '/mission',
        },
        {
            name: 'Legal',
            href: '/legal',
        },
        {
            name: 'Audits',
            href: '/audits',
        },
    ],
    
    association: [
        {
            name: 'Membership',
            href: '/membership',
        },
        {
            name: 'Board Members',
            href: '/board-members',
        },
    ],
    
   resources: [
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Events',
            href: '/events',
        },
        {
            name: 'Reports',
            href: '/reports',
        },
    ],
    
    social: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/credmarkhq',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-0">
                <div className="xl:grid xl:grid-cols-3">
                    <div className="space-y-4 xl:col-span-1">
                        <div>
                            <img
                                className="h-auto flex justify-start my-2"
                                src="../assets/crypto-credit-logo-small.png"
                                width={224}
                                alt="Crypto Credit Association logo"
                            />
                        </div>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-ccaBlue" target="_blank" rel="noreferrer">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="text-base text-ccaBlue">&copy; 2023 Crypto Credit Association. All rights reserved.</p>
                    </div>
                    <div>
                    </div>
                    <div className="mt-12 xl:mt-0">
                        <div className="grid grid-cols-1 lg:flex lg:space-x-10">
                            <div>
                                <h4 className="text-xl font-light text-ccaBlue tracking-wider">Organization</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.company.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-ccaBlue">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        
                            <div>
                                <h4 className="text-xl font-light text-ccaBlue tracking-wider">Association</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.association.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-ccaBlue">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-light text-ccaBlue tracking-wider">About</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.resources.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-ccaBlue">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}