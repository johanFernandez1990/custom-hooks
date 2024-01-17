import { useEffect,useState } from "react";
export const useFecht = ( url ) => {

    
    
    const [state, setstate] = useState({
        data: null,
        isLoading : true,
        hasError : null,
    })
    
    
    
    const getFecht = async () =>{
        const resp = await fetch(url);
        const data = await resp.json ();

        setstate({
            data,
            isLoading:false,
            hasError:null,
        })
       
    }

    useEffect(() => {
       
        getFecht();
        
    }, [url])
    
    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    }; 
  
}
    
  
    
    
