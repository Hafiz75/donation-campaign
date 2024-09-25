import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register chart components and the datalabels plugin
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

/* these props comes from App component */
const Statistics = ({ yourDonation, totalDonation, updateDonationAmount }) => {
  // update the state of 'yourDonation' is in the App component by updateDonationAmount function which define in the App
  useEffect(() => {
    updateDonationAmount(); // Fetch the updated donation amount from localStorage or state
  }, [updateDonationAmount]);

  const data = {
    labels: ["Your Donation", "Total Donation"],
    datasets: [
      {
        data: [yourDonation, totalDonation],
        backgroundColor: ["red", "green"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom", // labels position in the bottom
      },
      datalabels: {
        color: "#fff", //text color
        /* here I use formatter function use for inject percentage in pie chart. the formatter function will run twice. bcz we have two value in data of datasets */
        formatter: (value, context) => {
          /* calculate the total of data's value */
          const sum = context.dataset.data.reduce(
            (accumulateValue, currentValue) => accumulateValue + currentValue,
            0
          );
          const percentage = ((value / sum) * 100).toFixed(1); // Calculate percentage
          return `${percentage}%`; // Display percentage
        },
        font: {
          size: 20, // Font size for the percentage
        },
      },
    },
  };
  console.log("Statistics component run");
  return (
    /* here I use two divs first for flex positioning of the pie chart second is for sizing of pie chart */
    <div className="flex justify-center">
      <div className="flex justify-center w-40 h-40 md:w-72 md:h-72 mt-5 md:mt-14">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;
