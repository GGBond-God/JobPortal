import { motion } from 'framer-motion'
import { Search, ArrowRight, User, Building2, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const Hero = () => {
    const isAuthenticated = true
    const users = { fullName: 'Alex', role: 'employer' }
    const navigate = useNavigate()

    const stats = [
        { icon: User, label: 'Active Users', value: '2.4M+' },
        { icon: Building2, label: 'Companies', value: '10K+' },
        { icon: TrendingUp, label: 'Jobs Posted', value: '50K+' },
    ]

    return (
        <section className='pt-24 pb-16 bg-white min-h-screen flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight-mb-6 pb-4'>
                        Find Your Dream Job or
                    </motion.h1>
                    <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                        Perfect Hire
                    </span>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-xl md:text-2xl text-gray-600 mb-12 mx-auto leading-relaxed'>
                        Connect talented professionals with innovative companies.
                        Your next career move or perfect candidate is just one click away.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                        className='flex flex-col sm:flex-row gap-4 justify-center item-center mb-16'>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex space-x-2 items-center'
                            onClick={() => navigate('find-jobs')}
                        >
                            <Search className='w-5 h-5' />
                            <span>Find Jobs</span>
                            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform ' />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl'
                            onClick={() => {
                                navigate(
                                    isAuthenticated && users?.role === 'employer' ? '/employer/dashboard' : '/login')
                            }}>
                            Post a Job
                        </motion.button>
                    </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                            className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-2xl mx-auto'>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 + 0.1 * index }}
                                    className='flex flex-col items-center sapce-y-2 rounded-xl hover:bg-gray-50 p-4 trainsition-all'>

                                    <div className='w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-2'>
                                        <stat.icon className='w-6 h-6 text-blue-600' />
                                    </div>
                                    <div className='text-xl font-bold text-gray-900'>{stat.value}</div>
                                    <div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30' />
                <div className='absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30' />
                <div className='absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-20' />
            </div>
        </section>
    )
}

export default Hero
