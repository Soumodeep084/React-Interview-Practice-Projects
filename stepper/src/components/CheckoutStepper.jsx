import React, { useEffect, useRef, useState } from 'react';

function CheckoutStepper({ Checkout }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    });
    const stepref = useRef([]);

    const handleNext = () => {
        if (currentStep < Checkout.length) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsCompleted(true);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const calculateWidth = () => {
        return ((currentStep - 1) / (Checkout.length - 1)) * 100;
    };

    useEffect(() => {
        if (stepref.current[0] && stepref.current[Checkout.length - 1]) {
            setMargins({
                marginLeft: stepref.current[0].offsetWidth / 2,
                marginRight: stepref.current[Checkout.length - 1].offsetWidth / 2,
            });
        }
    }, [stepref.current, Checkout.length]);

    const ActiveComponent = Checkout[currentStep - 1].Component;

    return (
        <>
            <div className='stepper'>
                {Checkout.map((item, index) => (
                    <div
                        key={item.name}
                        ref={(el) => (stepref.current[index] = el)}
                        className={`step ${currentStep > index + 1 || isCompleted ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`}
                    >
                        <div className='step-number'>
                            {currentStep > index + 1 || isCompleted ? (
                                <span>&#10003;</span>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div className='step-name'>{item.name}</div>
                    </div>
                ))}

                <div
                    className="progress-bar"
                    style={{
                        width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight
                    }}
                >
                    <div
                        className="progress"
                        style={{ width: `${calculateWidth()}%` }}
                    ></div>
                </div>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center", fontFamily: "Calibri", fontSize: "20px" }}>
                {!isCompleted ? (<ActiveComponent />) : <div className=''><p>Order Has been Placed</p>Thank You. Visit Again</div>}
            </div>

            <div className="btn-container">
                {currentStep > 1 && !isCompleted && (
                    <button className="btn-prev" onClick={handlePrev}>
                        Prev
                    </button>
                )}

                {!isCompleted && (
                    <button
                        className='btn-next'
                        onClick={handleNext}
                    >
                        {currentStep === Checkout.length ? "Finish" : "Next"}
                    </button>
                )}
            </div>
        </>
    );
}

export default CheckoutStepper;
