import React, { Fragment } from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './login.module.css';
import {Input} from '../../utils/form-validate/input-validate';
import {email, required} from "../../utils/form-validate/validate";

const LoginForm = (props) => {
    return (
        <Fragment>
            <div>
                <h2 className={style.header}>Login</h2>
            </div>
            <form onSubmit={props.handleSubmit} className={style.form}>
                <div>
                    <Field className={style.input}
                           placeholder={'...mail'}
                           validate={[required, email]}
                           component={Input}
                           name={'userName'}
                           type={'text'} />
                </div>
                <div>
                    <Field className={style.input}
                           placeholder={'...password'}
                           validate={[required]}
                           component={Input}
                           name={'password'}
                           type={'text'} />
                </div>
                <div>
                    <Field className={style.checkbox}
                           component={'input'}
                           name={'remember'}
                           type={'checkbox'} />
                     remember me
                </div>
                <button className={style.button} type={'submit'}>Login</button>
            </form>
        </Fragment>
    )
};

const Login = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;