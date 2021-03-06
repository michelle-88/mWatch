import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";
import Button from "../components/Button";
import Container from "../components/Container";
import {usernameTransfer} from "../components/Login";
let detailsId;

const styles = {
    title: {
      fontFamily: 'Limelight'
    }
}

class WatchList extends Component {
    state = {
        shows: []
    };
    
    componentDidMount() {
        this.loadWatchList();
    };

    loadWatchList = () => {
        DBAPI.getWatchList(usernameTransfer)
        .then(res => {
            let showDisplay = []
            let showId = []
            res.data.watchList.forEach(show=>{
                if(showId.includes(show.id)){
                    return false
                } else {
                    showDisplay.push(show)
                    showId.push(show.id)
                }
            })
            this.setState({ shows: showDisplay })
        })
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
                <h1 style={styles.title} className="text-danger text-center my-3">Your Watch List</h1>
                <Container>
                <div className="card-columns">
                {this.state.shows.map(show => (
                    <SmallCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    poster={show.poster}
                    summary={show.summary}
                    >
                    <div className="text-center">
                    <Button className="btn btn-info" onClick={() => this.getDetails(show.id)}>
                        <i class="fas fa-info-circle fa-lg mr-2"></i>
                        View More
                    </Button>
                    <Button className="btn btn-danger" onClick={() => this.deleteShow(show._id)}>
                        <i class="fas fa-times fa-lg mr-2"></i>
                        Remove
                    </Button>
                    </div>
                    </SmallCard>
                ))}
                </div>
                </Container>
            </div>
        )
    }
}

export {WatchList, detailsId};