interface Props {
    params: { userId: string }
    title?: string[]
}

const EditUserPage = ({ params, title }: Props) => {
    let aux: string = '1'

    console.log(title)

    return <div className="bg-red-400 w-[900px]">Edit user {params.userId}</div>
}

export default EditUserPage
