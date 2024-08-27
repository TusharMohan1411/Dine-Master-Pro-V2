import { useState, useRef, useEffect } from "react";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import MainData from "../../components/Main/MainData";
import BillModal from "./BillModal";
import { AnimatePresence } from "framer-motion"
import { useDispatch } from "react-redux";
import AllMadeBills from "./AllMadeBills";
import CurrentItem from "./CurrentItem";
import CurrentBill from "./CurrentBill";
import { billsAction } from "../../contexts/BillsSlice";

export default function Bills() {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);

    const billModal = useRef();

    function handleShowBillDetails(bill) {
        setSelectedBill(bill);
        setShowModal(true);
    }

    useEffect(() => {
        if (showModal) {
            billModal.current.open();
        }
    }, [showModal]);

    function handleClose() {
        setShowModal(false);
        setSelectedBill(null);
    }

    function handleCancelBill() {
        if (window.confirm('Do you want to cancel this Bill?')) {
            dispatch(billsAction.cancelBills(selectedBill))
            setShowModal(false);
            setSelectedBill(null);
        }
    }

    return (
        <>
            <AnimatePresence>
                {showModal &&
                    <BillModal ref={billModal} bill={selectedBill} onReset={handleClose} cancelBill={handleCancelBill} />
                }
            </AnimatePresence>
            <MainSection>
                <MainHeader PageHeading={'Make Bills'}></MainHeader>
                <MainData>
                    <div className="flex flex-wrap md:flex-row flex-col gap-5 w-full justify-left pr-2 md:pr-5">
                        <div className="w-full md:w-2/5">
                            <CurrentItem />
                        </div>

                        <div className="w-full md:w-1/2">
                            <CurrentBill />
                        </div>
                    </div>
                    <AllMadeBills
                        handleShowBillDetails={handleShowBillDetails}
                    />
                </MainData>
            </MainSection >
        </>

    );
}
