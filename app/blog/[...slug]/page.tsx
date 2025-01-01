import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-component";
import { notFound } from "next/navigation";

interface PostPageProps {
    params: {
        slug: string[];
    }
}

async function getPostFromParams(params: PostPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = posts.find((post) => post.slugParams === slug);
    return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({
        slug: post.slugParams.split("/"),
    }));

}

export default async function PostPage({ params }: PostPageProps) {

    const post = await getPostFromParams(params);
    console.log(post);

    if (!post || !post.published) {
        notFound();
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            {post.description ? (<p className="text-xl text-muted-foreground">{post.description}</p>): null}
            <hr className="my-4"></hr>
            <MDXContent code={post.body} />
        </article>
    );
}