import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className={"swipe-buttons"}>
            <div className="container">
                <IconButton className="repeat">
                    <ReplayIcon fontSize="large"/>
                </IconButton>
                <IconButton className="left">
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <IconButton className="start">
                    <StarRateIcon fontSize="large"/>

                </IconButton>
                <IconButton className="right">
                    <FavoriteIcon fontSize="large"/>
                </IconButton>

                <IconButton className="light">
                    <FlashOnIcon fontSize="large"/>
                </IconButton>

            </div>
        </div>
    )
}

export default SwipeButtons
