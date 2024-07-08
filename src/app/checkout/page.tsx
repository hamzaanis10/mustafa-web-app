"use client"
import React, { useState } from 'react'
import AppLoginCheckoutDialog from "@/components/common/app.login.checkout.dialog/app.login.checkout.dialog"
import AppInfoBoxDialog from "@/components/common/app.info.box.dialog/app.info.box.dialog"

const Checkout: React.FC = () => {
    const [showInfoBoxDialog, setShowInfoBoxDialog] = useState(true);

    const onHideInfoBoxDialog = () => {
        setShowInfoBoxDialog(false);
    }

    return (
        <AppLoginCheckoutDialog />
        // <AppInfoBoxDialog
        //     headerText="Remaining items in cart"
        //     onHideInfoBoxDialog={onHideInfoBoxDialog}
        //     showInfoBoxDialog={showInfoBoxDialog}
        //     description="You have 1 product(s) in your cart with your account previously, would you like to merge them or discard them?"
        // />
    )
}

export default Checkout