import Header from '@/components/header/Header'
import Head from 'next/head'
import BlogPosts from '@/modules/home-page/blogPosts/BlogPosts'
import styles from '../styles/Home.module.css'
import Footer from '@/components/footer/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>DoggyDose - Blogs And More For Fun</title>
      </Head>
      <Header/>
      <BlogPosts/>
      <Footer/>
      <p >asd</p>
    </>
  )
}
