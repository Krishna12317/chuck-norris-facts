import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { IThemeContext } from '../types';

export const useThemeContext = (): IThemeContext => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
};

