import React from "react";
import Article from "./article.js";

class ArticleList extends React.Component {
    alertText(desc) {
        alert(`This article is about ${desc}`);
    }
    favorite(title) {
        alert(`You like ${title}`)
    }
    render() {
        let articles = this.props.articles.map((item) => {
            return <Article handleDescription={this.alertText} handleFavorite={this.favorite} name={item.name} desc={item.desc} date={item.date} />
        });
        return (
            <div className="container">
                {articles}
            </div>
        )
    }
}


export default ArticleList;