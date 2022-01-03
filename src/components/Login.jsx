import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            // console.log('ingrese mail')
            setError('ingrese mail')
            return
        }

        e.preventDefault()
        if (!pass.trim()) {
            // console.log('ingrese su contraseña')
            setError('ingrese su contraseña')
            return
        }
        if (pass.length<6) {
            // console.log('password demasiado corta')
            setError('Password demasiado corta. Mínimo 6 caracteres')
            return
        }
        setError(null)
        console.log('pasando todas las validaciones')
    }

    return (
        <div className='mt-5'>
            <h3 className='text-center'>{
                esRegistro ? 'Registro de usuarios' : 'Login de acceso'
            }</h3>
            <hr />
       
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
               
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className='alert alert-danger'> 
                                    {error}
                                </div>
                            )
                        }
                        <input 
                        type="email" 
                        className='form-control mb-2'
                        placeholder='Ingrese un email'
                        onChange={e=> setEmail(e.target.value)}
                        value={email}
                        />
                         <input 
                        type="password" 
                        className='form-control mb-2'
                        placeholder='Ingrese un password'
                        onChange={e=> setPass(e.target.value)}
                        value={pass}
                        
                        />
                        <button className="btn btn-dark btn-lg w-100 mb-2" type='submit'>
                            {
                                esRegistro ? 'Registrarse' : 'Acceder'
                            }
                        </button>
                        <button 
                        onClick={() => setEsRegistro (!esRegistro)}
                        className="btn btn-info btn-sm w-100  "
                        type='button'>
                        {
                            esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'
                        }
                        </button>
                    </form>

                </div>
            </div>  
        </div>
    )
}

export default Login
