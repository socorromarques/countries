export default function TextInput ({
    labelDescription = 'Descrição do label',
    inputValue = 'valor padrão do input',
    onInputChange = null, 
    id = 'id_do_input_text',
    autoFocus = false
   
   }){
       function handleInputChange ({currentTarget}){
           if (onInputChange){
               const newValue = currentTarget.value
               onInputChange(newValue);
           }
       }
   
       return (
             <div className='flex flex-col m-15'>
                 <label className='text-sm mb-1' htmlFor='inputName'>
                   {labelDescription}
                 </label>
   
                 <input autoFocus 
                   id='inputName' 
                   className='border p-1' 
                   type='text' 
                   value={inputValue} 
                   onChange={handleInputChange}
                   />
             </div> 
       )
   }