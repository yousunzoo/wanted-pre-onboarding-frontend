import { Outlet } from "react-router-dom"

function ProtectedRouter() {
  return (
    <>
    <Outlet />
    </>
  )
}

export default ProtectedRouter