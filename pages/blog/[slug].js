import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/nav';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Head from 'next/head'
import Footer from '../../components/layout/footer'
import React from 'react';


const serializers = {
    types: {
        code: (props) => {
            return (
                <div className="bg-black text-white p-7 rounded-md code">
                    <SyntaxHighlighter
                        useInlineStyles={false}
                        language={props.node.language}>
                        {props.node.code}
                    </SyntaxHighlighter>
                </div>
            )
        },
    },
}


export default function BlogPostPage({ post }) {

    return (
        <>
            <Head>
                <title key="title">{post.title} | Blog | Crypto Credit Association</title>
                <meta name="description" content={post.description} />
                <meta content={`${post.title} | Blog | Crypto Credit Association`} property="og:title" key="og:title" />
                <meta content={`${post.title} | Blog | Crypto Credit Association`} name="twitter:title" key="twitter:title" />
                <meta content={post.description} property="og:description" key="og:description" />
                <meta property="og:image" content={post.mainImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CC_Assoc" />
                <meta name="twitter:title" content={`${post.title} | Blog | Crypto Credit Association`} />
                <meta name="twitter:description" content={post.description} />
                <meta name="twitter:image" content={post.mainImage} />
                <meta content={post.mainImage} name="twitter:image" key="twitter:image" />

                {post.mainImage && (
                    <>
                        <meta content={post.mainImage} property="og:image" key="og:image" />
                        <meta
                            content={post.mainImage}
                            property="og:image:secure_url"
                            key="og:image:secure_url"
                        />
                        <meta content={post.mainImage} name="twitter:image" key="twitter:image" />
                    </>
                )}
            </Head>
            <div className="nav">
                <BlogDetail post={post} />
            </div>
        </>
    )
}

const BlogDetail = ({ post }) => {
    return (
        <>
            <Nav />
            <div>
            <div className="bg-white pb-10 max-w-4xl mx-auto my-10 px-5 lg:px-10">
                <div>
                    <h1 className="leading-snug text-ccaBlue pt-10 md:pt-20 text-5xl pb-5">{post.title}</h1>
                    <h3 className="leading-snug text-ccaBlue font-light text-3xl pb-5">{post.subtitle}</h3>
                    <div className="flex">
                        <div>
                            <p className="text-ccaBlue text-base float-left pb-5 font-semibold">{post.author}</p>
                        </div>
                    </div>
                    <img className="mb-10" id="blogPage" src={post.mainImage} />
                    <BlockContent
                        className="border-box border-2 rounded-md border-gray-300 p-4"
                        serializers={serializers}
                        blocks={post.border}
                        {...sanity.config()} />
                    <BlockContent
                        className="blog sanity-block text-left leading-loose"
                        serializers={serializers}
                        blocks={post.content}
                        {...sanity.config()} />
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = await getBlogBySlug(params.slug);
    return {
        props: { post }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
        paths: posts?.map(posts => ({ params: { slug: posts.slug } })),
        fallback: false
    }
}
