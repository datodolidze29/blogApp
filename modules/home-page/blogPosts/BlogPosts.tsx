import { useState } from 'react'
import Image from 'next/image'

import styles from './BlogPosts.module.scss'
import data from './data.json'

import { BsDot } from 'react-icons/bs'



export const RecentBlogs = () => {
    const recentDataSlice = data.slice(0,3)
    const mainBlog = recentDataSlice[0]
    return(
        <div className={styles.recentBlogs}>
            <div className={styles.mainRecentBlog}>
                {/* <Image
                src={mainBlog.image_url}
                alt='Recent Blog'
                width={594}
                height={228}
                className={styles.mainBlogImage}
                /> */}
                <div className={styles.mainRecentBlogContent}>
                    <span className={styles.blogAuthor}>{mainBlog.author} <BsDot color='#6941C6'/> {mainBlog.date}</span>
                    <div className={styles.blogHeader}>
                        <h1>{mainBlog.title}</h1>
                        <p>{mainBlog.description}</p>
                    </div>
                    <div className={styles.keywordsWrapper}>
                        {
                            mainBlog.keywords.map((keyword) => (
                                <div className={styles.keywordContainer}>
                                    <p>{keyword}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.secondaryRecentBlogs}>
                <div className={styles.secondaryWrapper}>
                    <Image
                    src={recentDataSlice[1].image_url}
                    alt='recent'
                    width={320}
                    height={200}
                    className={styles.secondaryWrapperImage}
                    />
                    <div className={styles.secondaryWrapperContent}>
                        <span className={styles.blogAuthor}>{recentDataSlice[1].author} <BsDot color='#6941C6'/> {recentDataSlice[1].date}</span>
                        <div className={styles.secondaryWrapperHeader}>
                            <h1>{recentDataSlice[1].title}</h1>
                            <p>{recentDataSlice[1].description}</p>
                        </div>
                        <div className={styles.keywordsWrapper}>
                            {
                                recentDataSlice[1].keywords.map((keyword) => (
                                    <div className={styles.keywordContainer}>
                                        <p>{keyword}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.secondaryWrapper}>
                    <Image
                    src={recentDataSlice[2].image_url}
                    alt='recent'
                    width={320}
                    height={200}
                    className={styles.secondaryWrapperImage}
                    />
                    <div className={styles.secondaryWrapperContent}>
                        <span className={styles.blogAuthor}>{recentDataSlice[2].author} <BsDot color='#6941C6'/> {recentDataSlice[2].date}</span>
                        <div className={styles.secondaryWrapperHeader}>
                            <h1>{recentDataSlice[2].title}</h1>
                            <p>{recentDataSlice[2].description}</p>
                        </div>
                        <div className={styles.keywordsWrapper}>
                            {
                                recentDataSlice[2].keywords.map((keyword) => (
                                    <div className={styles.keywordContainer}>
                                        <p>{keyword}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

const BlogPosts = () => {
    return(
        <div className={styles.mainWrapper}>
            <RecentBlogs/>
            <div className={styles.blogPosts}>
                <div className={styles.header}>
                    <h1>All blog posts</h1>
                </div>
                <div className={styles.blogsWrapper}>
                    {
                        data.map((blog) => (
                            <div className={styles.blogContainer}>
                                <div className={styles.blogImage}>
                                    <Image 
                                    src={blog.image_url}
                                    alt='Blog Image'
                                    width={384}
                                    height={240}
                                    // layout='responsive'
                                    className={styles.blogImg}
                                    />
                                </div>
                                <div className={styles.blogContent}>
                                    <span className={styles.blogAuthor}>{blog.author} <BsDot color='#6941C6'/> {blog.date}</span>
                                    <div className={styles.blogHeader}>
                                        <h1>{blog.title}</h1>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                                <div className={styles.keywordsWrapper}>
                                    {
                                        blog.keywords.map((keyword) => (
                                            <div className={styles.keywordContainer}>
                                                <p>{keyword}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default BlogPosts