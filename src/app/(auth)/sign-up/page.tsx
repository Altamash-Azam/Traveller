"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


type Inputs = {
  email: string
  username: string
  password: string
}


export default function App() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('/api/register', data);
      
      if (response.status === 201) {
        router.push('/sign-in');
        // You can add a toast notification here for better UX
        toast('Registration successful! Please sign in.');
      }
      // console.log(':', response.data);
    } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.log(axiosError.response?.data.message || 'An unexpected error occurred.');
    }

  }

  // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="flex mx-auto h-full">
      <form className="flex flex-col mx-auto mt-30 gap-3 h-full py-30 px-10 bg-slate-300 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="bg-white px-4 py-2 w-84" placeholder="username" {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
        <input className="bg-white px-4 py-2 w-84" placeholder="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}


        {/* include validation with required or other standard HTML validation rules */}
        <input className="bg-white px-4 py-2 w-84" placeholder="password" type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}


        <input className="bg-black text-white w-30 py-2 mt-7" type="submit" />
      </form>
    </div>
  )
}