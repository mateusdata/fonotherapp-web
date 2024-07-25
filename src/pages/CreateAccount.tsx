import React, { useContext, useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {api} from '../axiosInstance/axiosInstance';
import { ContextAuth } from '../context/AuthProvider';
import { ClipLoader } from 'react-spinners';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const schema = z.object({
  nick_name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Por favor, insira um email válido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type CreateAccountFormValues = {
  nick_name: string;
  email: string;
  password: string;
};

const CreateAccount: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<CreateAccountFormValues>({
    resolver: zodResolver(schema),
  });

  const { setUser, user } = useContext(ContextAuth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const onSubmit: SubmitHandler<CreateAccountFormValues> = async (data) => {
    try {
      setLoading(true)

      const response = await api.post("/create-user", data)
      console.log('Resposta da API:', response.data);
      localStorage.setItem('usuario', JSON.stringify(response.data));
      setUser(response?.data)
      setLoading(false)
      navigate("/painel")
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setError('password', { message: 'Erro ao tentar criar conta. Por favor, tente novamente mais tarde.' });
      setLoading(false)

    }
  };

  return (
    <html className="h-full gradient-background ">
      <body className="dark:bg-slate-900 gradient-background flex h-full items-center py-16 min-h-screen">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-cyan-800 dark:text-white">
                  Crie sua conta
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Bem vindo ao fonotherapp
                </p>
              </div>

              <div className="mt-5">
                <hr className='mb-12' />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-y-4">

                    <div>
                      <label htmlFor="nick_name" className="block text-sm mb-2 dark:text-white">Nome</label>
                      <input
                        {...register('nick_name')}
                        id="nick_name"
                        type="text"
                        className={`py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${errors.nick_name ? 'border-red-500' : ''}`}
                        placeholder="Nome"

                      />
                      {errors.nick_name && <p className="text-xs text-red-600 mt-2">{errors.nick_name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
                      <input
                        {...register('email')}
                        id="email"
                        type="text"
                        className={`py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Email"

                      />
                      {errors.email && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Senha</label>
                      <input
                        {...register('password')}
                        id="password"
                        type="password"
                        className={`py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Senha"

                      />
                      {errors.password && <p className="text-xs text-red-600 mt-2">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="block text-sm mb-2 dark:text-white">Já tem uma conta?</span>
                      <Link to="/login" className="text-sm text-cyan-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Fazer login?
                      </Link>
                    </div>

                   
                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    {loading ? <Spin style={{color:"white"}} indicator={<LoadingOutlined spin />}  /> : 'Criar conta'}
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

export default CreateAccount;
