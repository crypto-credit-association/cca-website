import { getAllPosts } from "../lib/api"
import BlogCard from '../components/blog/blogCard'
import Nav from '../components/layout/nav'
import moment from 'moment'
import Footer from "../components/layout/footer"

import React from "react";
import { useState } from "react"
import Head from 'next/head'


export default function BlogPage({ posts }) {

    return (
        <>
            <Head>
                <title>Blog | Crypto Credit Association</title>
                <meta content="Blog | Crypto Credit Association" property="og:title" key="og:title" />
                <meta name="description" content="Welcome to the Crypto Credit Association blog. Subscribe to find out about company updates and industry research." />
                <meta property="og:image" content="https://Crypto Credit Association.com/assets/Crypto Credit Association-og-image.png" />
                <link rel="icon" href="/favicon.ico" />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </Head>
            <div className="nav">
                <BlogPageContent posts={posts} />
            </div>
        </>
    )
}

function BlogPageContent({ posts }) {
    const [filteredPosts, setFilteredPosts] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    React.useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post) => post.blogcategory === selectedCategory)
            );
        }
    }, [selectedCategory]);

    const [filter, setFilter] = useState({
        view: { list: 0 }
    });

    return (
        <div>
            <div>
                <Nav />
            <div className="bg-ccaBlue">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="text-white font-bold text-5xl md:text-7xl py-5 pt-16 md:py-32">CCA Blog</h1>
                </div>
            </div>
            </div>

            <div className="advisorBg">
                <div className="max-w-6xl block m-auto px-4 pt-10 pb-20 md:pb-40">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts?.map(post =>
                            filter.view.list ?
                                <div key={`${post.slug}-list`}>
                                    <BlogCard
                                        title={post.title}
                                        subtitle={post.subtitle}
                                        date={moment(post.date).format('YYYY/MM/DD')}
                                        author={post.author}
                                        category={post.category}
                                        slug={post.slug}
                                        link={{
                                            href: `/blog/${post.slug}`
                                        }} />
                                </div>
                                :
                                <BlogCard
                                    key={`${post.slug}-list`}
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    date={moment(post.date).format('YYYY/MM/DD')}
                                    img={post.mainImage}
                                    author={post.author}
                                    category={post.category}
                                    slug={post.slug}
                                    link={{
                                        href: `/blog/${post.slug}`
                                    }}
                                />
                        )
                        }
                    </div>
                </div>
            </div>
           <Footer />
        </div>

    );
}

// this function is called during build time (always called on the server)
//provides props to the page
export async function getStaticProps() {
    const posts = await getAllPosts({ offset: 0 });
    return {
        props: {
            posts
        }
    }
}