import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'
import "animate.css"

export default function Blog({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <div className= "animate__animated animate__fadeIn"><BlogLayout frontMatter={frontMatter}>{content}</BlogLayout></div>
}

export async function getStaticPaths() {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('blog', params.slug)

    return { props: post }
}
