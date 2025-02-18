import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to = {`/post/${$id}`}>
        <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <img src="https://via.placeholder.com/400x200" alt="Blog Post" className="w-full h-48 object-cover rounded-t-lg" />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Blog Title</h2>
    <p className="text-gray-600">Blog description...</p>
  </div>
</div>
    </Link>
  )
}


export default PostCard