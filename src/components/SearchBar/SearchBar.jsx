import React from 'react'
import {Field, Form, Formik} from 'formik';
function SearchBar({handleChangeQuery}) {
const initialValues = {
    query:""
}
const handleSubmit = (values) => {
    handleChangeQuery(values.query);
}
    return (
        <>
       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
           <Form>
               <Field name="query"/>
               <button type="submit">Search</button>
           </Form>
       </Formik>
        </>
    )
}

export default SearchBar
