'use client'
export const TodoModal = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px]'>
        <div className='bg-white p-2'>Title</div>
      </div>
    </div>
  )
}
