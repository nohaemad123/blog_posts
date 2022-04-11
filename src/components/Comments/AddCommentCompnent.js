import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddCommentComponent(props) {

    const schema = Yup.object().shape({
        body: Yup.string().required(),
        author: Yup.string().required()
    });

    console.log(schema)

    return (
        <Formik
            enableReinitialize={true}
            initialValues={props.values}
            onSubmit={props.onSubmit}
            validationSchema={schema}
            render={props => {
                return <Form>
                      <div className="form-group">
                        <label>your name<span style={{ color: "#f00" }}>*</span>: </label>
                        <Field name="author" className="form-control" placeholder="Post author" />
                        <ErrorMessage name="author" />
                    </div>
                    <div className="form-group">
                        <label>comment <span style={{ color: "#f00" }}>*</span>:</label>
                        <Field name="body" className="form-control" placeholder="Post name" />
                        <ErrorMessage name="body" />
                    </div>

                  
                  
                    <button type="submit" className="save btn btn-primary">Send</button>
                </Form>
            }}
        />
    )
}