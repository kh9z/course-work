import getCurrentUser from "@/app/actions/getCurrentUser";
import CreateForm from "@/components/shared/CreateForm";

const Page = async () => {
    const user = await getCurrentUser()
    return(
        <CreateForm user={user} />
    )
}

export default Page;