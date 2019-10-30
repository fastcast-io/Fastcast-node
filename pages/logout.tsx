import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Logout = () => { 
    const router = useRouter()
    // const [count, setCount] = useState<number>(0)
    
    // TODO : Fix maximum depth exceeded
    useEffect(() => {
        // setCount(count + 1)
        // Fix this. Should just use delay
        // if (count == 6000) {
        //     router.push('/index')
        // }
        const timer = setTimeout(() => router.push('/index'), 3000)


        return () => clearTimeout(timer)

    }, [])
    
    return (
  <div>
    You were logged out! You will be redirected to the sign in page in a bit
  </div>
) }

export default Logout