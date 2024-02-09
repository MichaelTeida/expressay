'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreateEntry = () => {
    const router = useRouter()
    const {data: session} = useSession()

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        entry: '',
        tag: '',
    })

    const createEntry = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const response = await fetch('/api/entry/new', {
                method: 'POST',
                body: JSON.stringify({
                    entry: post.entry,
                    userId: session?.user.id,
                    tag: post.tag,
                })
            })

            if(response.ok) {
                router.push('/')
            }
        } catch (error) {

        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createEntry}
        />
    );
};

export default CreateEntry;