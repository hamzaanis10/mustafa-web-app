import AppButton from "../app.button/app.button";

interface AppOrderSummaryStatusProps {
    currentState: string
}

const AppOrderSummaryStatus: React.FC<AppOrderSummaryStatusProps> = (props: any) => {
    const { currentState } = props

    return (
        <div className="p-4 bg-white border-round" style={{ width: "100%", maxWidth: "800px" }}>
            <span className="text-xl font-semibold ml-2">Current Status:</span>
            <div className="flex justify-content-between mt-4">
                <div className="flex gap-3">
                    <span
                        className="border-circle ml-2"
                        style={{
                            margin: "auto 0",
                            width: 8,
                            height: 8,
                            backgroundColor: currentState === "Completed" ? "#00CB56" : "#FFAD4C",
                        }}
                    ></span>
                    <span style={{
                        margin: "auto 0",
                    }}>{currentState}</span>
                </div>
                {currentState === "Delivering" || currentState === "To Deliver" ? (
                    <div >
                        <AppButton label='Track Delivery' style={{ backgroundColor: "rgba(230, 255, 237, 1)", color: 'rgba(0, 203, 86, 1)', borderRadius: '8px', height: "2rem", marginTop: "20px" }} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default AppOrderSummaryStatus;