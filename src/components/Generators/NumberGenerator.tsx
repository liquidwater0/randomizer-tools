import "./index.scss";
import { useState } from "react";
import GenerateButton from "../GenerateButton";
import Input from "../Input";

export default function NumberGenerator() {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);

    return (
        <div className="generator-content">
            <h1 className="result">
                { randomNumber }
            </h1>

            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="min">Min</label>
                    <Input
                        id="min"
                        type="number"
                        defaultValue={min}
                        onChange={({ target }) => setMin(+(target as any).value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="max">Max</label>
                    <Input
                        id="max"
                        type="number"
                        defaultValue={max}
                        onChange={({ target }) => setMax(+(target as any).value)}
                    />
                </div>
            </div>

            <GenerateButton
                onClick={() => setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min))}
            />
        </div>
    );
}