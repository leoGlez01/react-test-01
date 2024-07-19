import { useEffect } from "react";

export function useSeo ({ title, description }: 
    {title:string, description: string}) 
{
    useEffect(()=>{
        document.title = title;
        document.querySelector('meta[name="description"]')
        ?.setAttribute("content", description);            
    }, [title, description])
}