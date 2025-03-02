import React from 'react';
import service from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featured_image }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="bg-gray-dark p-4 rounded-lg border border-pink hover:border-pin transition duration-300">
                <img
                    src={service.getFilePreview(featured_image)}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h2 className="text-pink text-xl font-bold">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;