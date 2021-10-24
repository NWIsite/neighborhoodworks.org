import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAboutUs() {
  const postFiles = getPostsFiles();

  const AboutUs = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = AboutUs.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts() {
  const AboutUs = getAboutUs();

  const featuredPosts = AboutUs.filter(post => post.isFeatured);

  return featuredPosts;
}