import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './global_state';
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme1 } from './theme';
import Router from './router';
import SetUrl from './set_url';

export default function Components() {
    const [toRender, setToRender] = useState('nil')

    useEffect(() => {
        let url = localStorage.getItem("url");
        if (url === null || url === undefined) {
            setToRender('set_url')
        } else {
            setToRender('dashboard')
        }
    }, [])

    const setUrl = (url) => {
        localStorage.setItem("url", url)
        setToRender('dashboard')
    }

    const render = () => {
        if (toRender === 'set_url') {
            return <SetUrl setUrl={setUrl} />
        } else if (toRender === 'dashboard') {
            return <Router />
        } else {
            return <></>
        }
    }

    return <Provider store={store}>
        <ThemeProvider theme={theme1}>
            <CssBaseline />
            {render()}
        </ThemeProvider>
    </Provider>
}