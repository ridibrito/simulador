import Navbar from "../components/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
  };

export default function Admin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(inputs) => {
        
        const data = await fetch('/api/abrangencia',{
            method:'POST',
            body: JSON.stringify(inputs),
            headers:{
                'content-type': 'application/json'
            }
        })
        
    }


    return (
        <>
        <div>
            <Navbar />
            <h1 className="text-2xl font-semibold text-center mt-3">Painel administrativo</h1>
            <h2 className="text-lg m-5">Cadastros</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block ml-5">Coparticipacao</label>
                <input 
                type="text" 
                className="border h-10 pl-2 ml-5 rounded"
                {...register("name")}/>
                <input type="submit" className="bg-sky-500 text-white rounded px-6 py-2 ml-2 mb-3"/>
                </form>
                
                <hr/>
            </div>
        </div>
        </>
    )
}