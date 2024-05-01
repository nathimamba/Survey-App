import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className='flex justify-between items-center px-8 py-4'>
            <div className='font-bold'>_ Surveys</div>
            <div className='flex'>
                <Link
                    to='/'
                    className={`px-4 ml-4 ${activeLink === '/' ? 'text-blue-500' : ''}`}
                    onClick={() => setActiveLink('/')}
                >
                    FILL OUT SURVEY
                </Link>
                <Link
                    to="/survey/results"
                    className={`px-4 ml-4 ${activeLink === '/survey/results' ? 'text-blue-500' : ''}`}
                    onClick={() => setActiveLink('/survey/results')}
                >
                    VIEW SURVEY RESULTS
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
