import * as React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'

import { theme } from '../components/theme'
import { connect } from '../utils/redux.helpers'

const innerLoaderContainer = {
  position: 'absolute',
  top: '40%',
  left: 0,
  right: 0,
  zIndex: 10000,
} as React.CSSProperties

const loaderOverlay = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'black',
  zIndex: 9999,
  opacity: 0.2,
} as React.CSSProperties

interface LayoutProps {
  useDarkTheme: boolean
  showLoading: boolean
}

const LayoutContainer: React.SFC<LayoutProps> = ({
  showLoading,
  useDarkTheme,
  children,
}) => (
  <div style={{ textAlign: 'center' }}>
    <MuiThemeProvider muiTheme={theme(useDarkTheme)}>
      <div>
        <div style={{ display: showLoading ? 'block' : 'none' }}>
          <div style={innerLoaderContainer}>
            <CircularProgress mode="indeterminate" />
          </div>
          <div style={loaderOverlay} />
        </div>
        {children}
      </div>
    </MuiThemeProvider>
  </div>
)

export default connect(store => ({
  useDarkTheme: !!store.layout.useDarkTheme,
  showLoading: store.layout.asyncCount > 0,
}))(LayoutContainer)
