import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
    return (
        <div className="min-h-screen bg-black py-8">
            <Container>
                <PostForm />
            </Container>
        </div>
    );
}

export default AddPost;