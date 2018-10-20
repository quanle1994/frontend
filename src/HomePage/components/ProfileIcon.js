import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
};

function ProfileIcon(props) {
    const { classes } = props;
    return (
        <div className={classes.row}>
            <Avatar
                alt="Adelle Charles"
                scr='../../../img/grey2.png'
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </div>
    );
}

ProfileIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileIcon);