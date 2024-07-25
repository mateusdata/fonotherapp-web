import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../context/AuthProvider';

function DropDownUser() {
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');
    const { logout, user } = useContext(ContextAuth);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);
    const items = [
        {
            label: (
                <Link className='' to={"/painel"}>
                    Painel
                </Link>
            ),
            key: '0',
        },
        {
            label: (
                <Link className='' to={"/painel"}>
                    Minha Conta
                </Link>
            ),
            key: '1',
        },
        {
            label: (
                <Link className='' to={"/meuplano"}>
                    Minha plano
                </Link>
            ),
            key: '2',
        },
        {
            label: (
                <div onClick={() => logout()}>
                    <button className='mt-1  hover:text-red-300'>Sair</button>
                </div>
            ),
            key: '3',
        },


    ];

    return (
        <div className=' w-full items-center gap-4 justify-end    md:flex flex '>
            <div className='flex  '>
                <button className='dark:text-black pr-1 ronde flex flex-row flex-nowrap justify-center items-center gap-1' onClick={() => setDarkMode(!darkMode)}>
                    {false && <span className={`hidden  md:flex ${darkMode && "text-white"}`}>{`Modo ${darkMode ? "light" : "Dark"}`}</span>}


                </button>
                <span className='font-semibold text-lg text-white'  >{
                    <div>
                        {/*user?.nick_name && user.nick_name.split(' ')[0].charAt(0).toUpperCase() + user.nick_name.split(' ')[0].slice(1).toLowerCase()*/}
                        {user?.nick_name}
                    </div>
                }</span>

            </div>
            <div className=''>
                <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                >
                    <button onClick={(e) => e.preventDefault()}>
                        <Space className="cursor-pointer">
                            <Avatar
                                size={40}
                                style={{ backgroundColor: "black" }}
                                icon={<UserOutlined />}
                            />
                        </Space>
                    </button>
                </Dropdown>
            </div>

        </div>
    )
}

export default DropDownUser