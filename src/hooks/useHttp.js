import axios from "axios";
import {
    useState,
    useEffect
} from "react";



const useHttp = (request)=>{
    const [httpResponse,setHttpResponse] = useState(null);
    const [httpError,setHttpError] = useState(null);
    const [httpLoader,setHttpLoader] = useState(true);

 const ajax = ()=>{
axios(request)
.then((response)=>{
    setHttpResponse(response.data);
})
.catch((err)=>{
    setHttpError(err.response); 
})
.finally(()=>{
    setHttpLoader(false);
  });
 }

 //jab jab ajax request karenge tab tab 
 //iske andar ka ajax() func call hoga
 useEffect(()=>{
    if(request)
    {
      ajax();
    }
  },[request]);

  return [httpResponse,httpError,httpLoader];
}
export default useHttp;