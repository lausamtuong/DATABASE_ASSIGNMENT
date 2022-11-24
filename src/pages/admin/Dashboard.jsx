import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Box from "../../components/box/Box";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../../components/summary-box/SummaryBox";
import { colors, data } from "../../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../../components/overall-list/OverallList";
import RevenueList from "../../components/revenue-list/RevenueList";
import avt from "../../images/avt_default.png";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import "./dashboard.scss";
import { getTransaction } from "../../reduxToolkit/apiRequest";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Avatar } from "@nextui-org/react";
const Dashboard = () => {
  const [trans, setTrans] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getTransaction({ action: "fetchTrans" }).then((res) =>
      setTrans([...res].reverse())
    );
  }, []);
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">Overall</div>
        <div className="mb">
          <OverallList />
        </div>
      </DashboardWrapperRight>
      <DashboardWrapperRight>
        <div className="title mb">Lastest Transactions</div>
        <div className="mb"></div>
        <ListUserTransactions array={trans} />

        <div className="viewOnPC">View this page on PC</div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

export default Dashboard;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">Revenue by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};

const ButtonStatus = (props) => {
  return <button className={`widgetButton ${props.type}`}>{props.type}</button>;
};

const UserTranscations = (props) => {
  return (
    <>
      <td className="widgetUser">
        <Avatar
          size="xl"
          src={props.img}
          bordered
          zoomed
          squared
          color={
            props.status == "active"
              ? "success"
              : props.status == "pending"
              ? "warning"
              : "error"
          }
        />
        <span>{props.name}</span>
      </td>
      <td className="widgetDate">{props.date}</td>
      <td className="widgetAmount">{props.amount}</td>
      <td className="widgetStatus">
        <ButtonStatus type={props.status} />
      </td>
      <td>
        <button className="widgetDisplay">
          <RemoveRedEyeIcon />
          <span>Display</span>
        </button>
      </td>
    </>
  );
};

const ListUserTransactions = ({ array }) => {
  return (
    <table className="widgetTable">
      <tr>
        <th>Customer</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Display</th>
      </tr>
      {array.map((item, index) => (
        <tr key={index}>
          <UserTranscations
            img={item?.image?item.image:avt}
            name={item.username}
            date={item.time}
            status="approved  "
            
            amount={item.amount}
          />
        </tr>
      ))}
    </table>
  );
};
