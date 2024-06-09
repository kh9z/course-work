import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import BlogCard from "@/components/shared/BlogCard";
import DeletePost from "@/components/shared/DeletePost";


const Page = async () => {
    const user = await getCurrentUser()
    const posts = await  prisma.blog.findMany({
        where:{
            userEmail: user?.email ?? undefined
        },
        orderBy: {
            createdAt: "desc"
        },
        include:{
            user: true
        }
    })
    return (
        <div className="w-full">
            <div className="max-w-[90%] mx-auto">
                <div className="w-full text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-tertiary">Привіт {user?.name}</h1>
                    <span className="text-lg">
                        Ви опублікували {posts.length} пост
                    </span>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
                    {posts.map((post) => (
                        <div key={post.id} className="relative">
                            <BlogCard post={post as any}/>
                            <DeletePost post={post as any}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;