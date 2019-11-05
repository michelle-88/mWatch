import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";
import Button from "../components/Button";
import TVAPI from "../utils/TVAPI";
import { Link } from "react-router-dom";
import PrivateNav from "../components/PrivateNav";
import {Login, usernameTransfer} from "../components/Login";


class WatchList extends Component {
    state = {
        shows: []
    };
    
    componentDidMount() {
        this.loadWatchList();
    };

    loadWatchList = () => {
        DBAPI.getWatchList(usernameTransfer)
        .then(res => this.setState({ shows: res.data.watchList }))
        .catch(err => console.log(err));
    }

    deleteShow = id => {
        DBAPI.deleteShow(id)
            .then(res => this.loadWatchList())
            .catch(err => console.log(err));
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
                    <Button className="btn btn-info">
                    <Link className="text-white" to={"/api/users/showdetails/" + show.id}>
                        View More
                    </Link>
                    </Button>
                    </SmallCard>
                ))}
            </div>
        )
    }
}

export default WatchList;