import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className = "flex justify-between h-16 bg-slate-800 items-center px-5">
            <Link href = "/" className = "text-white font-semibold ">NextCrud</Link>
            <Link href = "/addTopic" className = "bg-white py-1 px-2">Add Topic</Link>
        </nav>
    </>
  )
}

export default Navbar
