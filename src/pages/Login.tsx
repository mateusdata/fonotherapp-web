import React, { useContext, useState } from 'react';
import './style.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '../axiosInstance/axiosInstance';
import { ContextAuth } from '../context/AuthProvider';
import { ContextGlobal } from '../context/GlobalProvider';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
//import { useUserStore } from '../context/Zcontext';

const schema = z.object({
  email: z.string().email('Por favor, insira um email válido').min(5),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});
type LoginFormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate()
  //const { users, setUsers } = useUserStore();
  const { priceId } = useLocation()?.state || {};

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(schema),
  });
  const { setUser, } = useContext(ContextAuth);
  const { setActivePlan } = useContext(ContextGlobal);




  const handleLogin: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      setLoading(true)
      const response = await api.post('/login-web', data);
      localStorage.setItem('usuario', JSON.stringify(response.data));

      const infoUser = await api.get(`/my-user`);
      console.log(({ ...response.data, ...infoUser.data }))
      localStorage.setItem('usuario', JSON.stringify({ ...response.data, ...infoUser.data }));

      //console.log('Resposta da API:', response.data);

      setUser({ ...response.data, ...infoUser.data })
      setActivePlan(infoUser?.data?.has_plan)
      setLoading(false)

      if(infoUser?.data?.has_plan){
        navigate("/meuplano", { state: { priceId } })
        return
      }
      navigate("/painel", { state: { priceId } })
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoading(false)
      setError('password', { message: 'Ocorreu um erro interno' });
    }
  };

  return (
    <html className="h-full gradient-background">

      <body className="dark:bg-slate-900 gradient-background flex h-full items-center py-16 min-h-screen">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-cyan-800 dark:text-white">
                  Acesse sua conta
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Bem vindo ao fonotherapp
                </p>
                <Link to={"/"} >Voltar</Link>
              </div>

              <div className="mt-5">
                <hr className='mb-12' />
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="grid gap-y-4">

                    <div>
                      <label className="block text-sm mb-2 dark:text-white">Email</label>
                      <div className="relative">
                        <input
                          {...register('email')}
                          placeholder='Email'
                          type="text"
                          id="email"
                          name="email"
                          className={`py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${errors.email ? 'border-red-500' : ''}`}

                        />
                        {errors.email && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <label className="block text-sm mb-2 dark:text-white">Senha</label>
                        <a className="text-sm text-cyan-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Esqueceu a senha?</a>
                      </div>
                      <div className="relative">
                        <input
                          {...register('password')}
                          placeholder='Senha'
                          type="password"
                          id="password"
                          name="password"
                          className={`py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${errors.password ? 'border-red-500' : ''}`}

                        />
                        {errors.password && <p className="text-xs text-red-600 mt-2">{errors.password.message}</p>}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="block text-sm mb-2 dark:text-white">Não tem uma conta?</span>
                      <Link to={"/cadastro"} className="text-sm text-cyan-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Criar conta?</Link>
                    </div>

                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      {loading ? <Spin style={{ color: "white" }} indicator={<LoadingOutlined spin />} size="default" />
                        : 'Entrar'}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Login;
