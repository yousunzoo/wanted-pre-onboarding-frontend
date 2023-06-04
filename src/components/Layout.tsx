import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className='w-[600px] h-[600px] bg-white'>
      <Outlet />
    </main>
  )
}

export default Layout