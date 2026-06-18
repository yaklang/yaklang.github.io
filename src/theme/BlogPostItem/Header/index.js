import React from "react";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import styles from "./styles.module.css";

// Compact authors rendered inline with the date/reading-time line, keeping a
// professional and tight byline instead of the default large avatar block.
function InlineAuthors() {
    const { metadata, assets } = useBlogPost();
    const authors = metadata.authors ?? [];
    if (authors.length === 0) {
        return null;
    }
    return (
        <span className={styles.authors}>
            {authors.map((author, idx) => {
                const imageURL =
                    assets?.authorsImageUrls?.[idx] ?? author.imageURL;
                const link =
                    author.page?.permalink ||
                    author.url ||
                    (author.email ? `mailto:${author.email}` : undefined);
                const body = (
                    <>
                        {imageURL && (
                            <img
                                className={styles.avatar}
                                src={imageURL}
                                alt={author.name ?? ""}
                                loading="lazy"
                            />
                        )}
                        {author.name && (
                            <span className={styles.name} translate="no">
                                {author.name}
                            </span>
                        )}
                    </>
                );
                return (
                    <span className={styles.author} key={idx}>
                        {link ? (
                            <Link href={link} className={styles.authorLink}>
                                {body}
                            </Link>
                        ) : (
                            body
                        )}
                    </span>
                );
            })}
        </span>
    );
}

export default function BlogPostItemHeader() {
    return (
        <header>
            <BlogPostItemHeaderTitle />
            <div className={styles.meta}>
                <BlogPostItemHeaderInfo className={styles.info} />
                <InlineAuthors />
            </div>
        </header>
    );
}
