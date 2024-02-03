import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
    
  const {posts,loading} = useContext(AppContext); 

  return (
    <div className='w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7 mt-[65px] mb-[65px] '>
    {
      loading ? 
      (<Spinner />):
      (
        posts.length  === 0  ?
        (<div>
          <p>No post Found</p> 
        </div>) :
        (posts.map((post) =>(
          <div key={post.id}>
            <p className='font-bold text-sm '>{post.title}</p>
            <p className='text-[12px]'>
              By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-[11px] mt-1'>Posted on {post.date} </p>
            <p className='text-[11px] mt-[10px]'>{post.content}</p>
            <div className='flex gap-x-3'>
              {post.tags.map((tag,index)=>{
                return <span className='text-blue-700 font-bold underline text-[9px]' key={index}>{`#${tag}`}</span>
              }
              )}
            </div>
          </div>

        )))

      )
    }

    </div>
  )
}

export default Blogs