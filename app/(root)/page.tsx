import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
  
    <div className='p-4'>
      <UserButton afterSignOutUrl="/"/>
      Home Page
    </div>
  )
}

export default Home;