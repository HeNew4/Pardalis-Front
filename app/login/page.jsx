import Button from '../_components/Button';

export default function page() {
    return (
        <div className='config h-screen grid place-content-center'>
            <form className='bg-background p-10 rounded-sm max-w-md mx-auto min-w-96'>
                <h2 className='text-center font-bold'>Ingresar</h2>
                <div className='relative z-0 w-full mb-5 group'>
                    <input
                        type='email'
                        name='floating_email'
                        id='floating_email'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                    />
                    <label
                        htmlFor='floating_email'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                        Apodo
                    </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                    <input
                        type='password'
                        name='floating_password'
                        id='floating_password'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                    />
                    <label
                        for='floating_password'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                        Contraseña
                    </label>
                </div>

                <Button title='Iniciar Sesión' />
            </form>
        </div>
    );
}
