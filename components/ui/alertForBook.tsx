import React, { ReactComponentElement, ReactPropTypes } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/components/ui/alert-dialog'
import Link from 'next/link'
type Props = {
    children: string | JSX.Element | JSX.Element[] 
    open: boolean
    setOpen: (params: boolean)=>void
}
const AlertForBook = ({children, open, setOpen}: Props) => {
  return (
    <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
              {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Do you want to apply for meeting as well?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Book for a 30 Minutes Meeting in Calendy
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setOpen(false)}>
                  No Thanks
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Link
                    href='https://calendly.com/ascendai/30min'
                    className='flex items-center space-x-2'
                  >
                    Sure
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
  )
}

export default AlertForBook