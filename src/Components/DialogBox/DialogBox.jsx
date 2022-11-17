import React from "react";
import {
    Dialog,
    DialogContent,
    Typography,
    DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DialogTitle from "./DialogTitle";

const DialogBox = ({ RowData, handleClose, open }) => {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                id="dialog_outer"
            >
                <DialogTitle onClose={handleClose} id="dialog_header">
                    <Typography id="dialog_heading">{RowData.title}</Typography>
                    <Typography id="dialog_date">{RowData.date}</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom id="dialog_body_data">
                        {RowData.description}
                    </Typography>
                    {RowData.skills ? (
                        <div>
                            <strong id="dialog_subheading">Skills</strong>
                            <Typography gutterBottom id="dialog_body_data">
                                {RowData.skills}
                            </Typography>
                        </div>
                    ) : null}
                    {RowData.features ? (
                        <div>
                            <strong id="dialog_subheading">Features</strong>
                            <Typography gutterBottom id="dialog_body_data">
                                {RowData.features}
                            </Typography>
                        </div>
                    ) : null}
                </DialogContent>
                <DialogActions id="dialog_action_buttons">
                    {RowData.frontend ? (
                        <a
                            href={RowData.frontend}
                            target="_blank"
                            rel="noreferrer"
                            id="viewLinkCard"
                        >
                            FrontEnd
                        </a>
                    ) : null}
                    {RowData.admin ? (
                        <a
                            href={RowData.admin}
                            target="_blank"
                            rel="noreferrer"
                            id="viewLinkCard"
                        >
                            AdminPage
                        </a>
                    ) : null}
                    {RowData.backend ? (
                        <a
                            href={RowData.backend}
                            target="_blank"
                            rel="noreferrer"
                            id="viewLinkCard"
                        >
                            BackEnd
                        </a>
                    ) : null}
                    {RowData.site_link ? (
                        <a
                            href={RowData.site_link}
                            target="_blank"
                            rel="noreferrer"
                            id="viewLinkCard"
                        >
                            Visit Website
                        </a>
                    ) : null}
                </DialogActions>
            </BootstrapDialog>
        </>
    );
};

export default DialogBox;
