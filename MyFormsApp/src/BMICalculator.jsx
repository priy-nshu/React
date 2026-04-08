import React,{useState} from "react";

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () => {
        if (!height || !weight) {
            alert('Please enter both height and weight');
            return;
        }
            const heightInMeters = parseFloat((height / 100));
            const bmiValue = (parseFloat((weight / (heightInMeters * heightInMeters))).toFixed(2));
            setBmi(bmiValue);

            let bmiStatus = '';
            if (bmiValue < 18.5) {
                bmiStatus = 'Underweight';
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                bmiStatus = 'Normal weight';
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                bmiStatus = 'Overweight';
            } else {
                bmiStatus = 'Obesity';
            }
            setStatus(bmiStatus);

    };

    return (
        <div className="container">
            <h2>BMI Calculator</h2>
           <div className="input-group">
            <label>
                Height (cm):
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                />
            </label>
            </div>
            <br />
            <label>
                Weight (kg):
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"

                />
            </label>
            <br />
            <br />
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && (
                <div className="result">
                    <h3>Your BMI is: {bmi}</h3>
                    <p>Status: {status}</p>
                </div>
            )}

        </div>
    );
};

export default BMICalculator;