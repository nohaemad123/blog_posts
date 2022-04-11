import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { render } from "@testing-library/react";

export default function EditPostComponent(props) {
    
    const schema = Yup.object().shape({
        post_name: Yup.string().required(),
        post_author: Yup.string().required(),
        post_breif_description: Yup.string().required(),
        post_description: Yup.string().required()
    });
   return(
       <div>
        <Formik
            enableReinitialize={true}
            initialValues={props.values}
            onSubmit={props.onSubmit}
            validationSchema={schema}
            render={props => {
                return <Form>
                    <div class="form-group">
                        <label>Post Name <span style={{ color: "#f00" }}>*</span>:</label>
                        <Field name="post_name" className="form-control" placeholder="Post name" />
                        <ErrorMessage name="post_name" />
                    </div>

                    <div class="form-group">
                        <label>Post author <span style={{ color: "#f00" }}>*</span>: </label>
                        <Field name="post_author" className="form-control" placeholder="Post author" />
                        <ErrorMessage name="post_author" />
                    </div>
                    <div class="form-group">
                        <label>Post breif description <span style={{ color: "#f00" }}>*</span>: </label>
                        <Field name="post_breif_description" className="form-control" placeholder="Post breif description" />
                        <ErrorMessage name="post_breif_description" />
                    </div>
                    <div class="form-group">
                        <label>Post description <span style={{ color: "#f00" }}>*</span>: </label>
                        <Field name="post_description" className="form-control" placeholder="Post description" />
                        <ErrorMessage name="post_description" />
                    </div>
                    <button type="submit" className="save btn btn-primary">Send</button>
                </Form>
            }}
        />
    
       </div>
   )
}