import { useContext } from 'react';
import SearchFactContext from './SearchFactContext';

export const useSearchFactContext = () => {
    const context = useContext(SearchFactContext);
    if (!context) {
        throw new Error('useSearchFactContext must be used within a SearchFactProvider');
    }
    return context;
};

