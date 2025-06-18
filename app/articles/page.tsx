"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Post = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading posts:', error.message, error.details)
      } else {
        setPosts(data as Post[])
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  )
}