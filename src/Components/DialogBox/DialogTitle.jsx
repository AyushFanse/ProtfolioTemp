import React from "react";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle
            sx={{
                mr: 7,
                p: 2,
                pl: 3,
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                fontSize: "2.5rem",
                fontWeight: 700,
                textAlign:'left'
            }}
            {...other}
        >
            {children}
            {onClose ? (
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 20,
                        top: 20,
                        width:'fit-content',
                        color: 'var(--theme)',
                        "&:hover": {
                            backgroundColor: "red"
                        }
                    }}
                >
                    <CloseIcon sx={{ fontSize: "2.5rem"}} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default BootstrapDialogTitle;
