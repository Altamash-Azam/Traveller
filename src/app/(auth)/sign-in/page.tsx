"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 
import Link from "next/link";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.email({message: "please enter a valid email"}),
  password: z.string().min(1,{message: "please enter a valid email"}),
})

type formData = z.infer<typeof formSchema>;

const page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm<formData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<formData> = async (data: formData) => {
    try {
      const res = await signIn('credentials',{
        email: data.email,
        password: data.password,
        redirect: false
      })

      if(res?.error){
        toast.error("Invalid email or password")
        return;
      }

      toast("successfully Signed In")
      router.replace('/');

    
    } catch (error) {
      console.log("Authentication error : ",error);
    }
  }


  return (
    <div>
      <form className="w-1/2 flex flex-col mx-auto mt-30 gap-3 h-full py-30 px-10 bg-slate-300 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        <input className="bg-white px-4 py-2 w-84" placeholder="email" {...register("email", { required: true })} />
        {errors.email && <span className="text-red-500">Enter a valid email</span>}


        {/* include validation with required or other standard HTML validation rules */}
        <input className="bg-white px-4 py-2 w-84" placeholder="password" type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span className="text-red-500">Enter a valid Password</span>}


        <input className="bg-black text-white w-30 py-2 mt-7" type="submit" />
      </form>

      <div className="flex flex-row items-center justify-center"><span>New User?</span><Link href="/sign-up">sign-up</Link></div>
    </div>
  )
}

export default page
