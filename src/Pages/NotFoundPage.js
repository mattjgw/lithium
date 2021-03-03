// @flow

import { AppBar, Dialog, MuiThemeProvider } from "@material-ui/core";
import React from 'react';

export const NotFoundPage = (): React$Element<"div"> => {

  return <MuiThemeProvider>
    <>
      <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
        <AppBar title="Error" />
        <h1>Page not found</h1>
      </Dialog>
    </>
  </MuiThemeProvider>
}

export default NotFoundPage;