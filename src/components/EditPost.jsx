import {useEffect, useState} from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Navigate, useParams } from 'react-router-dom'
import { Editor } from './Editor'



export const EditPost = () => {
  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  // const [cover, setCover] = useState('')
  const [redirect, setRedirect] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:4000/postblog/${id}`)
    .then(res => {
      res.json()
      .then(blogInfo => {
        setTitle(blogInfo.title);
        setContent(blogInfo.content);
        setSummary(blogInfo.summary)
      })
    })
},[])

  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('id',id);
        if(files?.[0]){
          data.set('file', files?.[0])
        }
    const response = await fetch(`http://localhost:4000/postblog`,{
      method: 'PUT',
      body: data,
      credentials: 'include'
    })
    if(response.ok){
          setRedirect(true);
    }
  }
  

  if(redirect){
     return <Navigate to={'/postblog/'+id} />
  }

  return (
    <form onSubmit={updatePost}>
    <input  type="title" 
            placeholder={'Title'}
            value={title}
            onChange={e => setTitle(e.target.value)}/>
    <input  type="summary" 
            placeholder={'Summary'}
            value={summary}
            onChange={e => setSummary(e.target.value)}/>
    <input  type="file" 
            onChange={e => setFiles(e.target.files)} /> 
    <Editor value={content}
            onChange={setContent} />
    <button style={{marginTop:'5px'}}>Update Post</button>          
</form>
  )
}
