'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreateEntry = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        entry: '',
        tag: '',
    })

    const createEntry = async (e) => {

    }

    return (
        <Form
        type='create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        hadleSubmit={createEntry}
        />
    );
};

export default CreateEntry;