import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import service from '../appwrite/config';
import { Button, Container } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.user_id === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate('/');
            });
        } else navigate('/');
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featured_image);
                navigate('/');
            }
        });
    };

    return post ? (
        <div className="min-h-screen bg-black py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border border-pink rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featured_image)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="bg-pink hover:bg-pink text-white mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                className="bg-red-500 hover:bg-red-600 text-white"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold text-pink">{post.title}</h1>
                </div>
                <div className="browser-css text-white">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}