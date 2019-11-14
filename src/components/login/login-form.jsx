import React, { Fragment } from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './login.module.css';
import {Input} from '../../utils/form-validate/input-validate';
import {email, required} from "../../utils/form-validate/validate";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {

    if(props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <Fragment>
            <div>
                <h2 className={style.header}>Login</h2>
            </div>
            <form onSubmit={props.handleSubmit} className={style.form}>
                <div>
                    <Field className={style.input}
                           placeholder={'...email'}
                           validate={[required, email]}
                           component={Input}
                           name={'email'}
                           type={'text'} />
                </div>
                <div>
                    <Field className={style.input}
                           placeholder={'...password'}
                           validate={[required]}
                           component={Input}
                           name={'password'}
                           type={'password'} />
                </div>
                <div>
                    <Field className={style.checkbox}
                           component={'input'}
                           name={'rememberMe'}
                           type={'checkbox'} />
                     remember me
                </div>
                {props.error &&
                    <div>
                        <span className={style.error}>{props.error}</span>
                    </div>
                }
                <button className={style.button} type={'submit'}>Login</button>
            </form>
        </Fragment>
    )
};

const Login = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;