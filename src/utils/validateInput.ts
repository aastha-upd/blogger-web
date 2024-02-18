import { BlogPost } from "../types";

export function validateBlogPost(blogPost: Partial<BlogPost>): boolean {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)*[\w-]+(:\d+)?(\/\S*)?$/;

    return (
        blogPost.id !== undefined &&
        blogPost.title !== undefined && blogPost.title.trim() !== '' &&
        blogPost.image !== undefined && blogPost.image.trim() !== '' && urlPattern.test(blogPost.image) &&
        blogPost.excerpt !== undefined && blogPost.excerpt.trim() !== '' &&
        blogPost.author !== undefined && blogPost.author.trim() !== '' &&
        blogPost.content !== undefined && blogPost.content.trim() !== ''
    );
}