import "./index.scss";
import { useState } from "react";
import GenerateButton from "../GenerateButton";
import Input from "../Input";
import Switch from "../Switch";

export default function DateGenerator() {
    const [showTime, setShowTime] = useState<boolean>(false);
    const [startDateMS, setStartDateMS] = useState<number>(new Date().getTime());
	const [endDateMS, setEndDateMS] = useState<number>(() => {
		const currentDate = new Date();
		return new Date().setFullYear(currentDate.getFullYear() + 1);
	});
	const [randomDate, setRandomDate] = useState<Date | null>(null);
	const startDate = new Date(startDateMS);
	const endDate = new Date(endDateMS);

	function getFormattedDate(date: Date) {
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		const year = date.getFullYear().toString().padStart(4, "0");
		const hour = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");

		let formattedDate = `${year}-${month}-${day}`;

		if (showTime) {
			formattedDate = `${formattedDate}T${hour}:${minutes}`;
		}

		return formattedDate;
	}

    return (
        <div className="generator-content">
            <h1 className="result">
                {
                    randomDate === null ?
                    `${startDate.toDateString()} ${showTime ? startDate.toLocaleTimeString() : ""}` :
                    `${randomDate.toDateString()} ${showTime ? randomDate.toLocaleTimeString() : ""}`
                }
            </h1>

            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="startDateInput">From</label>
                    <Input
                        type={showTime ? "datetime-local" : "date"}
                        id="startDateInput"
                        value={getFormattedDate(startDate)}
						onChange={({ target }) => setStartDateMS(new Date((target as any).value).getTime())}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="endDateInput">To</label>
                    <Input
                        type={showTime ? "datetime-local" : "date"}
                        id="endDateInput"
                        value={getFormattedDate(endDate)}
                        onChange={({ target }) => setEndDateMS(new Date((target as any).value).getTime())}
                    />
                </div>

                <div className="input-group">
                    <label 
                        className='time-switch-label' 
                        htmlFor='showTimeSwitch'
                    >
                        { showTime ? "Show Time" : "Hide Time" }
                    </label>
                    <Switch
                        id="showTimeSwitch"
                        checked={showTime}
                        onUpdate={value => setShowTime(value)}
                    />
                </div>
            </div>

            <GenerateButton
                onClick={() => setRandomDate(new Date(Math.floor(Math.random() * (endDateMS - startDateMS) + startDateMS)))}
            />
        </div>
    );
}