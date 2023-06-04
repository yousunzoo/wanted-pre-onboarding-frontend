import React from 'react'
import { Link } from 'react-router-dom'

const LINK_STYLE = 'bg-[#ffdc72] w-60 h-[200px] hover:bg-[#ffd278] text-lg font-semibold rounded-xl flex justify-center items-center'
function Home() {
  return (
    <>
    <h1 className='text-center text-3xl font-bold mb-14'>나만의 투두리스트</h1>
    <p className='text-center text-xl mb-20'>내 일정을 투두리스트로 한 눈에 관리해보세요!</p>
    <nav className='flex w-full justify-between'>
    <Link className={LINK_STYLE} to='signin'>로그인하러 가기</Link>
    <Link className={LINK_STYLE} to='signup'>회원가입하러 가기</Link>
    </nav>
    </>
  )
}

export default Home