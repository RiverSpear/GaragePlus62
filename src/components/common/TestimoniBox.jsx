import React from "react";

function TestimoniBox(props) {
    return (
        <>
            <div className="px-2 sm:px-4 w-full h-full">
                <div className="flex flex-col gap-3 bg-gray-50 border border-gray-300 p-6 rounded-3xl w-full h-full">
                    <p className="flex-1 worksans text-sm">{props.testimony}</p>
                    <p className="worksans-600 text-sm">{props.reviewerName}</p>
                </div>
            </div>
        </>
    );
}

export default TestimoniBox;
