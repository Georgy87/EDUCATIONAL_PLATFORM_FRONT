import { makeStyles, Theme } from '@material-ui/core';

export const useProfileCourseInfoDopStyles = makeStyles((theme: Theme) => ({
    cartShopBtn: {
        backgroundColor: "#ec5252",
        color: "white",
        width: "300px",
        margin: "0 auto",
        marginTop: "20px",
        height: 50,
        opacity: 1,
        '&:hover': {
            backgroundColor: "#ec5252",
            opacity: 0.9
        },
        '&:focus': {
            outline: "none"
        },
    },
}));