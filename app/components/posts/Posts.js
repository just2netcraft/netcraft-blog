import React from "react";
import CounterHeader from './header/CounterHeader';
import { moment } from "moment";
import { connect } from 'react-redux';
import { getPostsPage } from '../../actions/creators';
import PostsServices from '../../services/PostsServices';

export default class Posts extends React.Component {
  	constructor (props) {
    	super(props);

      // At this stage we only want to get the first page
      this.posts = [];
  	}

	componentDidMount () {
		
	}

  	componentWillReceiveProps (nextProps) {
      this.posts = PostsServices.getPostsPage(1);
  	}

  	renderPost (title, author, date, tags, description) {
  		let rawDate = new Date(date);
  		let formattedDate = dateformat('dd mmm, yyyy', rawDate);
  		return (
  			<article>
  				<header>
  					<h2>
  						<a href="#">{ title }</a>
  						<p>
  							<small class="glyphicon glyphicon-user"></small>
  							by
  							<a href="#">{ author }</a>
  						</p>
  						<p>
  							<small class="glyphicon glyphicon-time"></small>
  							Posted on { formattedDate }
  						</p>
  					</h2>
  				</header>
  			</article>
		);
  	}
	render () {
		if (this.props.isLoading) {
			return (<CounterHeader title="Loading ..." />);
		}

		return (
			<div>
				<CounterHeader title="Got posts" />
				<section>
					this.state.posts.map(renderPost)
				</section>
			</div>
		)
	}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getPostsPage: () => dispatch( getPostsPage() ) 
//   }
// }

// function mapStateToProps (state) {
// 	return {
// 		isLoading: state.posts.isLoading
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Posts);
