import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Typewriter } from "nextjs-simple-typewriter";
import Link from "next/link";
import { cn, sortBlogPosts } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortBlogPosts(posts).slice(0, 5);
  return (
    <>
      <section className="flex flex-col items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m{" "}
            <Typewriter
              words={["Carmine", "a Full Stack Web Dev", "a CS Student"]}
              loop={5}
              cursor
              cursorStyle="_"
              cursorBlinking
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl">
            Welcome to my blog where I share my thoughts and tutorials on web
            development, productivity, and more.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my Blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-6 py-6 lg:py-10">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl mb-2">
            Latest Posts
          </h2>
          <ul className="flex flex-col w-full max-w-2xl space-y-4">
            {latestPosts.map((post) => (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
