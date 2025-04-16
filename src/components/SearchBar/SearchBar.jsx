import { Field, Form, Formik } from 'formik';
import toast from "react-hot-toast";

function SearchBar({ handleChangeQuery }) {
    const initialValues = { query: "" };

    const handleSubmit = (values, { resetForm }) => {
        if (!values.query.trim()) {
            toast.error("Поле не може бути порожнім!");
            return;
        }
        handleChangeQuery(values.query.trim());
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field name="query" placeholder="Search images..." />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    );
}

export default SearchBar;