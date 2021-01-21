import { useEffect, useState } from "react";



export default function useForm(fields) {
    const [value,setValue] = useState({});
    const [refresh,setRefresh] = useState(false);

    useEffect(() => {
        
    }, [value])
 

    const handleForm = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let fieldObj = {};
      
        fields.map(field => {
           
           let inputField = form[field].value;
            fieldObj[field] = inputField;
        
        })
        
   
        setValue(fieldObj);
        return value;
        
        
    }
    return [value,handleForm];
    
}