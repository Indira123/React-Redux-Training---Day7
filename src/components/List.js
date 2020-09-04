import React from "react";
import { connect } from "react-redux";

const ConnectedList = (props) => (
    <ul>
        {props.articles.map((el, index) => (
            <li key={index}>{el.title}</li>
        ))}
    </ul>
);

const mapStateToProps = state => {
    return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;