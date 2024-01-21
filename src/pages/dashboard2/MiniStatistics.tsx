import React, { useContext } from "react";
import { Card } from "@aws-amplify/ui-react";
import "./Dashboard2.css"
import { ThemeContext } from "../../themes/ThemeContext";


interface MiniStatisticProps {
  title: string;
  amount: string;
  icon?: JSX.Element;
  percentage?: number;
}

const MiniStatistics = (props: MiniStatisticProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
    className={`amplify-card ${theme}`}
    height="100%"
      borderRadius="15px"
    >
      <div className="card-content">
        <div className="card-title"> {props.title} </div>
        <div className="card-statistics-amount">{props.amount}</div>
        <div className="card-statistics-icon">{props.icon}</div>
      </div>
    </Card>
  );
};

export default MiniStatistics;
