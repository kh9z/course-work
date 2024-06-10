"use client"
import {useState} from "react";
import {deletePost} from "@/app/actions/blogActions";
import Button from "@/components/ui/Button";
import {PostTypes} from "@/types/postTypes";
import Input from "@/components/ui/Input";

const DeletePost: React.FC<{ post: PostTypes }> = ({post}) => {
    const [showModal, setShowModal] = useState(false)
    const handleDelete = () => {
        setShowModal(true)
    }
    const closemModal = () => {
        setShowModal(false)
    }
    return (
        <div>
            <Button text="Delete" aria="delete post" onClick={handleDelete} action/>
            {showModal && (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50"
                         onClick={() => setShowModal(false)}>
                        <div className="w-screen h-screen bg-black/40 absolute"/>
                        <div className="bg-white p-6 rounded shadow-lg z-40" onClick={(e) => e.stopPropagation()}>
                            <p>Ви впевнені, що хочете видалити цю публікацію?</p>
                            <div className="flex gap-3 mt-5 justify-center">
                                <form action={deletePost} onSubmit={closemModal}>
                                    <Input name="postId" type="hidden" value={post.id}/>
                                    <Button text="Так" aria="delete post" type="submit"/>
                                </form>
                                <Button text="Ні" aria="cancel delete post" onClick={closemModal}/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default DeletePost;