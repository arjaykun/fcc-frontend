import React from 'react';
import { 
				 BrowserRouter as Router,
 				 Switch,
  			 Route, 
} from 'react-router-dom';

import Nav from './components/nav/Nav';
import Dashboard from './components/Dashboard';
import QuoteBox from './components/quote-generator/QuoteBox';
import MarkdownPreviewer from './components/markdown-previewer/MarkdownPreviewer';

function App() {

	return (
		<Router>
			<Nav />
			
			<Switch>
				<Route exact 
					path="/" 
					component={Dashboard} 
				/>
				<Route 
					path="/quote-generator" 
					component={QuoteBox} 
				/>
				<Route 
					path="/markdown-previewer" 
					component={MarkdownPreviewer} 
				/>
			</Switch>
		</Router>

	)
}
export default App;
