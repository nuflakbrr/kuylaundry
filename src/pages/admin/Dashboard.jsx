import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarAdmin } from '../../components'

export default function Dashboard() {
    // Required State
    const [dataOutlet, setDataOutlet] = useState([])
    const [dataMember, setDataMember] = useState([])
    const [dataTransaction, setDataTransaction] = useState([])
    const [dataUser, setDataUser] = useState([])

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // Authorization Config
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    // Get All Data Outlet from API
    useEffect(() => {
        axios.get('/outlet', { headers: headerConfig })
            .then(res => {
                setDataOutlet(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data Member from API
    useEffect(() => {
        axios.get('/member', { headers: headerConfig })
            .then(res => {
                setDataMember(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data Transaction from API
    useEffect(() => {
        axios.get('/transaction', { headers: headerConfig })
            .then(res => {
                setDataTransaction(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data User from API
    useEffect(() => {
        axios.get('/admin', { headers: headerConfig })
            .then(res => {
                setDataUser(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <SidebarAdmin />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-10'>
                            <h2 className='text-2xl font-semibold text-white'>Dashboard</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
                                <div className="bg-slate-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-slate-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataOutlet.length}</p>
                                        <p>Total Outlet</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-slate-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataMember.length}</p>
                                        <p>Total Member</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-slate-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataTransaction.length}</p>
                                        <p>Total Traksaksi</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-slate-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataUser.length}</p>
                                        <p>Total Petugas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full p-10'>
                            <div className="flex items-center justify-between pb-6">
                                <div>
                                    <h2 className="text-white text-2xl font-semibold">Daftar Transaksi</h2>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    {/* <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                            </div> */}
                                    <div className="lg:ml-40 ml-10 space-x-8">
                                        <Link to='/admin/transaction' className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Transaksi</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        No
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        Id Petugas
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        Nama
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        Email
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        Role
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {data.map((val, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {index + 1}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {val._id}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img className="w-full h-full rounded-full"
                                                                    src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                                                                    alt="Member Profile Picture" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    {val.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {val.email}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            {val.role === 'admin' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Admin
                                                                </p>
                                                            )}
                                                            {val.role === 'cashier' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Kasir
                                                                </p>
                                                            )}
                                                            {val.role === 'owner' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Pemilik
                                                                </p>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/admin/user/edit/${val._id}`} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Ubah</Link>
                                                        <span className='px-2'>|</span>
                                                        <Link to={`/admin/user/delete/${val._id}`} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Hapus</Link>
                                                    </td>
                                                </tr>
                                            )
                                        })} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
