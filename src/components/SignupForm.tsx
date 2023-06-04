import {MdOutlineMail, MdOutlineLock} from 'react-icons/md'
function SignupForm() {
  return (
    <form className='w-full px-10'>
      <div className='mb-8 flex flex-col gap-4'>
        <label className='text-lg inline-flex items-center gap-1' htmlFor='email'>
          <MdOutlineMail className='text-2xl' /> 이메일</label>
        <input className='rounded-3xl border-2 px-6 py-2 focus:outline-slate-600' type='email' data-testid='email-input' id='email' placeholder='test@test.com' />
        <p className='text-gray-500 px-2'>이메일 형식에 맞게 입력해주세요.</p>
      </div>
      <div className='mb-10 flex flex-col gap-4'>
        <label className='text-lg inline-flex items-center gap-1' htmlFor='password'>
          <MdOutlineLock className='text-2xl' /> 비밀번호</label>
        <input className='rounded-3xl border-2 px-6 py-2 focus:outline-slate-600' type='password' data-testid='password-input' id='password' placeholder='비밀번호를 입력해주세요' />
        <p className='text-gray-500 px-2'>비밀번호를 8자리 이상 입력해주세요.</p>
      </div>
      <div className='flex w-full gap-4'>
      <button className='w-1/2 py-3 border-4 rounded-lg border-[#ffdc72] hover:bg-[#ffdc72]'>로그인하러 가기</button>
      <button className='w-1/2 bg-[#ffdc72] hover:bg-[#ffd278] rounded-lg py-3' disabled>회원가입</button>
      </div>
    </form>
  )
}

export default SignupForm