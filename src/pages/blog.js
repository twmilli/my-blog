import React from 'react';
import BlogPreview from './components/blog-preview';
import './blog.scss';

const blog = () => (
    <div className = 'blog-container'>
        <BlogPreview {...BlogProps}/>
        <BlogPreview {...BlogProps}/>
    </div>
);

const BlogProps = {
    tag: 'Philosophy',
    title: 'Dangerous vs. Scary',
    date: 'November 29th 2017',
    preview: 'Cloth talk. Learning is cool, but knowing is better, and I know the key to success. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Stay focused. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Life is what you make it, so let’s make it. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. They don’t want us to eat.'
}

export default blog;