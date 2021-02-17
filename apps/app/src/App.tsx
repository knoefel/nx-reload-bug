/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { ThemeProvider } from '@material-ui/core/styles';
import {
  DialogStateProvider,
  SnackbarProvider,
  useAppTheme,
  RouteKeys
} from '@cv/app/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  const theme = useAppTheme();

  console.log(RouteKeys);
  return (
    <SnackbarProvider>
      <DialogStateProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Helmet titleTemplate="%s - CV Engine" defaultTitle="CV Engine">
              <meta name="description" content="A CV Engine" />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
            </Helmet>
            <div>hi</div>

          </BrowserRouter>
        </ThemeProvider>
      </DialogStateProvider>
    </SnackbarProvider>
  );
};
