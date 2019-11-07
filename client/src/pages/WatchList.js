import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";
import Button from "../components/Button";
import {usernameTransfer} from "../components/Login";
let detailsId;

class WatchList extends Component {
    state = {
        shows: []
    };
    
    componentDidMount() {
        console.log(usernameTransfer);
        this.loadWatchList();
    };

    loadWatchList = () => {
        DBAPI.getWatchList(usernameTransfer)
        .then(res => this.setState({ shows: res.data.watchList }))
        .catch(err => console.log(err));
    }

    deleteShow = id => {
        DBAPI.deleteShow(usernameTransfer, id)
            .then(res => this.loadWatchList())
            .catch(err => console.log(err));
    }

    routeChange() {
        let path = "/peanutgallery";
        this.props.history.push(path);
    }

    getDetails = id => {
        detailsId = id;
        this.routeChange();
    }

    render() {
        return (
            <div>
                {this.state.shows.map(show => (
                    <SmallCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    poster={show.poster}
                    summary={show.summary}
                    >
                    <Button className="btn btn-danger" onClick={() => this.deleteShow(show._id)}>
                        Remove
                    </Button>
                    <Button className="btn btn-info" onClick={() => this.getDetails(show.id)}>
                        View More
                    </Button>
                    </SmallCard>
                ))}
            </div>
        )
    }
}

export {WatchList, detailsId};