import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <nav>
            <ul>
                <li>
                    <button
                        onClick={() => setActiveTab('grid1')}
                        className={activeTab === 'grid1' ? 'active' : ''}
                    >
                        Грид 1
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveTab('grid2')}
                        className={activeTab === 'grid2' ? 'active' : ''}
                    >
                        Грид 2
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
