import { useContext, useState } from "react"
import { ZoomContext } from "../context/ZoomContext";


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const { formdata, setFormdata } = useContext(ZoomContext);

    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = ({ target }) => {

        if(target.name === 'rut')
        {
            target.value = target.value.replace(/[abcdevfghijlmnopqrstuvwxyz.*+<>/,` ?^'";~|:!@#%&=${}()|[\]\\]/gi, '');
        }

        setValues({
            ...values,
            [target.name]: target.value
        });

        setFormdata({
            ...formdata,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}
