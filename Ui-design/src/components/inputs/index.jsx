import React from 'react'
import { useForm } from 'react-hook-form';
import style from "./input.module.scss"
const Input = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div className={style.mainform}>
    <form onSubmit={handleSubmit((data) => console.log(data))}>

    <input {...register('name', { required: true })} 
     className={style.forminput}
     placeholder="Enter your name"/>
    {errors.input && <p>Name is required.</p>}
    <input {...register('num', { pattern: /\d+/ })} 
     className={style.formnum}
     placeholder="Enter number"/>
    {errors.age && <p>Please enter number.</p>}
  </form>
  </div>
  )
}

export default Input
