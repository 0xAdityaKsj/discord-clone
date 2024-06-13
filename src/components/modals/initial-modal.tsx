"use client";

import { Dialog, DialogTrigger, DialogDescription, DialogFooter, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";



const InitialModal = () => {
    return (
        <>
            <Dialog open>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle
                            className="">Customise your server</DialogTitle>
                        <DialogDescription>
                            give your server a name you can always change it later.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
}

export default InitialModal;