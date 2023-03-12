import { getBlogBySlug, getAllPosts } from '../../lib/api';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';
import Head from 'next/head'
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
            <head>
               
            </head>
            <div className="nav">
                <BlogDetail post={post} />
            </div>
        </>
    )
}

const BlogDetail = ({ post }) => {
    return (
        <>  
            <div className="bg-white pb-10 max-w-3xl mx-auto px-5 md:px-0">
                <div>               
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