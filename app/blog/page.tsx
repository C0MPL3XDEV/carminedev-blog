import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortBlogPosts } from "@/lib/utils";

export default async function BlogPage() {

    const sortedPosts = sortBlogPosts(posts.filter((post) => post.published));
    const displayPosts = sortedPosts;

    return ( 
    <div className="container max-w-4xl py-6 lg:py-10 px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4 px-6">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    Blog
                </h1>
                <p className="text-xl text-muted-foreground">My ramblings on all things web dev</p>
            </div>
        </div>
        <hr className="mt-8" />
        {displayPosts?.length > 0 ? (
                <ul className="flex flex-col px-6">
                    {displayPosts.map(post => {
                        const { slug, title, description, date } = post;
                        return (
                            <li key={slug} className="py-4">
                                <PostItem slug={slug} title={title} description={description} date={date} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className="px-6">Nothing to see here yet</p>
        )}
    </div>
    );
}