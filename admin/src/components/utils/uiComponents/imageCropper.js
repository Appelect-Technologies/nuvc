import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgMathPlus } from 'react-icons/cg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: 'none',
    background: 'white',
    p: 4,
};

export default function ImageCropper() {
    const [open, setOpen] = React.useState(false);
    const hiddenFileInput = React.useRef(null);


    const handleOpen = () => {
        setOpen(true)
    }
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded)
    };

    const handleClose = () => setOpen(false);



    return (
        <div>
            <Box onClick={handleOpen} sx={{ width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#e3e3e3', border: '1px dashed black', cursor: 'pointer' }}>
                <CgMathPlus size={30} />
            </Box>
            <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}