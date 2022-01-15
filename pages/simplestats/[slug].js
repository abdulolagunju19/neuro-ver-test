import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import SimpleStatsLayout from '../../layouts/simplestats'
import MDXComponents from '../../components/MDXComponents'
import "animate.css"

export default function SimpleStats({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <div className= "animate__animated animate__fadeIn animate__delay-1s"><SimpleStatsLayout frontMatter={frontMatter}>{content}</SimpleStatsLayout></div>
}

export async function getStaticPaths() {
    const posts = await getFiles('simplestats')

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
    const post = await getFileBySlug('simplestats', params.slug)

    return { props: post }
}
