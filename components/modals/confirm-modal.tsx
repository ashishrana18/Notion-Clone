"use client"
import React from "react";
import { 
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger
} from "../ui/alert-dialog"

interface ConfirmModalProps{
    children:React.ReactNode;
    onConfirm:()=>void;
};

export const ConfirmModal=({
    children,
    onConfirm
}:ConfirmModalProps)=>{

    const handleConfirm=(
        // e: React.MouseEvent<HTMLDivElement,MouseEvent>
        e: React.MouseEvent<HTMLButtonElement>
    )=>{
        e.stopPropagation();
        onConfirm();
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}