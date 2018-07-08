import React, { Component } from 'react'
import './index.css'

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<header>
					<h1>Don Hamilton III</h1>
				</header>
				<div className="container">
					<main>
						<article>
							<h2>TODO</h2>
							<ol>
								<li>Add content</li>
								<li>Add styling</li>
							</ol>
						</article>
						<article>
							<h2>List of Projects</h2>
							<ul>
								<li>
									<a href="/articles-resources-tois">
										A running collection of articles I find
										useful
									</a>
								</li>
							</ul>
						</article>
					</main>
				</div>
				<footer>
					<small>
						&copy; Don Hamilton III {new Date().getFullYear()}
					</small>
				</footer>
			</div>
		)
	}
}

export default App
